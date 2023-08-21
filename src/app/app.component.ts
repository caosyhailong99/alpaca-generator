import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'alpaca-generator';
  accessoriesOption = [
    'Hair',
    'Ears',
    'Eyes',
    'Mouth',
    'Neck',
    'Leg',
    'Accessories',
    'Background',
  ];
  stylesOption = ['Default', 'Curls', 'Short', 'Bang', 'Elegant', 'Quiff'];
}
