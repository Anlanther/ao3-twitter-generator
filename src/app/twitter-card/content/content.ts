import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { LinkTransformerPipe } from '../../pipes/link-transformer-pipe';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';

@Component({
  selector: 'app-content',
  imports: [CommonModule, LinkTransformerPipe, SafeHtmlPipe],
  templateUrl: './content.html',
  styleUrl: './content.scss',
})
export class Content {
  message = input.required<string>();
}
