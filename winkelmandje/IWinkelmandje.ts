import { Product } from './Product';

export interface IWinkelmandje {
    voegToe(procuct: Product): void;
    toonMandje(): void;
}
