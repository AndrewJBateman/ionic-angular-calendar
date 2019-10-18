# Ionic Angular Explorer

App to open a locally-stored Comma Separated Values (CSV) file and allow it to be modified and saved/shared via a social media plugin if using a mobile or as a xls file if using a PC. This is another great tutorial from [Simon Grimm of the IonicAcademy, Youtube video 'Ionic Native File Explorer'](https://www.youtube.com/watch?v=pDqG3iYDdM0&t=141s).

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

* Includes 'export' button top left to save the file to social media etc.

* The **Cordova-plugin-file** plugin implements a File API allowing read/write access to files stored on the device.

* The **cordova-plugin-x-socialsharing** shares text, files, images and links via social networks, sms and email.

## Screenshots

![screenshot](./img/home_csv.png)

## Technologies

* [Ionic v5.15.0](https://ionicframework.com/)
* [Ionic/angular v4.7.1](https://ionicframework.com/)
* [Angular v8.1.2](https://angular.io/)
* [cordova-plugin-file v6.0.2](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-file/)
* [cordova-plugin-x-socialsharing v5.6.0](https://ionicframework.com/docs/native/social-sharing)
* [mholt: Fast and powerful CSV (delimited text) parser - github link](https://github.com/mholt/PapaParse)
* [ngx-papaparse v3.0.4 (latest is 4.0.4)](https://github.com/alberthaff/ngx-papaparse) & [Albert Haff website](https://alberthaff.dk/projects/ngx-papaparse/docs/v3)

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
