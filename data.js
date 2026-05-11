// ============= DATA EXPORT =============
const dictEurope = {
  "Russia": {
    "name": "Russia",
    "cap": "Mosca",
    "code": "ru",
    "pop": "144 M",
    "area": "17.1M km²"
  },
  "Norway": {
    "name": "Norvegia",
    "cap": "Oslo",
    "code": "no",
    "pop": "5.4 M",
    "area": "385k km²"
  },
  "France": {
    "name": "Francia",
    "cap": "Parigi",
    "code": "fr",
    "pop": "67 M",
    "area": "551k km²"
  },
  "Sweden": {
    "name": "Svezia",
    "cap": "Stoccolma",
    "code": "se",
    "pop": "10.4 M",
    "area": "450k km²"
  },
  "Belarus": {
    "name": "Bielorussia",
    "cap": "Minsk",
    "code": "by",
    "pop": "9.3 M",
    "area": "207k km²"
  },
  "Ukraine": {
    "name": "Ucraina",
    "cap": "Kiev",
    "code": "ua",
    "pop": "41 M",
    "area": "603k km²"
  },
  "Poland": {
    "name": "Polonia",
    "cap": "Varsavia",
    "code": "pl",
    "pop": "38 M",
    "area": "312k km²"
  },
  "Austria": {
    "name": "Austria",
    "cap": "Vienna",
    "code": "at",
    "pop": "8.9 M",
    "area": "83k km²"
  },
  "Hungary": {
    "name": "Ungheria",
    "cap": "Budapest",
    "code": "hu",
    "pop": "9.7 M",
    "area": "93k km²"
  },
  "Moldova": {
    "name": "Moldavia",
    "cap": "Chișinău",
    "code": "md",
    "pop": "2.6 M",
    "area": "33k km²"
  },
  "Romania": {
    "name": "Romania",
    "cap": "Bucarest",
    "code": "ro",
    "pop": "19 M",
    "area": "238k km²"
  },
  "Lithuania": {
    "name": "Lituania",
    "cap": "Vilnius",
    "code": "lt",
    "pop": "2.8 M",
    "area": "65k km²"
  },
  "Latvia": {
    "name": "Lettonia",
    "cap": "Riga",
    "code": "lv",
    "pop": "1.9 M",
    "area": "64k km²"
  },
  "Estonia": {
    "name": "Estonia",
    "cap": "Tallinn",
    "code": "ee",
    "pop": "1.3 M",
    "area": "45k km²"
  },
  "Germany": {
    "name": "Germania",
    "cap": "Berlino",
    "code": "de",
    "pop": "83 M",
    "area": "357k km²"
  },
  "Bulgaria": {
    "name": "Bulgaria",
    "cap": "Sofia",
    "code": "bg",
    "pop": "6.9 M",
    "area": "110k km²"
  },
  "Greece": {
    "name": "Grecia",
    "cap": "Atene",
    "code": "gr",
    "pop": "10.7 M",
    "area": "131k km²"
  },
  "Albania": {
    "name": "Albania",
    "cap": "Tirana",
    "code": "al",
    "pop": "2.8 M",
    "area": "28k km²"
  },
  "Croatia": {
    "name": "Croazia",
    "cap": "Zagabria",
    "code": "hr",
    "pop": "4 M",
    "area": "56k km²"
  },
  "Switzerland": {
    "name": "Svizzera",
    "cap": "Berna",
    "code": "ch",
    "pop": "8.6 M",
    "area": "41k km²"
  },
  "Luxembourg": {
    "name": "Lussemburgo",
    "cap": "Lussemburgo",
    "code": "lu",
    "pop": "630k",
    "area": "2.5k km²"
  },
  "Belgium": {
    "name": "Belgio",
    "cap": "Bruxelles",
    "code": "be",
    "pop": "11.5 M",
    "area": "30k km²"
  },
  "Netherlands": {
    "name": "Paesi Bassi",
    "cap": "Amsterdam",
    "code": "nl",
    "pop": "17.4 M",
    "area": "41k km²"
  },
  "Portugal": {
    "name": "Portogallo",
    "cap": "Lisbona",
    "code": "pt",
    "pop": "10.3 M",
    "area": "92k km²"
  },
  "Spain": {
    "name": "Spagna",
    "cap": "Madrid",
    "code": "es",
    "pop": "47 M",
    "area": "505k km²"
  },
  "Ireland": {
    "name": "Irlanda",
    "cap": "Dublino",
    "code": "ie",
    "pop": "5 M",
    "area": "70k km²"
  },
  "Italy": {
    "name": "Italia",
    "cap": "Roma",
    "code": "it",
    "pop": "59 M",
    "area": "301k km²"
  },
  "Denmark": {
    "name": "Danimarca",
    "cap": "Copenaghen",
    "code": "dk",
    "pop": "5.8 M",
    "area": "43k km²"
  },
  "United Kingdom": {
    "name": "Regno Unito",
    "cap": "Londra",
    "code": "gb",
    "pop": "67 M",
    "area": "242k km²"
  },
  "Iceland": {
    "name": "Islanda",
    "cap": "Reykjavik",
    "code": "is",
    "pop": "366k",
    "area": "103k km²"
  },
  "Slovenia": {
    "name": "Slovenia",
    "cap": "Lubiana",
    "code": "si",
    "pop": "2.1 M",
    "area": "20k km²"
  },
  "Finland": {
    "name": "Finlandia",
    "cap": "Helsinki",
    "code": "fi",
    "pop": "5.5 M",
    "area": "338k km²"
  },
  "Slovakia": {
    "name": "Slovacchia",
    "cap": "Bratislava",
    "code": "sk",
    "pop": "5.4 M",
    "area": "49k km²"
  },
  "Czechia": {
    "name": "Repubblica Ceca",
    "cap": "Praga",
    "code": "cz",
    "pop": "10.7 M",
    "area": "78k km²"
  },
  "Bosnia and Herz.": {
    "name": "Bosnia Erzegovina",
    "cap": "Sarajevo",
    "code": "ba",
    "pop": "3.2 M",
    "area": "51k km²"
  },
  "Macedonia": {
    "name": "Macedonia del Nord",
    "cap": "Skopje",
    "code": "mk",
    "pop": "2 M",
    "area": "25k km²"
  },
  "Serbia": {
    "name": "Serbia",
    "cap": "Belgrado",
    "code": "rs",
    "pop": "6.9 M",
    "area": "88k km²"
  },
  "Montenegro": {
    "name": "Montenegro",
    "cap": "Podgorica",
    "code": "me",
    "pop": "620k",
    "area": "13k km²"
  },
  "Kosovo": {
    "name": "Kosovo",
    "cap": "Pristina",
    "code": "xk",
    "pop": "1.8 M",
    "area": "10k km²"
  }
};

const dictAsia = {
  "Turkey": {
    "name": "Turchia",
    "cap": "Ankara",
    "code": "tr",
    "pop": "84 M",
    "area": "783k km²"
  },
  "Kazakhstan": {
    "name": "Kazakistan",
    "cap": "Astana",
    "code": "kz",
    "pop": "19 M",
    "area": "2.72M km²"
  },
  "Uzbekistan": {
    "name": "Uzbekistan",
    "cap": "Tashkent",
    "code": "uz",
    "pop": "34 M",
    "area": "447k km²"
  },
  "Timor-Leste": {
    "name": "Timor Est",
    "cap": "Dili",
    "code": "tl",
    "pop": "1.3 M",
    "area": "15k km²"
  },
  "Israel": {
    "name": "Israele",
    "cap": "Gerusalemme",
    "code": "il",
    "pop": "9.2 M",
    "area": "22k km²"
  },
  "Lebanon": {
    "name": "Libano",
    "cap": "Beirut",
    "code": "lb",
    "pop": "6.8 M",
    "area": "10k km²"
  },
  "Palestine": {
    "name": "Palestina",
    "cap": "Gerusalemme Est/Ramallah",
    "code": "ps",
    "pop": "5 M",
    "area": "6k km²"
  },
  "Jordan": {
    "name": "Giordania",
    "cap": "Amman",
    "code": "jo",
    "pop": "10 M",
    "area": "89k km²"
  },
  "United Arab Emirates": {
    "name": "Emirati Arabi Uniti",
    "cap": "Abu Dhabi",
    "code": "ae",
    "pop": "9.9 M",
    "area": "83k km²"
  },
  "Qatar": {
    "name": "Qatar",
    "cap": "Doha",
    "code": "qa",
    "pop": "2.8 M",
    "area": "11k km²"
  },
  "Kuwait": {
    "name": "Kuwait",
    "cap": "Madinat al-Kuwait",
    "code": "kw",
    "pop": "4.2 M",
    "area": "17k km²"
  },
  "Iraq": {
    "name": "Iraq",
    "cap": "Baghdad",
    "code": "iq",
    "pop": "40 M",
    "area": "438k km²"
  },
  "Oman": {
    "name": "Oman",
    "cap": "Mascate",
    "code": "om",
    "pop": "5.1 M",
    "area": "309k km²"
  },
  "Cambodia": {
    "name": "Cambogia",
    "cap": "Phnom Penh",
    "code": "kh",
    "pop": "16 M",
    "area": "181k km²"
  },
  "Thailand": {
    "name": "Thailandia",
    "cap": "Bangkok",
    "code": "th",
    "pop": "69 M",
    "area": "513k km²"
  },
  "Laos": {
    "name": "Laos",
    "cap": "Vientiane",
    "code": "la",
    "pop": "7.2 M",
    "area": "236k km²"
  },
  "Myanmar": {
    "name": "Myanmar",
    "cap": "Naypyidaw",
    "code": "mm",
    "pop": "54 M",
    "area": "676k km²"
  },
  "Vietnam": {
    "name": "Vietnam",
    "cap": "Hanoi",
    "code": "vn",
    "pop": "97 M",
    "area": "331k km²"
  },
  "North Korea": {
    "name": "Corea del Nord",
    "cap": "Pyongyang",
    "code": "kp",
    "pop": "25 M",
    "area": "120k km²"
  },
  "South Korea": {
    "name": "Corea del Sud",
    "cap": "Seul",
    "code": "kr",
    "pop": "51 M",
    "area": "100k km²"
  },
  "Mongolia": {
    "name": "Mongolia",
    "cap": "Ulan Bator",
    "code": "mn",
    "pop": "3.3 M",
    "area": "1.56M km²"
  },
  "India": {
    "name": "India",
    "cap": "Nuova Delhi",
    "code": "in",
    "pop": "1.38B",
    "area": "3.28M km²"
  },
  "Bangladesh": {
    "name": "Bangladesh",
    "cap": "Dacca",
    "code": "bd",
    "pop": "164 M",
    "area": "148k km²"
  },
  "Bhutan": {
    "name": "Bhutan",
    "cap": "Thimphu",
    "code": "bt",
    "pop": "770k",
    "area": "38k km²"
  },
  "Nepal": {
    "name": "Nepal",
    "cap": "Kathmandu",
    "code": "np",
    "pop": "29 M",
    "area": "147k km²"
  },
  "Pakistan": {
    "name": "Pakistan",
    "cap": "Islamabad",
    "code": "pk",
    "pop": "220 M",
    "area": "881k km²"
  },
  "Afghanistan": {
    "name": "Afghanistan",
    "cap": "Kabul",
    "code": "af",
    "pop": "38 M",
    "area": "652k km²"
  },
  "Tajikistan": {
    "name": "Tagikistan",
    "cap": "Dushanbe",
    "code": "tj",
    "pop": "9.5 M",
    "area": "143k km²"
  },
  "Kyrgyzstan": {
    "name": "Kirghizistan",
    "cap": "Bishkek",
    "code": "kg",
    "pop": "6.5 M",
    "area": "199k km²"
  },
  "Turkmenistan": {
    "name": "Turkmenistan",
    "cap": "Aşgabat",
    "code": "tm",
    "pop": "6 M",
    "area": "491k km²"
  },
  "Iran": {
    "name": "Iran",
    "cap": "Teheran",
    "code": "ir",
    "pop": "83 M",
    "area": "1.64M km²"
  },
  "Syria": {
    "name": "Siria",
    "cap": "Damasco",
    "code": "sy",
    "pop": "17 M",
    "area": "185k km²"
  },
  "Armenia": {
    "name": "Armenia",
    "cap": "Erevan",
    "code": "am",
    "pop": "2.9 M",
    "area": "29k km²"
  },
  "Azerbaijan": {
    "name": "Azerbaigian",
    "cap": "Baku",
    "code": "az",
    "pop": "10 M",
    "area": "86k km²"
  },
  "Georgia": {
    "name": "Georgia",
    "cap": "Tbilisi",
    "code": "ge",
    "pop": "3.7 M",
    "area": "69k km²"
  },
  "Philippines": {
    "name": "Filippine",
    "cap": "Manila",
    "code": "ph",
    "pop": "109 M",
    "area": "300k km²"
  },
  "Malaysia": {
    "name": "Malesia",
    "cap": "Kuala Lumpur",
    "code": "my",
    "pop": "32 M",
    "area": "330k km²"
  },
  "Brunei": {
    "name": "Brunei",
    "cap": "Bandar Seri Begawan",
    "code": "bn",
    "pop": "430k",
    "area": "5.7k km²"
  },
  "Japan": {
    "name": "Giappone",
    "cap": "Tokyo",
    "code": "jp",
    "pop": "125 M",
    "area": "377k km²"
  },
  "Yemen": {
    "name": "Yemen",
    "cap": "Sana'a",
    "code": "ye",
    "pop": "29 M",
    "area": "527k km²"
  },
  "Saudi Arabia": {
    "name": "Arabia Saudita",
    "cap": "Riad",
    "code": "sa",
    "pop": "34 M",
    "area": "2.14M km²"
  },
  "N. Cyprus": {
    "name": "Cipro del Nord",
    "cap": "Nicosia Nord",
    "code": "cy",
    "pop": "326k",
    "area": "3k km²"
  },
  "Cyprus": {
    "name": "Cipro",
    "cap": "Nicosia",
    "code": "cy",
    "pop": "1.2 M",
    "area": "9k km²"
  },
  "China": {
    "name": "Cina",
    "cap": "Pechino",
    "code": "cn",
    "pop": "1.4B",
    "area": "9.59M km²"
  },
  "Taiwan": {
    "name": "Taiwan",
    "cap": "Taipei",
    "code": "tw",
    "pop": "23 M",
    "area": "36k km²"
  },
  "Sri Lanka": {
    "name": "Sri Lanka",
    "cap": "Colombo",
    "code": "lk",
    "pop": "21 M",
    "area": "65k km²"
  },
  "Indonesia": {
    "name": "Indonesia",
    "cap": "Giacarta",
    "code": "id",
    "pop": "273 M",
    "area": "1.9M km²"
  }
};

const dictAfrica = {
  "Tanzania": {
    "name": "Tanzania",
    "cap": "Dodoma",
    "code": "tz",
    "pop": "59 M",
    "area": "947k km²"
  },
  "W. Sahara": {
    "name": "Sahara Occidentale",
    "cap": "El Aaiún",
    "code": "eh",
    "pop": "600k",
    "area": "266k km²"
  },
  "Dem. Rep. Congo": {
    "name": "Repubblica Democratica del Congo",
    "cap": "Kinshasa",
    "code": "cd",
    "pop": "89 M",
    "area": "2.34M km²"
  },
  "Somalia": {
    "name": "Somalia",
    "cap": "Mogadiscio",
    "code": "so",
    "pop": "15 M",
    "area": "637k km²"
  },
  "Kenya": {
    "name": "Kenya",
    "cap": "Nairobi",
    "code": "ke",
    "pop": "53 M",
    "area": "580k km²"
  },
  "Sudan": {
    "name": "Sudan",
    "cap": "Khartum",
    "code": "sd",
    "pop": "43 M",
    "area": "1.88M km²"
  },
  "Chad": {
    "name": "Ciad",
    "cap": "N'Djamena",
    "code": "td",
    "pop": "16 M",
    "area": "1.28M km²"
  },
  "South Africa": {
    "name": "Sudafrica",
    "cap": "Pretoria",
    "code": "za",
    "pop": "59 M",
    "area": "1.22M km²"
  },
  "Lesotho": {
    "name": "Lesotho",
    "cap": "Maseru",
    "code": "ls",
    "pop": "2.1 M",
    "area": "30k km²"
  },
  "Zimbabwe": {
    "name": "Zimbabwe",
    "cap": "Harare",
    "code": "zw",
    "pop": "14 M",
    "area": "390k km²"
  },
  "Botswana": {
    "name": "Botswana",
    "cap": "Gaborone",
    "code": "bw",
    "pop": "2.3 M",
    "area": "581k km²"
  },
  "Namibia": {
    "name": "Namibia",
    "cap": "Windhoek",
    "code": "na",
    "pop": "2.5 M",
    "area": "825k km²"
  },
  "Senegal": {
    "name": "Senegal",
    "cap": "Dakar",
    "code": "sn",
    "pop": "16 M",
    "area": "196k km²"
  },
  "Mali": {
    "name": "Mali",
    "cap": "Bamako",
    "code": "ml",
    "pop": "20 M",
    "area": "1.24M km²"
  },
  "Mauritania": {
    "name": "Mauritania",
    "cap": "Nouakchott",
    "code": "mr",
    "pop": "4.6 M",
    "area": "1.03M km²"
  },
  "Benin": {
    "name": "Benin",
    "cap": "Porto-Novo",
    "code": "bj",
    "pop": "12 M",
    "area": "114k km²"
  },
  "Niger": {
    "name": "Niger",
    "cap": "Niamey",
    "code": "ne",
    "pop": "24 M",
    "area": "1.26M km²"
  },
  "Nigeria": {
    "name": "Nigeria",
    "cap": "Abuja",
    "code": "ng",
    "pop": "206 M",
    "area": "923k km²"
  },
  "Cameroon": {
    "name": "Camerun",
    "cap": "Yaoundé",
    "code": "cm",
    "pop": "26 M",
    "area": "475k km²"
  },
  "Togo": {
    "name": "Togo",
    "cap": "Lomé",
    "code": "tg",
    "pop": "8.2 M",
    "area": "56k km²"
  },
  "Ghana": {
    "name": "Ghana",
    "cap": "Accra",
    "code": "gh",
    "pop": "31 M",
    "area": "238k km²"
  },
  "Cte d'Ivoire": {
    "name": "Costa d'Avorio",
    "cap": "Yamoussoukro",
    "code": "ci",
    "pop": "26 M",
    "area": "322k km²"
  },
  "Guinea": {
    "name": "Guinea",
    "cap": "Conakry",
    "code": "gn",
    "pop": "13 M",
    "area": "245k km²"
  },
  "Guinea-Bissau": {
    "name": "Guinea-Bissau",
    "cap": "Bissau",
    "code": "gw",
    "pop": "1.9 M",
    "area": "36k km²"
  },
  "Liberia": {
    "name": "Liberia",
    "cap": "Monrovia",
    "code": "lr",
    "pop": "5 M",
    "area": "111k km²"
  },
  "Sierra Leone": {
    "name": "Sierra Leone",
    "cap": "Freetown",
    "code": "sl",
    "pop": "7.9 M",
    "area": "71k km²"
  },
  "Burkina Faso": {
    "name": "Burkina Faso",
    "cap": "Ouagadougou",
    "code": "bf",
    "pop": "20 M",
    "area": "274k km²"
  },
  "Central African Rep.": {
    "name": "Repubblica Centrafricana",
    "cap": "Bangui",
    "code": "cf",
    "pop": "4.8 M",
    "area": "622k km²"
  },
  "Congo": {
    "name": "Congo",
    "cap": "Brazzaville",
    "code": "cg",
    "pop": "5.5 M",
    "area": "342k km²"
  },
  "Gabon": {
    "name": "Gabon",
    "cap": "Libreville",
    "code": "ga",
    "pop": "2.2 M",
    "area": "267k km²"
  },
  "Eq. Guinea": {
    "name": "Guinea Equatoriale",
    "cap": "Malabo",
    "code": "gq",
    "pop": "1.4 M",
    "area": "28k km²"
  },
  "Zambia": {
    "name": "Zambia",
    "cap": "Lusaka",
    "code": "zm",
    "pop": "18 M",
    "area": "752k km²"
  },
  "Malawi": {
    "name": "Malawi",
    "cap": "Lilongwe",
    "code": "mw",
    "pop": "19 M",
    "area": "118k km²"
  },
  "Mozambique": {
    "name": "Mozambico",
    "cap": "Maputo",
    "code": "mz",
    "pop": "31 M",
    "area": "801k km²"
  },
  "eSwatini": {
    "name": "Eswatini",
    "cap": "Mbabane",
    "code": "sz",
    "pop": "1.1 M",
    "area": "17k km²"
  },
  "Angola": {
    "name": "Angola",
    "cap": "Luanda",
    "code": "ao",
    "pop": "32 M",
    "area": "1.24M km²"
  },
  "Burundi": {
    "name": "Burundi",
    "cap": "Gitega",
    "code": "bi",
    "pop": "11 M",
    "area": "27k km²"
  },
  "Madagascar": {
    "name": "Madagascar",
    "cap": "Antananarivo",
    "code": "mg",
    "pop": "27 M",
    "area": "587k km²"
  },
  "Gambia": {
    "name": "Gambia",
    "cap": "Banjul",
    "code": "gm",
    "pop": "2.4 M",
    "area": "11k km²"
  },
  "Tunisia": {
    "name": "Tunisia",
    "cap": "Tunisi",
    "code": "tn",
    "pop": "11.8 M",
    "area": "163k km²"
  },
  "Algeria": {
    "name": "Algeria",
    "cap": "Algeri",
    "code": "dz",
    "pop": "43 M",
    "area": "2.38M km²"
  },
  "Morocco": {
    "name": "Marocco",
    "cap": "Rabat",
    "code": "ma",
    "pop": "36 M",
    "area": "710k km²"
  },
  "Egypt": {
    "name": "Egitto",
    "cap": "Il Cairo",
    "code": "eg",
    "pop": "102 M",
    "area": "1.01M km²"
  },
  "Libya": {
    "name": "Libia",
    "cap": "Tripoli",
    "code": "ly",
    "pop": "6.8 M",
    "area": "1.75M km²"
  },
  "Ethiopia": {
    "name": "Etiopia",
    "cap": "Addis Abeba",
    "code": "et",
    "pop": "114 M",
    "area": "1.1M km²"
  },
  "Djibouti": {
    "name": "Gibuti",
    "cap": "Gibuti",
    "code": "dj",
    "pop": "988k",
    "area": "23k km²"
  },
  "Somaliland": {
    "name": "Somaliland",
    "cap": "Hargheisa",
    "code": "so",
    "pop": "3.5 M",
    "area": "176k km²"
  },
  "Uganda": {
    "name": "Uganda",
    "cap": "Kampala",
    "code": "ug",
    "pop": "45 M",
    "area": "241k km²"
  },
  "Rwanda": {
    "name": "Ruanda",
    "cap": "Kigali",
    "code": "rw",
    "pop": "12 M",
    "area": "26k km²"
  },
  "Eritrea": {
    "name": "Eritrea",
    "cap": "Asmara",
    "code": "er",
    "pop": "3.5 M",
    "area": "117k km²"
  },
  "S. Sudan": {
    "name": "Sudan del Sud",
    "cap": "Giuba",
    "code": "ss",
    "pop": "11 M",
    "area": "644k km²"
  }
};

const dictAmericas = {
  "Argentina":{name:"Argentina",cap:"Buenos Aires",code:"ar",pop:"46 M",area:"2.78M km²"},
  "Bolivia":{name:"Bolivia",cap:"Sucre",code:"bo",pop:"12 M",area:"1.09M km²"},
  "Brazil":{name:"Brasile",cap:"Brasilia",code:"br",pop:"214 M",area:"8.51M km²"},
  "Chile":{name:"Cile",cap:"Santiago",code:"cl",pop:"19 M",area:"756k km²"},
  "Colombia":{name:"Colombia",cap:"Bogotà",code:"co",pop:"51 M",area:"1.14M km²"},
  "Ecuador":{name:"Ecuador",cap:"Quito",code:"ec",pop:"18 M",area:"283k km²"},
  "Guyana":{name:"Guyana",cap:"Georgetown",code:"gy",pop:"800k",area:"214k km²"},
  "Paraguay":{name:"Paraguay",cap:"Asunción",code:"py",pop:"6.7 M",area:"406k km²"},
  "Peru":{name:"Perù",cap:"Lima",code:"pe",pop:"34 M",area:"1.28M km²"},
  "Suriname":{name:"Suriname",cap:"Paramaribo",code:"sr",pop:"600k",area:"163k km²"},
  "Uruguay":{name:"Uruguay",cap:"Montevideo",code:"uy",pop:"3.4 M",area:"176k km²"},
  "Venezuela":{name:"Venezuela",cap:"Caracas",code:"ve",pop:"28 M",area:"916k km²"},
  "Canada":{name:"Canada",cap:"Ottawa",code:"ca",pop:"38 M",area:"9.98M km²"},
  "United States of America":{name:"Stati Uniti d'America",cap:"Washington D.C.",code:"us",pop:"331 M",area:"9.83M km²"},
  "Mexico":{name:"Messico",cap:"Città del Messico",code:"mx",pop:"126 M",area:"1.96M km²"},
  "Belize":{name:"Belize",cap:"Belmopan",code:"bz",pop:"400k",area:"22k km²"},
  "Costa Rica":{name:"Costa Rica",cap:"San José",code:"cr",pop:"5.1 M",area:"51k km²"},
  "El Salvador":{name:"El Salvador",cap:"San Salvador",code:"sv",pop:"6.3 M",area:"21k km²"},
  "Guatemala":{name:"Guatemala",cap:"Città del Guatemala",code:"gt",pop:"17 M",area:"108k km²"},
  "Honduras":{name:"Honduras",cap:"Tegucigalpa",code:"hn",pop:"10 M",area:"112k km²"},
  "Nicaragua":{name:"Nicaragua",cap:"Managua",code:"ni",pop:"6.8 M",area:"130k km²"},
  "Panama":{name:"Panama",cap:"Panama",code:"pa",pop:"4.3 M",area:"75k km²"},
  "Bahamas":{name:"Bahamas",cap:"Nassau",code:"bs",pop:"400k",area:"13k km²"},
  "Cuba":{name:"Cuba",cap:"L'Avana",code:"cu",pop:"11 M",area:"109k km²"},
  "Dominican Rep.":{name:"Repubblica Dominicana",cap:"Santo Domingo",code:"do",pop:"10 M",area:"48k km²"},
  "Haiti":{name:"Haiti",cap:"Port-au-Prince",code:"ht",pop:"11 M",area:"27k km²"},
  "Jamaica":{name:"Giamaica",cap:"Kingston",code:"jm",pop:"2.9 M",area:"10k km²"},
  "Puerto Rico":{name:"Porto Rico",cap:"San Juan",code:"pr",pop:"3.2 M",area:"9k km²"},
  "Trinidad and Tobago":{name:"Trinidad e Tobago",cap:"Port of Spain",code:"tt",pop:"1.3 M",area:"5k km²"},
  "Greenland":{name:"Groenlandia",cap:"Nuuk",code:"gl",pop:"56k",area:"2.16M km²"},
  "Falkland Is.":{name:"Isole Falkland",cap:"Stanley",code:"fk",pop:"3k",area:"12k km²"}
};
