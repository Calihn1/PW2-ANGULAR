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
  // Obtenemos los observables directamente del servicio
  items$: Observable<CartItem[]> = cartService.items$;
  total$: Observable<number> = cartService.total$;

  constructor(private cartService: CartService) {}

  onToggleItem(id: number): void {
    this.cartService.toggleItemCompletion(id);
  }

  onDeleteItem(id: number): void {
    this.cartService.deleteItem(id);
  }
}