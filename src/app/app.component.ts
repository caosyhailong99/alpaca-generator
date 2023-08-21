import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'alpaca-generator';
  currentPart = 'Hair';
  chosenHair = 'Default';
  chosenEars = 'Default';
  chosenEyes = 'Default';
  chosenMouth = 'Default';
  chosenNeck = 'Default';
  chosenLeg = 'Default';
  chosenAccessory = 'Earings';
  chosenBackground = 'blue50';
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
  hairStyleOption = ['Default', 'Curls', 'Short', 'Bang', 'Elegant', 'Quiff'];
  earsStyleOption = [
    { name: 'Default', value: 'default' },
    { name: 'Tilt backward', value: 'tilt-backward' },
    { name: 'Tilt forward', value: 'tilt-forward' },
  ];
  eyesStyleOption = ['Default', 'Angry', 'Naughty', 'Panda', 'Smart', 'Star'];
  mouthStyleOption = ['Default', 'Astonished', 'Eating', 'Laugh', 'Tongue'];
  neckStyleOption = [
    { name: 'Default', value: 'default' },
    { name: 'Bend backward', value: 'bend-backward' },
    { name: 'Bend forward', value: 'bend-forward' },
    { name: 'Thick', value: 'thick' },
  ];
  legStyleOption = [
    { name: 'Default', value: 'default' },
    { name: 'Bubble tea', value: 'bubble-tea' },
    { name: 'Cookie', value: 'cookie' },
    { name: 'Game console', value: 'game-console' },
    { name: 'Tilt backward', value: 'tilt-backward' },
    { name: 'Tilt forward', value: 'tilt-forward' },
  ];
  accessoriesStyleOption = ['Earings', 'Flower', 'Glasses', 'Headphone'];
  backgroundStyleOption = [
    'blue50',
    'blue60',
    'blue70',
    'darkblue30',
    'darkblue50',
    'darkblue70',
    'green50',
    'green60',
    'green70',
    'grey40',
    'grey70',
    'grey80',
    'red50',
    'red60',
    'red70',
    'yellow50',
    'yellow60',
    'yellow70',
  ];

  onClickPart(part: string) {
    this.currentPart = part;
  }

  onClickHairStyle(hairStyle: string) {
    this.chosenHair = hairStyle;
  }

  onClickEarsStyle(earsStyle: string) {
    this.chosenEars = earsStyle;
  }

  onClickEyesStyle(eyesStyle: string) {
    this.chosenEyes = eyesStyle;
  }

  onClickMouthStyle(mouthStyle: string) {
    this.chosenMouth = mouthStyle;
  }

  onClickNeckStyle(neckStyle: string) {
    this.chosenNeck = neckStyle;
  }

  onClickLegStyle(legStyle: string) {
    this.chosenLeg = legStyle;
  }

  onClickAccessoriesStyle(accessoriesStyle: string) {
    this.chosenAccessory = accessoriesStyle;
  }

  onClickBackgroundStyle(backgroundStyle: string) {
    this.chosenBackground = backgroundStyle;
  }
}
