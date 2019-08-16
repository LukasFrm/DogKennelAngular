import { Injectable } from "@angular/core";
import { ZyraComponent } from "./our-dogs/zyra/zyra.component";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor() {}

  dogs = {
    zyra: {
      champs: " ",
      pic: "http://www.istikimassuo.puslapiai.lt/images/stories/zyra.jpg",
      name: "Zyra Puikus Medžioklis ♀ RIP",
      regno: "LŠVK BIG0256/08",
      dob: "2008.02.01",
      otherno: "-",
      loc: "Šiauliai",
      colour: "Trispalvė"
    },
    brukne: {
      champs: " ",
      pic: "http://www.istikimassuo.puslapiai.lt/images/stories/brukne.jpg",
      name: "Bruknė Petesha (LT JCH-CH-VCH)",
      regno: "LŠVK JRT 0069/09",
      dob: "2009.05.20",
      otherno: "-",
      loc: "Šiauliai",
      colour: "Trispalvė",
      notes: "-"

    },
    exa: {
      champs: "LT JCH-CH, 4xJN, 11xCAC, 6xN, 2xCACIB, 2xBOB",
      pic:
        "http://www.istikimassuo.puslapiai.lt/images/stories/Zyra/z_mama2.jpg",
      name: "Exa Puikus Medžioklis",
      regno: "LŠVK BIG 0049/04",
      dob: "-",
      otherno: "-",
      loc: "-",
      colour: "Trispalvė"
    },
    bournehouse: {
      champs: "LT-LV JCH-CH, BY JCH, 21xCAC, EST-BALT-RUS CH, 8xJN, 9xN, 2xCACIB, 2xR. CACIB, 4xBOB",
      pic:
        "http://www.istikimassuo.puslapiai.lt/images/stories/Zyra/z_tetis2.jpg",
      name: "bournehouse Masterchef of Dialynne",
      regno: "LŠVK BIG 0089/05",
      dob: "-",
      otherno: "-",
      loc: "-",
      colour: "Trispalvė"
    },
    masterpiece: {
      champs: "CH",
      pic:
        "http://www.istikimassuo.puslapiai.lt/images/stories/Zyra/dialynne%20masterpiece.jpg",
      name: "Dialynne Masterpiece",
      regno: "-",
      dob: "-",
      otherno: "3276CN",
      loc: "-",
      colour: "Trispalvė"
    },
    kiroyale: {
      champs: " ",
      pic:"-",
      name: "bournehouse Kiroyale",
      regno: "-",
      dob: "-",
      otherno: "AA04418204",
      loc: "-",
      colour: "Trispalvė"
    },
    blacky: {
      champs: "LT JCH-CH, 3xLT JN, 4xLT CAC, 2xN, R. CACIB, BOB",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Zyra/lakis.jpg",
      name: "Blacky The First Catulus",
      regno: "LŠVK BIG 0014/03",
      dob: "-",
      otherno: "PKR. VI-7421",
      loc: "-",
      colour: "Trispalvė"
    },
    chilli: {
      champs: "JCH-CH, 3xJN, 4xBOB, 4xLT CAC, 4xN",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Zyra/biga.jpg",
      name: "Chilli Belle Voix",
      regno: "-",
      dob: "-",
      otherno: "AA04418204",
      loc: "-",
      colour: "Trispalvė"
    },
    hallmark: {
      champs: " ",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Zyra/dialynnehallmark.jpg",
      name: "Dialynne Hallmark",
      regno: "-",
      dob: "-",
      otherno: "1072CL",
      loc: "-",
      colour: "Trispalvė"
    },
    rosa: {
      champs: " ",
      pic:"",
      name: "Dialynne Rosa Lea",
      regno: "-",
      dob: "-",
      otherno: "Z0210401Z01",
      loc: "-",
      colour: "Trispalvė"
    },
    storm: {
      champs: "CH",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Zyra/stormaway.jpg",
      name: "Storm Away of Dialynne",
      regno: "-",
      dob: "-",
      otherno: "0550CH",
      loc: "-",
      colour: "Trispalvė"
    },
    kirsch: {
      champs: "CH",
      pic:"",
      name: "Dialynne Kirsch At bournehouse",
      regno: "-",
      dob: "-",
      otherno: "1195CJ",
      loc: "-",
      colour: "Trispalvė"
    },
    shelaft: {
      champs: "NT-D-L-T-BY CH, PL JCH-CH, KL.W",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Zyra/shelaft%20billy%20whizz%20of%20dialynne.jpg",
      name: "Shelaft Billy Whizz of Dialynne",
      regno: "KC Z4139604Z04 ",
      dob: "-",
      otherno: "PKR. VI-5389",
      loc: "-",
      colour: "Trispalvė"
    },
    olka: {
      champs: "INT-PL CH, MI.CH",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Zyra/olka.png",
      name: "Snugglewood's Olka",
      regno: "NHSB 2239124 KT.D-1",
      dob: "-",
      otherno: "PKR. VI-5220",
      loc: "-",
      colour: "Trispalvė"
    },
    bayard: {
      champs: "INT-PL CH, MI.CH",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Zyra/byard%20harvest%20moon.jpg",
      name: "Bayard Harvest Moon",
      regno: "-",
      dob: "-",
      otherno: "PKR. VI-4916",
      loc: "-",
      colour: "Trispalvė"
    },
    banda: {
      champs: "PL MICH, PL CH",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Zyra/banda1.jpg",
      name: "Banda Belle Voix",
      regno: "-",
      dob: "-",
      otherno: "PKR. VI-3222",
      loc: "-",
      colour: "Trispalvė"
    },
    pablo: {
      champs: "LT-LV-BY JCH, 2xBOB",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Brukne/pablo3.jpg",
      name: "Pablo Z Herbu Sapaly",
      regno: "LŠVK JRT 0020/08",
      dob: "-",
      otherno: "PKR III-59968",
      loc: "-",
      colour: "-",
      notes: "FT I-kr. pėds. (Blood trace)"
    },
    paka: {
      champs: " ",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Brukne/chile.jpg",
      name: "Uri Paka Wilkolaka",
      regno: "LŠVK JRT 017A/08",
      dob: "-",
      otherno: "KW III-428/JRT",
      loc: "-",
      colour: "Trispalvė",
      notes: "-"
    },
    king: {
      champs: "PL CH",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Brukne/king%20bassies%20sharley%20chaplin.png",
      name: "King Bassie's Sharley Chaplin",
      regno: "-",
      dob: "-",
      otherno: "KW III-234/JRT",
      loc: "-",
      colour: "-",
      notes: "-"
    },
    uri: {
      champs: "PL CH",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Brukne/uri%20paka%20wilkoaka.png",
      name: "Uri Paka Wilkolaka",
      regno: "-",
      dob: "-",
      otherno: "PKR III-55355",
      loc: "-",
      colour: "-",
      notes: "-"
    },
    pride: {
      champs: "SK-PL-CZ CH",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Brukne/suzans%20pride%20darjeeling.jpg",
      name: "Suzan's Pride Darjeeling",
      regno: "ALSH 0062447",
      dob: "-",
      otherno: "PKR. VI-7421",
      loc: "-",
      colour: "-",
      notes: "CLP/JRT/ZREG/201/06"
    },
    viki: {
      champs: " ",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Brukne/viki.jpg",
      name: "Viki Paka Wilkolaka",
      regno: "-",
      dob: "-",
      otherno: "PKR III-57017",
      loc: "-",
      colour: "-",
      notes: "-"
    },
    karell: {
      champs: "JW'03",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Brukne/karell%20trouble%20shooter.png",
      name: "Karrell Trouble Shooter",
      regno: "-",
      dob: "-",
      otherno: "ANKC 4100088947",
      loc: "-",
      colour: "-",
      notes: "-"
    },
    kelly: {
      champs: "JW'00",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Brukne/king%20bassies%20golden%20girl%20kelly.png",
      name: "King Bassie's Golden Girl Kelly",
      regno: "-",
      dob: "-",
      otherno: "VR 17686",
      loc: "-",
      colour: "-",
      notes: "-"
    },
    lantaka: {
      champs: "INT-SK CH, SK-CZ JCH, 4xCACIB, 5xBOB",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Brukne/poleposition.jpg",
      name: "Lantaka Poleposition",
      regno: "-",
      dob: "-",
      otherno: "-",
      loc: "-",
      colour: "-",
      notes: "LOI 04/34831, ČLP/JRT/31/04"
    },
    pola: {
      champs: "PL CH, 3xBOB",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Brukne/pola%20z%20arki%20arka.jpg",
      name: "Pola Z Arki Arka",
      regno: "-",
      dob: "-",
      otherno: "KW III-130/JRT",
      loc: "-",
      colour: "Trispalvė",
      notes: "-"
    },
    adidi: {
      champs: " ",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Brukne/adidi1.jpg",
      name: "Adidi",
      regno: "-",
      dob: "-",
      otherno: "RISH C/031/A",
      loc: "-",
      colour: "-",
      notes: "-"
    },
    adina: {
      champs: " ",
      pic:"-",
      name: "Suzan's Pride Adina",
      regno: "-",
      dob: "-",
      otherno: "ALSH 0060260",
      loc: "-",
      colour: "-",
      notes: "-"
    },
    roma: {
      champs: "PL JCH, PL CH, CACIB",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Brukne/roma.jpg",
      name: "Roma Z Arki Arka",
      regno: "-",
      dob: "-",
      otherno: "KW III-170/JRT",
      loc: "-",
      colour: "Trispalvė",
      notes: "-"
    },
      istagram: {
      champs: "LT JCH, LT CH,LV CH,EST CH,BALT CH,RU CH",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/etna.jpg",
      name: "Istagram Di Sutri (Etna)",
      regno: "LŠVK JRT 0321/13",
      dob: "2013.07.12",
      otherno: "-",
      loc: "Šiauliai",
      colour: "-",
      notes: "-"
    },

    mysterio: {
      champs: "-",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Etna/lantakamysterio_2.jpg",
      name: "Lantaka Mysterio",
      regno: "-",
      dob: "-",
      otherno: "ROI 06/35430",
      loc: "-",
      colour: "-",
      notes: "-"
    },
    prima: {
      champs: "-",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Etna/Primaballerina_1.jpg",
      name: "Prima Ballerina Di Sutri",
      regno: "-",
      dob: "-",
      otherno: "ROI 12/131592",
      loc: "-",
      colour: "-",
      notes: "-"
    },
    pete: {
      champs: "AUS-IT CH",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Etna/MyrmidonJackPete.jpg",
      name: "Myrmidon Jack Pete",
      regno: "-",
      dob: "-",
      otherno: "ROI 02/67443",
      loc: "-",
      colour: "-",
      notes: "-"
    },
    dekka: {
      champs: "-",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Etna/MyrmidonJackDekka.jpg",
      name: "Myrmidon Jack Dekka",
      regno: "-",
      dob: "-",
      otherno: "ROI 02/125651",
      loc: "-",
      colour: "-",
      notes: "-"
    },
    lyckans: {
      champs: "-",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Etna/silverlyck.jpg",
      name: "Silverlyckans Wishing And Hoping",
      regno: "-",
      dob: "-",
      otherno: "ROI 09/83593",
      loc: "-",
      colour: "-",
      notes: "-"
    },
    fresca: {
      champs: "-",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Etna/VerniceFresca.jpg",
      name: "Vernice Fresca Di Sutri",
      regno: "-",
      dob: "-",
      otherno: "ROI 09/42076",
      loc: "-",
      colour: "-",
      notes: "-"
    },
    kando: {
      champs: "-",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Etna/PretoriumJustKando.jpg",
      name: "Pretorium Just Kando",
      regno: "-",
      dob: "-",
      otherno: "2100001567",
      loc: "-",
      colour: "-",
      notes: "-"
    },
    peri: {
      champs: "-",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Etna/MyrmidonJackPeri.jpg",
      name: "Myrmidon Jack Peri",
      regno: "-",
      dob: "-",
      otherno: "2100034196",
      loc: "-",
      colour: "-",
      notes: "-"
    },
    danzey: {
      champs: "MULTI CH, INT CH",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Etna/MyrmidonJackDanzey.jpg",
      name: "Myrmidon Jack Danzey",
      regno: "-",
      dob: "-",
      otherno: "2100045638",
      loc: "-",
      colour: "-",
      notes: "-"
    },
    myrmidon: {
      champs: "-",
      pic:"",
      name: "Myrmidon Jack Rebecca",
      regno: "-",
      dob: "-",
      otherno: "210001874",
      loc: "-",
      colour: "-",
      notes: "-"
    },
    ultra: {
      champs: "MULTI CH",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Etna/Ultrapride_grass.jpg",
      name: "Ultra Pride Of Mayoland",
      regno: "-",
      dob: "-",
      otherno: "ROI 04/31471",
      loc: "-",
      colour: "-",
      notes: "-"
    },
    magic: {
      champs: "INT. GR. CH",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Etna/INT%20GR%20CH%20Bushwack's%20Myrmidons%20Magic.jpg",
      name: "Bushwack's Myrmidon Magic",
      regno: "-",
      dob: "-",
      otherno: "S42436/2002",
      loc: "-",
      colour: "-",
      notes: "-"
    },

    luckys: {
      champs: "AUS CH",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Etna/LittlNapoleonluckysboy.jpg",
      name: "Litlenapoleon Luckys Boy",
      regno: "-",
      dob: "-",
      otherno: "ROI 08/57145",
      loc: "-",
      colour: "-",
      notes: "-"
    },
    bugamme: {
      champs: "AUS CH",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Etna/AUSTR%20CH%20Braperemi%20Buggame.jpg",
      name: "Braperemi Buggame",
      regno: "-",
      dob: "-",
      otherno: "ROI 08/47896",
      loc: "-",
      colour: "-",
      notes: "-"
    },
    garas: {
      champs: "LT JCH",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Garas/garas1.jpg",
      name: "Garas Ištikimas šuo",
      regno: "LŠVK JRT 0366/14",
      dob: "2014.02.10",
      otherno: "-",
      loc: "Šiauliai",
      colour: "Balta su ruda",
      notes: "-"
    },
    mitsu: {
      champs: "LT CH, BOB, R.CACIB",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Garas/mitsu.JPG",
      name: "Merriment Mitsu of Jack's Paradise",
      regno: "LŠVK JRT 0059/09",
      dob: "-",
      otherno: "NHSB BULG-2-2710179",
      loc: "-",
      colour: "-",
      notes: "-"
    },
    arctic: {
      champs: "-",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Garas/Jackxellent%20Arctic%20Franklin.jpg",
      name: "Jackxellent Arctic Franklin",
      regno: "-",
      dob: "-",
      otherno: "NHSB BIJL G-1-2548138",
      loc: "-",
      colour: "-",
      notes: "-"
    },    sound: {
      champs: "-",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Garas/sound%20soraya%20of%20jacks%20paradise.jpg",
      name: "Sound Soraya of Jack's Paradise",
      regno: "-",
      dob: "-",
      otherno: "NHSB BIJL G-1-2623011",
      loc: "-",
      colour: "-",
      notes: "-"
    },    wilkolaka: {
      champs: "-",
      pic:"-",
      name: "Chilli Paka Wilkolaka",
      regno: "LŠVK JRT 017A/08",
      dob: "-",
      otherno: "KW III-428/JRT",
      loc: "-",
      colour: "Trispalvė",
      notes: "-"
    },    huck: {
      champs: "S & EST CH-05 ESTW",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Garas/mywin%20little%20huck.jpg",
      name: "Mywin Little Huck",
      regno: "-",
      dob: "-",
      otherno: "S55860/2002",
      loc: "-",
      colour: "-",
      notes: "-"
    },    dirt: {
      champs: "FIN & SE & RU CH",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Garas/dirtdiggers%20dragon%20eyes.jpg",
      name: "Dirtdigger's Dragon Eyes",
      regno: "-",
      dob: "-",
      otherno: "ER 16776/03",
      loc: "-",
      colour: "-",
      notes: "-"
    },    lewis: {
      champs: "VDH CH. Lux. DTS. KAMP",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Garas/liberated%20lewis%20of%20jacks%20paradise.jpg",
      name: "Liberated Lewis of Jack's Paradise",
      regno: "-",
      dob: "-",
      otherno: "NHSB BIJL G-0-2438424",
      loc: "-",
      colour: "-",
      notes: "-"
    },    sunny: {
      champs: "-",
      pic:"-",
      name: "Sunny Shakira of Jack's Paradise",
      regno: "-",
      dob: "-",
      otherno: "NHSB BIJL G-0-2412356",
      loc: "-",
      colour: "-",
      notes: "-"
    },
       juka: {
      champs: "-",
      pic:"http://istikimassuo.puslapiai.lt/images/stories/juka.jpg",
      name: "Juka Ištikimas šuo",
      regno: "LŠVK JRT 0519/15",
      dob: "2015.04.18",
      otherno: "-",
      loc: "Šiauliai",
      colour: "Trispalvė",
      notes: "-"
    },
    iagos: {
      champs: "-",
      pic:"http://istikimassuo.puslapiai.lt/images/stories/Elari/iagos%20fartvind.jpg",
      name: "IAGOS FARTVIND",
      regno: "-",
      dob: "-",
      otherno: "S29398/2007",
      loc: "-",
      colour: "-",
      notes: "HD-B"
    },     

    redsprings: {
      champs: "LT JCH, LT CH",
      pic:"http://istikimassuo.puslapiai.lt/images/elari%20-%20puslapiui/2.3.jpg",
      name: "Redsprings Eleri Hud",
      regno: "LŠVK WSS 0002/15",
      dob: "2015.06.10",
      otherno: "-",
      loc: "Šiauliai",
      colour: "-",
      notes: "-"
    },   
     
        arial: {
      champs: "LV JCH, CAC, CACIB",
      pic:"http://istikimassuo.puslapiai.lt/images/stories/Elari/arial%20helwyr.jpg",
      name: "ARIAL HELWYR",
      regno: "-",
      dob: "-",
      otherno: "LV -28026/12",
      loc: "-",
      colour: "-",
      notes: "HD-A, ED-0, III p. p., III as. p."
    },   
     
        dutch: {
      champs: "-",
      pic:"http://istikimassuo.puslapiai.lt/images/stories/Elari/gulsporrens%20hunting%20dutchman.jpg",
      name: "GULSPORRENS HUNTING DUTCHMAN",
      regno: "-",
      dob: "-",
      otherno: "S24683/2003",
      loc: "-",
      colour: "-",
      notes: "-"
    },   
     
        money: {
      champs: "-",
      pic:"http://istikimassuo.puslapiai.lt/images/stories/Elari/iagos_all_bout_the_money.jpg",
      name: "IAGOS ALL 'BOUT THE MONEY",
      regno: "-",
      dob: "-",
      otherno: "S58066/2001",
      loc: "-",
      colour: "-",
      notes: "-"
    },   
     
        taffy: {
      champs: "PLJ&PL&LV CH",
      pic:"http://istikimassuo.puslapiai.lt/images/stories/Elari/taffy%20conor%20sedda.jpg",
      name: "TAFFY CONOR SEDDA",
      regno: "-",
      dob: "-",
      otherno: "PKR. VIII-23050",
      loc: "-",
      colour: "-",
      notes: "HD-A, II"
    },   
     
        brita: {
      champs: "LV&LT CH",
      pic:"http://istikimassuo.puslapiai.lt/images/stories/Elari/brita%20od%20nezarecke%20tune.jpg",
      name: "BRITA OD NEŽARECKE TUNE",
      regno: "-",
      dob: "-",
      otherno: "ČLP/WSS/4326 / LV-VSS-39/10",
      loc: "-",
      colour: "-",
      notes: "HD-B/C, ED-0"
    },   
     
        ufo: {
      champs: "-",
      pic:"http://istikimassuo.puslapiai.lt/images/stories/Elari/ufo%20our%20loyal%20welsh.jpg",
      name: "UFO OUR LOYAL WELSH",
      regno: "-",
      dob: "-",
      otherno: "NHSB2301985",
      loc: "-",
      colour: "-",
      notes: "-"
    },   
     
        sweet: {
      champs: "SE&NO CH",
      pic:"",
      name: "HAMMALGARDENS LITTLE SWEET",
      regno: "-",
      dob: "-",
      otherno: "S19932/2000",
      loc: "-",
      colour: "-",
      notes: "-"
    },   
     
        ham: {
          champs: "SE&NO CH",
          pic:"",
      name: "HAMMALGARDENS DON'T FORGET ME",
      regno: "-",
      dob: "-",
      otherno: "S40447/2000",
      loc: "-",
      colour: "-",
      notes: "-"
    },   
     
        did: {
      champs: "SE CH, SEW'00",
      pic:"http://istikimassuo.puslapiai.lt/images/stories/Elari/hammalgardens%20did%20i%20tell%20you.jpg",
      name: "HAMMALGARDENS DID I TELL YOU",
      regno: "-",
      dob: "-",
      otherno: "S44710/99",
      loc: "-",
      colour: "-",
      notes: "-"
    },   
     
        amigos: {
      champs: "LVJ&LV&LT CH",
      pic:"http://istikimassuo.puslapiai.lt/images/stories/Elari/amigos%20cilver.jpg",
      name: "AMIGOS CILVER",
      regno: "-",
      dob: "-",
      otherno: "LV-6194/02",
      loc: "-",
      colour: "-",
      notes: "-"
    },   
     
        bonita: {
      champs: "PLJ&PL CH",
      pic:"http://istikimassuo.puslapiai.lt/images/stories/Elari/bonita%20sedda.jpg",
      name: "BONITA SEDDA",
      regno: "-",
      dob: "-",
      otherno: "PKR. VIII-17032",
      loc: "-",
      colour: "-",
      notes: "-"
    },   
     
        duck: {
      champs: "CIB&CZ&PL&AT CH",
      pic:"http://istikimassuo.puslapiai.lt/images/stories/Elari/eastfarms%20dynamite%20duck.jpg",
      name: "EASTFARM'S DYNAMITE DUCK",
      regno: "-",
      dob: "-",
      otherno: "ČLP/WSS/3789/03",
      loc: "-",
      colour: "-",
      notes: "-"
    },   
     
        jifex: {
      champs: "CZ CH, R. CACIB",
      pic:"http://istikimassuo.puslapiai.lt/images/stories/Elari/fatty%20jifex.jpg",
      name: "FATTY JIFEX",
      regno: "-",
      dob: "-",
      otherno: "ČLP/WSS/3929/08",
      loc: "-",
      colour: "-",
      notes: "-"
    }, 
    kruopa: {
      champs: "-",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Kruopa/kruopa.JPG",
      name: "Kruopa Ištikimas šuo",
      regno: "LŠVK BIG1029/16",
      dob: "2016.04.17",
      otherno: "",
      loc: "Šiauliai",
      colour: "-",
      notes: "-"
    },    

    dodzis: {
      champs: "LT-JCH-CH",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/dodzis-puikus-medzioklis.jpg",
      name: "Dodžis Puikus medžioklis",
      regno: "LŠVK BIG 0159/07",
      dob: "-",
      otherno: "",
      loc: "-",
      colour: "Trispalvė",
      notes: "-"
    }, 

    quel: {
      champs: "RU-CH, EST-CH, LV-CH, LT-CH",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Kruopa/duszek-tel-quel.jpg",
      name: "Duszek Tel Quel",
      regno: "-",
      dob: "-",
      otherno: "PKR. VI-7257",
      loc: "-",
      colour: "Trispalvė",
      notes: "D-II"
    },  

           aira: {
      champs: "LT JCH-CH",
      pic:"",
      name: "Aira Puikus medžioklis",
      regno: "LŠVK BIG 0006/01",
      dob: "-",
      otherno: "",
      loc: "-",
      colour: "Trispalvė",
      notes: "-"
    },   

    moon: {
      champs: "",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Kruopa/Moon-Jumper's-Joe-Cocker.jpg",
      name: "Moon Jumper's Joe Cocker",
      regno: "-",
      dob: "-",
      otherno: "DKK 12722/99 ",
      loc: "-",
      colour: "Trispalvė",
      notes: "PKR.VI-5926"
    }, 

    old: {
      champs: "PL-CH",
      pic:"http://www.istikimassuo.puslapiai.lt/images/stories/Kruopa/Old-Ballantaine's-Tel-Quel.jpg",
      name: "Old Ballantaine's Tel Quel",
      regno: "-",
      dob: "-",
      otherno: "PKR.VI-4402",
      loc: "-",
      colour: "Trispalvė",
      notes: "-"
    }, 
     
    //     king: {
    //   champs: "-",
    //   pic:"",
    //   name: "",
    //   regno: "-",
    //   dob: "-",
    //   otherno: "",
    //   loc: "-",
    //   colour: "-",
    //   notes: "-"
    // },   
     
      
     
    
  };
}
