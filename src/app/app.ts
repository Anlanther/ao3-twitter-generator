import { Component, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormMenu } from './form-menu/form-menu';
import { TwitterCard } from './twitter-card/twitter-card';

@Component({
  selector: 'app-root',
  imports: [TwitterCard, FormMenu],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ao3-twitter-generator');
  currentForm!: FormGroup;

  onFormChanged(form: FormGroup): void {
    this.currentForm = form;
  }
}
