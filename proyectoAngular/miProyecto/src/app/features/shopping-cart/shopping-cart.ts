import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CartItem } from '../../core/models/cart-item';
import { CartService } from '../../core/services/cart';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart.html',
  styleUrls: ['./shopping-cart.css']
})
export class ShoppingCart {
  items$: Observable<CartItem[]>;
  total$: Observable<number>;

  constructor(private cartService: CartService) {
    // Obtenemos los observables directamente del servicio
    this.items$ = this.cartService.items$;
    this.total$ = this.cartService.total$; 
  }

  onToggleItem(id: number): void {
    this.cartService.toggleItemCompletion(id);
  }

  onDeleteItem(id: number): void {
    this.cartService.deleteItem(id);
  }
}