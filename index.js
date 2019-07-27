var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100) + 1
  cart.push({itemName: item, itemPrice: price})
  
  return `${item} has been added to your cart.`
}

function viewCart() {
  sizeOfCart = cart.length
  if (sizeOfCart === 0){
    return "your shopping cart is empty."
  } else {
    return `In your cart, `
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
