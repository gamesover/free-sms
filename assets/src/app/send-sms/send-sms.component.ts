import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { SMS }        from '../sms/sms';
import { SMSService } from '../sms/sms.service';

@Component({
  selector: 'send-sms',
  templateUrl: 'send-sms.component.pug',
  styleUrls: [ 'send-sms.component.styl' ]
})
export class SendSMSComponent implements OnInit {
  public myForm: FormGroup; // our model driven form
  public submitted: boolean; // keep track on whether form is submitted
  public events: any[] = []; // use later to display form changes

  constructor(private _fb: FormBuilder, private smsService: SMSService) { }

  ngOnInit(): void {
    this.myForm = this._fb.group({
      to: ['', [<any>Validators.required, <any>Validators.pattern(/^04\d{8}$/)]],
      message: ['', [<any>Validators.required]]
    });

    this.subcribeToFormChanges();
  }

  send(sms: SMS, isValid: boolean) {
    this.submitted = true; // set form submit to true

    if (isValid) {
      this.smsService.send(sms)
      .then(() => this.myForm.reset());
    }
  }

  resetForm() {

  }

  subcribeToFormChanges() {
    // initialize stream
    const myFormValueChanges$ = this.myForm.valueChanges;

    // subscribe to the stream
    myFormValueChanges$.subscribe(x => this.events
    .push({ event: 'STATUS CHANGED', object: x }));
  }
}

