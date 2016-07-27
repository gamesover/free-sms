import { Component } from '@angular/core';
require('../../public/css/styles.styl');

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: [require('./app.component.styl')]
})
export class AppComponent { }