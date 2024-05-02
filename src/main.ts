import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { WasmLoaderService } from './app/wasm-loader.service';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}: {{num}}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <button (click)="updateNum()" >Click me</button>
  `,
})
export class App {
  name = 'Angular';
  num = 0;

  constructor(private wasmLoader: WasmLoaderService) {}

  updateNum() {
    this.num = this.wasmLoader.add(1, 2);
  }
}

bootstrapApplication(App);
