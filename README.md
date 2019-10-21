# Ionic Angular Dragdrop

App to open a locally-stored Comma Separated Values (CSV) file and allow it to be modified and saved/shared via a social media plugin if using a mobile or as a xls file if using a PC. This is another great tutorial from [Simon Grimm of the IonicAcademy, Youtube video 'How to Use Angular Drag & Drop with Ionic 4'](https://www.youtube.com/watch?v=bU3tk2GHx3c).

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

* f

## Screenshots

![screenshot](./img/home_csv.png)

## Technologies

* [Ionic v5.15.0](https://ionicframework.com/)
* [Ionic/angular v4.7.1](https://ionicframework.com/)
* [Angular v8.1.2](https://angular.io/)

## Setup

* To start the server on _localhost://8100_ type: 'ionic serve'
* To start the server on a mobile using Ionic devapp and connected via wifi, type: 'ionic serve --devapp'
* The Ionic DevApp was installed on an Android device from the Google Play app store.

## Code Examples

* code from Cordova plugin to open a file on a mobile device file system with its default application

```typescript
// parse data asynchronously as per papa parse documentation.
this.papa.parse(csvData, {
    complete: parsedData => {
    this.headerRow = parsedData.data.splice(0, 1)[0];
    this.csvData = parsedData.data;
    console.log('data array: ', this.csvData);
    }
});
```

## Features

* cvs file access and editing.

## Status & To-do list

* Status: Code complete and working, tested using ionic server and Ionic devapp.

* To-do: use as part of my own Ionic apps.

## Inspiration

[Simon Grimm IonicAcademy Youtube video 'Ionic Native File Explorer'](https://www.youtube.com/watch?v=tyZjicNtbyk)

[Written version of tutorial from Devtactic website: How to Import & Export CSV Data using Papa Parse with Ionic](https://devdactic.com/csv-data-papa-parse-ionic/)

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
