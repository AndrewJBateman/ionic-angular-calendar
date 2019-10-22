import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {

	eventSource = [];

	calendar = {
		mode: 'month',
		currentDate: new Date()
	};

	constructor(private db: AngularFirestore) {

	}

	addNewEvent() {

	}

	onViewTitleChanged(title) {
		console.log(title);
	}

	onEventSelected(event) {
		console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
	}

	onTimeSelected(ev) {
		console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
			(ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
		// this.selectedDate = ev.selectedTime;
	}

	onCurrentDateChanged(event: Date) {
		console.log('current date change: ' + event);
	}

	onRangeChanged(ev) {
		console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
	}

}
