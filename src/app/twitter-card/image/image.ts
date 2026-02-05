import { Component, input } from '@angular/core';

@Component({
  selector: 'app-image',
  imports: [],
  templateUrl: './image.html',
  styleUrl: './image.scss',
})
export class Image {
  url = input.required<string>();
}
