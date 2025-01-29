import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  items: {
    id: number; name: string; date1: string, date2: string,
    completed: boolean
  }[] = [];
  nextId: number = 1;


  constructor(public navCtrl: NavController) {}

  addItem(name: string, date1: string, date2: string): void 
  {
    if (name.trim() && date1.trim() && date2.trim()) {
      this.items.push({
        id: this.nextId++,
        name: name.trim(),
        date1: date1.trim(),
        date2: date2.trim(),
        completed: false,
      });
    } else {
      console.error('El nombre y la fecha no pueden estar vacios');
    }
  }

  toggleCompleted(id: number): void
  {
    const item = this.items.find(item => item.id === id);
    if(item)
    {
      item.completed = !item.completed;
    }
  }

  removeItem(id: number): void
  {
    this.items = this.items.filter(item => item.id !==id);
  }

}
