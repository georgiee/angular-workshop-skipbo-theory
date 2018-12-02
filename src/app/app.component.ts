import { Component } from '@angular/core';

import { ReflectiveInjector } from '@angular/core';
import { InjectionToken } from '@angular/core';

class GreetNormal {
  greet() {
    console.log('Hello Sir!');
  }
}
class GreetLoud {
  greet() {
    console.log('HELLO SIR!');
  }
}

const GreetingService1 = new InjectionToken<string>('GreetingService');
const GreetingService2 = new InjectionToken<string>('GreetingService');

const myInjector = ReflectiveInjector.resolveAndCreate([
  { provide: GreetingService1, useClass: GreetNormal },
  { provide: GreetingService2, useClass: GreetLoud },
  { provide: 'GreetingService', useClass: GreetNormal },
  { provide: 'GreetingService', useClass: GreetLoud }
]);

const greeterA = myInjector.get(GreetingService1);
greeterA.greet();

const greeterB = myInjector.get(GreetingService2);
greeterB.greet();

const greeterC = myInjector.get('GreetingService');
greeterC.greet();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workshop-theory';
}
