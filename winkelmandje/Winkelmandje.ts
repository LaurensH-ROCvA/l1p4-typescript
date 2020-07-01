import { IWinkelmandje } from './IWinkelmandje';
import { Product } from './Product';

export abstract class Winkelmandje implements IWinkelmandje {
    protected producten: Array<Product> = new Array<Product>();

    public voegToe(product: Product): void {
        this.producten.push(product);
    }
    abstract toonMandje(): void;
}
