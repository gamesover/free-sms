import { Component } from '@angular/core';
require('../../public/css/styles.css');


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: [require('./app.component.scss')]
})
export class AppComponent { }