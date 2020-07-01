import { Winkelmandje } from './Winkelmandje';

export class MijnWinkelmandje extends Winkelmandje {
    public toonMandje(): void {
        let mandjeString: string = 'Product ID\t\tOmschrijving\t\tPrijs\t\tAantal';
        for (let product of this.producten) {
            mandjeString += `\n${product.getID()}\t\t${product.getOmschrijving()}\t\t${product.getPrijs()}\t\t${product.getAantal()}`;
        }
        console.log(mandjeString);
    }
}
