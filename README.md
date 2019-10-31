# Ionic Angular Calendar

App to show an Ionic calendar. This is another great tutorial from [Jameson Saunders of JamiBot, Youtube video 'Ionic 4 Custom Calendar Tutorial'](https://www.youtube.com/watch?v=SYz-tH3XOF8&t=766s).

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* Uses the [ionic2-calendar](https://www.npmjs.com/package/ionic2-calendar) package to display events input by the user.

* This app is set up to use a Google Firebase backend to store calender entries.

## Screenshots

![screenshot](./img/calendar.png)

## Technologies

* [Ionic v5.0.0](https://ionicframework.com/)
* [Ionic/angular v4.11.1](https://ionicframework.com/)
* [Angular v8.1.2](https://angular.io/)
* [ionic2-calendar v0.5.7](https://www.npmjs.com/package/ionic2-calendar)
* [AngularFire2 v5.2.1](https://github.com/angular/angularfire/blob/master/docs/ionic/v3.md) for Google Firebase Database connection.

## Setup

* Create a Google Firebase database and add access credentials to environment.ts
* To start the server on _localhost://8100_ type: 'ionic serve'
* To start the server on a mobile using Ionic devapp and connected via wifi, type: 'ionic serve --devapp'
* The Ionic DevApp was installed on an Android device from the Google Play app store.

## Code Examples

* function to add a new event - including start and end time. Title is derived from seconds and is intended to create semi-random data.

```typescript
  addNewEvent() {
    const start = this.selectedDate;
    const end = this.selectedDate;
    end.setMinutes(end.getMinutes() + 60);

    const event = {
      title: 'Event #' + start.getMinutes(),
      startTime: start,
      endTime: end,
      allDay: false
    };

    this.db.collection('events').add(event);
  }
```

## Features

* Google Firebase storage of calendar events. Data is retrieved from Firebase in the constructor function at the beginning of the page lifecycle.

* Calender date format can be changed using options from the ionic2-calender.

## Status & To-do list

* Status: Working basic calendar.

* To-do: A lot more complexity can be added to this calendar app. The option to change the view from day to week to month would be useful - as shown in the [demo project](https://github.com/twinssbc/Ionic2-Calendar/tree/v5/demo).

## Inspiration

* [Jameson Saunders of JamiBot, Youtube video 'Ionic 4 Custom Calendar Tutorial'](https://www.youtube.com/watch?v=SYz-tH3XOF8&t=766s).

* [Ionic2-Calendar github repo](https://github.com/twinssbc/Ionic2-Calendar)

* [demo project](https://github.com/twinssbc/Ionic2-Calendar/tree/v5/demo).

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
