import { Laptop } from './Laptop';
import { Boek } from './Boek';
import { MijnWinkelmandje } from './MijnWinkelmandje';

let laptop1: Laptop = new Laptop('001', 'Toshiba', 'Satellite', 999.99, 10);
let boek1: Boek = new Boek('1765343536', '"A Little Life"', 'Hanya Yanagihara', 39.99, 1);
let mijnWinkelmandje: MijnWinkelmandje = new MijnWinkelmandje();

mijnWinkelmandje.voegToe(laptop1);
mijnWinkelmandje.voegToe(boek1);
mijnWinkelmandje.toonMandje();
