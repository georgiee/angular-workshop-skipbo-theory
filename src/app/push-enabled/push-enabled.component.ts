import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-push-enabled',
  templateUrl: './push-enabled.component.html',
  styleUrls: ['./push-enabled.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushEnabledComponent implements OnInit {
  @Input() someInput = 'n/a';
  greeting = 'nothing yet';

  constructor(private _cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  changeInput(value) {
    this.someInput = value;
    // this is required otherwise this component won't detect the new value
    // this._cdr.markForCheck();
  }

  toggle() {
    setTimeout(() => {
      if (this.greeting !== 'my greeting 😊') {
        this.greeting = 'my greeting 😊';
      } else {
        this.greeting = 'my greeting 🤪';
      }
      // It might look like it's working because something is happening
      // when you toggle with the button. But it's the wrong value displayed.
      // It's always the one from before because you trigger change detection for this component
      // with the click event. At that time the value is the old one (the next will arive a tick later, because of the timeout)
      // You have to tell Angular that something happened to it will refresh the template
      // this._cdr.markForCheck();
      console.log('changed to', this.greeting);
    }, 0);
  }
}
