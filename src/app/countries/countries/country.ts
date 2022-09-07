import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Language } from './Language';



    export interface Name {
        common: string;
        official: string;
        nativeName: Record<string,string>;
    }

    export interface EUR {
        name: string;
        symbol: string;
    }

    export interface ALL {
        name: string;
        symbol: string;
    }

    export interface UAH {
        name: string;
        symbol: string;
    }

    export interface RSD {
        name: string;
        symbol: string;
    }

    export interface MKD {
        name: string;
        symbol: string;
    }

    export interface NOK {
        name: string;
        symbol: string;
    }

    export interface HUF {
        name: string;
        symbol: string;
    }

    export interface GBP {
        name: string;
        symbol: string;
    }

    export interface ISK {
        name: string;
        symbol: string;
    }

    export interface SEK {
        name: string;
        symbol: string;
    }

    export interface BYN {
        name: string;
        symbol: string;
    }

    export interface GIP {
        name: string;
        symbol: string;
    }

    export interface GGP {
        name: string;
        symbol: string;
    }

    export interface CHF {
        name: string;
        symbol: string;
    }

    export interface HRK {
        name: string;
        symbol: string;
    }

    export interface CZK {
        name: string;
        symbol: string;
    }

    export interface IMP {
        name: string;
        symbol: string;
    }

    export interface BAM {
        name: string;
    }

    export interface BGN {
        name: string;
        symbol: string;
    }

    export interface JEP {
        name: string;
        symbol: string;
    }

    export interface DKK {
        name: string;
        symbol: string;
    }

    export interface FOK {
        name: string;
        symbol: string;
    }

    export interface RON {
        name: string;
        symbol: string;
    }

    export interface MDL {
        name: string;
        symbol: string;
    }

    export interface PLN {
        name: string;
        symbol: string;
    }

    export interface RUB {
        name: string;
        symbol: string;
    }

    export interface Currencies {
        EUR: EUR;
        ALL: ALL;
        UAH: UAH;
        RSD: RSD;
        MKD: MKD;
        NOK: NOK;
        HUF: HUF;
        GBP: GBP;
        ISK: ISK;
        SEK: SEK;
        BYN: BYN;
        GIP: GIP;
        GGP: GGP;
        CHF: CHF;
        HRK: HRK;
        CZK: CZK;
        IMP: IMP;
        BAM: BAM;
        BGN: BGN;
        JEP: JEP;
        DKK: DKK;
        FOK: FOK;
        RON: RON;
        MDL: MDL;
        PLN: PLN;
        RUB: RUB;
    }

    export interface Idd {
        root: string;
        suffixes: string[];
    }

    export interface Languages {
        eng: string;
        mlt: string;
        cat: string;
        fin: string;
        swe: string;
        ita: string;
        por: string;
        bar: string;
        deu: string;
        fra: string;
        ltz: string;
        sqi: string;
        ukr: string;
        srp: string;
        mkd: string;
        spa: string;
        gle: string;
        slk: string;
        nor: string;
        hun: string;
        cnr: string;
        isl: string;
        est: string;
        slv: string;
        lav: string;
        nld: string;
        bel: string;
        rus: string;
        nfr: string;
        hrv: string;
        gsw: string;
        roh: string;
        ces: string;
        glv: string;
        bos: string;
        lit: string;
        bul: string;
        ell: string;
        nrf: string;
        dan: string;
        fao: string;
        ron: string;
        nno: string;
        nob: string;
        smi: string;
        pol: string;
        tur: string;
        lat: string;
    }

    export interface Ara {
        official: string;
        common: string;
    }

    export interface Bre {
        official: string;
        common: string;
    }

    export interface Ces2 {
        official: string;
        common: string;
    }

    export interface Cym {
        official: string;
        common: string;
    }

    export interface Deu2 {
        official: string;
        common: string;
    }

    export interface Est2 {
        official: string;
        common: string;
    }

    export interface Fin2 {
        official: string;
        common: string;
    }

    export interface Fra2 {
        official: string;
        common: string;
    }

    export interface Hrv2 {
        official: string;
        common: string;
    }

    export interface Hun2 {
        official: string;
        common: string;
    }

    export interface Ita2 {
        official: string;
        common: string;
    }

    export interface Jpn {
        official: string;
        common: string;
    }

    export interface Kor {
        official: string;
        common: string;
    }

    export interface Nld2 {
        official: string;
        common: string;
    }

    export interface Per {
        official: string;
        common: string;
    }

    export interface Pol2 {
        official: string;
        common: string;
    }

    export interface Por2 {
        official: string;
        common: string;
    }

    export interface Rus2 {
        official: string;
        common: string;
    }

    export interface Slk2 {
        official: string;
        common: string;
    }

    export interface Spa2 {
        official: string;
        common: string;
    }

    export interface Swe2 {
        official: string;
        common: string;
    }

    export interface Urd {
        official: string;
        common: string;
    }

    export interface Zho {
        official: string;
        common: string;
    }

    export interface Translations {
        ara: Ara;
        bre: Bre;
        ces: Ces2;
        cym: Cym;
        deu: Deu2;
        est: Est2;
        fin: Fin2;
        fra: Fra2;
        hrv: Hrv2;
        hun: Hun2;
        ita: Ita2;
        jpn: Jpn;
        kor: Kor;
        nld: Nld2;
        per: Per;
        pol: Pol2;
        por: Por2;
        rus: Rus2;
        slk: Slk2;
        spa: Spa2;
        swe: Swe2;
        urd: Urd;
        zho: Zho;
    }

    export interface Eng2 {
        f: string;
        m: string;
    }

    export interface Fra3 {
        f: string;
        m: string;
    }

    export interface Demonyms {
        eng: Eng2;
        fra: Fra3;
    }

    export interface Maps {
        googleMaps: string;
        openStreetMaps: string;
    }

    export interface Gini {
        2018: number;
        2017?: number;
        2019?: number;
        2016?: number;
        2011?: number;
    }

    export interface Car {
        signs: string[];
        side: string;
    }

    export interface Flags {
        png: string;
        svg: string;
    }

    export interface CoatOfArms {
        png: string;
        svg: string;
    }

    export interface CapitalInfo {
        latlng: number[];
    }

    export interface PostalCode {
        format: string;
        regex: string;
    }

    export interface Country {
        name: Name;
        tld: string[];
        cca2: string;
        ccn3: string;
        cca3: string;
        cioc: string;
        independent: boolean;
        status: string;
        unMember: boolean;
        currencies: Currencies;
        idd: Idd;
        capital: string[];
        altSpellings: string[];
        region: string;
        subregion: string;
        languages: Languages;
        translations: Translations;
        latlng: number[];
        landlocked: boolean;
        area: number;
        demonyms: Demonyms;
        flag: string;
        maps: Maps;
        population: number;
        gini: Gini;
        fifa: string;
        car: Car;
        timezones: string[];
        continents: string[];
        flags: Flags;
        coatOfArms: CoatOfArms;
        startOfWeek: string;
        capitalInfo: CapitalInfo;
        postalCode: PostalCode;
        borders: string[];
    }
































// export interface Country{
//     topLevelDomain: string;
//     region: string;
//     subregion: string;
//     population: number;
//     timezones: string;
//     borders: string;
//     nativeName: string;
//     languages: Record<string,string>;
//     name: string;
//     flags: Record<string,string>;
//     capital: string; 

// }
