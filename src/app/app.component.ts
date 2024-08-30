import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomSelectComponent } from './custom-select/custom-select.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import * as tarefas from './data/tarefas.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomSelectComponent, CustomButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @Input() comodo: string;
  @Input() tempo: string;
  task: string = '';
  room: string = '';
  emoji: string = '';
  async randomTask() {
    console.log(this.comodo);
    console.log(this.tempo);
    let id = this.randomInteger(0, tarefas.data.length);
    this.emoji = tarefas.data[id].emoji;
    this.task = tarefas.data[id].nome;
    this.room = tarefas.data[id].comodo;
    const items = [
      '🧹',
      '🛋️',
      '📺',
      '🧼',
      '🪣',
      '🍳',
      '🧽',
      '🥄',
      '🧊',
      '🍴',
      '🚽',
      '🚿',
      '🛁',
      '🧴',
      '🧺',
      '🪴',
      '🛏️',
      '🪞',
      '🪑',
      '🥣'
    ];
  }

  randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  title = 'task-mixer';
}
