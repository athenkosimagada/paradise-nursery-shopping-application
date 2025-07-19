import cart from "../data/cart.json";

const cartService = {
  getCart() {
    return cart;
  },

  addToCart(item) {
    cart.push(item);
  },

  updateQuantity(item, quantity) {
    item.quantity = quantity;
  },

  removeFromCart(item) {
    cart.splice(cart.indexOf(item), 1);
  },

  clearCart() {
    cart.splice(0, cart.length);
  },
};

export default cartService;
