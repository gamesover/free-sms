import { Component }          from '@angular/core';

import '../../public/css/styles.styl';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.pug',
    styleUrls: [
        './app.component.styl'
    ]
})

export class AppComponent {
    title = 'Tour of Heroes';
}