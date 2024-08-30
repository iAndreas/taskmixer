import {Component, Input} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

/** @title Select with multiple selection */
@Component({
  selector: 'custom-select',
  templateUrl: 'custom-select.component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
})
export class CustomSelectComponent {
  @Input() customTitle: string;
  toppings = new FormControl('');
  toppingList: string[];

  ngOnInit(){
    if(this.customTitle == 'Cômodo') {
      this.toppingList = ['Banheiro', 'Cozinha', 'Lavação', 'Quarto', 'Varanda'];
      return;
    }

    this.toppingList = ['Rápido', 'Médio', 'Longo'];
  }
}