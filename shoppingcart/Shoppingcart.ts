import { Item } from './Item';
import { IShoppingcart } from './IShoppingcart';
export abstract class Shoppingcart implements IShoppingcart {
    printCart(): void { };
    // maak een ArrayList voor geshopte Items
    public itemList: Array<Item> = new Array<Item>();
    // methode voor het toevoegen van Items in ArrayList
    public addToCart(item: Item): void {
        this.itemList.push(item);
    }
}
