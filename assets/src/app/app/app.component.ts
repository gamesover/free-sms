import { Component }          from '@angular/core';

import '../../../public/css/styles.styl';

@Component({
    selector: 'sms-app',
    templateUrl: 'app.component.pug',
    styleUrls: [
        'app.component.styl'
    ]
})

export class AppComponent {
    title = 'Sending SMS to Australia';
}