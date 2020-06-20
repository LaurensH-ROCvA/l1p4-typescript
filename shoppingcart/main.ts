import { Item } from './Item';
import { MyShoppingcart } from './MyShoppingcart';
let item1: Item = new Item('001', 'Toshiba', 'SX', 999.99, 10);
let item2: Item = new Item('002', 'Acer', 'Aspire', 1099.99, 5);

try {
    item1.setPrijs(200);
} catch (e) {
    console.log(e.message);
}

let myShoppingcart: MyShoppingcart = new MyShoppingcart();
myShoppingcart.addToCart(item1);
myShoppingcart.addToCart(item2);
myShoppingcart.printCart();
console.log('Totaalbedrag is: ' + myShoppingcart.getTotaal());
