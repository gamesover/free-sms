import { Component } from '@angular/core';
require('../../public/css/styles.styl');

@Component({
    selector: 'my-app',
    template: require('./app.component.pug')(),
    styles: [require('./app.component.styl')]
})
export class AppComponent { }