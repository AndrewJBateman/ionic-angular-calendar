import { Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  eventSource = [];

  calendar = {
    mode: "month",
    currentDate: new Date(),
  };
  selectedDate = new Date();

  constructor(private db: AngularFirestore) {
    this.db
      .collection(`events`)
      .snapshotChanges()
      .subscribe((colSnap) => {
        this.eventSource = [];
        colSnap.forEach((snap) => {
          const event: any = snap.payload.doc.data();
          event.id = snap.payload.doc.id;
          event.startTime = event.startTime.toDate();
          event.endTime = event.endTime.toDate();
          console.log(event);
          this.eventSource.push(event);
        });
      });
  }

  addNewEvent() {
    const start = this.selectedDate;
    const end = this.selectedDate;
    end.setMinutes(end.getMinutes() + 60);

    // event object created to include semi-random title
    const event = {
      title: "Event #" + start.getMinutes(),
      startTime: start,
      endTime: end,
      allDay: false,
    };

    this.db.collection("events").add(event);
  }

  onViewTitleChanged(title) {
    console.log(title);
  }

  onEventSelected(event) {
    console.log(
      "Event selected:" +
        event.startTime +
        "-" +
        event.endTime +
        "," +
        event.title
    );
  }

  onTimeSelected(ev) {
    console.log(
      "Selected time: " +
        ev.selectedTime +
        ", hasEvents: " +
        (ev.events !== undefined && ev.events.length !== 0) +
        ", disabled: " +
        ev.disabled
    );
    this.selectedDate = ev.selectedTime;
  }

  onCurrentDateChanged(event: Date) {
    console.log("current date change: " + event);
  }

  onRangeChanged(ev) {
    console.log(
      "range changed: startTime: " + ev.startTime + ", endTime: " + ev.endTime
    );
  }
}
