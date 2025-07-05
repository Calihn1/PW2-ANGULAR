import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private itemsSubject = new BehaviorSubject<CartItem[]>([
    { id: 1, name: 'ZAPATILLAS', price: 250.00, quantity: 3, completed: false },
    { id: 2, name: 'PANTALONES', price: 150.00, quantity: 4, completed: false },
    { id: 3, name: 'MANZANA', price: 10.50, quantity: 2, completed: true },
    { id: 4, name: 'PAN', price: 3.50, quantity: 8, completed: true },
    { id: 5, name: 'CASACA', price: 300.00, quantity: 2, completed: false }
  ]);
  
  // Se expone los items como un Observable para que los componentes se suscriban
  public items$: Observable<CartItem[]> = this.itemsSubject.asObservable();
  
  // Un Observable para el total, que se recalcula automáticamente
  public total$: Observable<number> = this.items$.pipe(
    map(items => items
      .filter(item => !item.completed) // Solo suma los no marcados
      .reduce((acc, item) => acc + (item.price * item.quantity), 0)
    )
  );

  constructor() {}

  deleteItem(id: number): void {
    const currentItems = this.itemsSubject.getValue();
    const updatedItems = currentItems.filter(item => item.id !== id);
    this.itemsSubject.next(updatedItems);
  }

  toggleItemCompletion(id: number): void {
    const currentItems = this.itemsSubject.getValue();
    const updatedItems = currentItems.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    this.itemsSubject.next(updatedItems);
  }
}