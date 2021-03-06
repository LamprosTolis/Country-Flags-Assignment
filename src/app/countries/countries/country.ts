import { Language } from './Language';

export interface Country{
    topLevelDomain: string;
    region: string;
    subregion: string;
    population: number;
    timezones: string;
    borders: string;
    nativeName: string;
    languages: Language[];
    name: string;
    flag: string;
    capital: string;

}
