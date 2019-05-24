import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { Cart } from "../cart.entity";
import { Item } from "../item.entity";

@Component({
  selector: "app-billing",
  templateUrl: "./billing.component.html",
  styleUrls: ["./billing.component.css"]
})
export class BillingComponent implements OnInit {
  constructor(private cartService: CartService) {}
  private cart: Cart;
  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(item: Item) {
    this.cartService.removeItem(item);
  }
}
