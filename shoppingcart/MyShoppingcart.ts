import { Shoppingcart } from './Shoppingcart';
export class MyShoppingcart extends Shoppingcart {
    public printCart(): void {
        // formatteer de string kolommen
        console.log('Product Omschrijving \t Prijs \t Aantal\n');
        this.itemList.forEach(function (item) {
            console.log(
                item.getId() + '\t' + item.getOmschrijving() + '\t' +
                item.getPrijs() + '\t' + item.getAantal() + '\n'
            );
        });
    }
    public getTotaal(): number {
        let totaal = 0;
        this.itemList.forEach(function (item) {
            totaal += item.getAantal() * item.getPrijs();
        });
        return totaal;
    }
}
