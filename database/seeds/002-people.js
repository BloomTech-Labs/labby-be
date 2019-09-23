exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("people")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("people").insert([
        {
          id: 1,
          email: "eearie0@accuweather.com",
          slack_id: "3534180210179585",
          github_id: "337941841924896",
          first_name: "Edsel",
          last_name: "Earie",
          time_zone: "Europe/Berlin",
          program: "Mitsubishi"
        },
        {
          id: 2,
          email: "tmitchall1@stanford.edu",
          slack_id: "4026506163656919",
          github_id: "3588699799087310",
          first_name: "Teresita",
          last_name: "Mitchall",
          time_zone: "Asia/Chongqing",
          program: "Scion"
        },
        {
          id: 3,
          email: "lcornely2@tmall.com",
          slack_id: "3536251200289201",
          github_id: "3567714775574473",
          first_name: "Leroy",
          last_name: "Cornely",
          time_zone: "Europe/Istanbul",
          program: "Studebaker"
        },
        {
          id: 4,
          email: "hbenedtti3@ameblo.jp",
          slack_id: "5038612640513484",
          github_id: "5641827645142803",
          first_name: "Harmony",
          last_name: "Benedtti",
          time_zone: "Africa/Monrovia",
          program: "Volvo"
        },
        {
          id: 5,
          email: "sbeaushaw4@who.int",
          slack_id: "3576223762748040",
          github_id: "6304259957011753976",
          first_name: "Selby",
          last_name: "Beaushaw",
          time_zone: "Africa/Dakar",
          program: "Subaru"
        },
        {
          id: 6,
          email: "cbriddock5@wikipedia.org",
          slack_id: "6333911942863867370",
          github_id: "5602235244240076",
          first_name: "Corrina",
          last_name: "Briddock",
          time_zone: "Africa/Blantyre",
          program: "Volvo"
        },
        {
          id: 7,
          email: "bgilliard6@google.ru",
          slack_id: "4844298166390429",
          github_id: "4913202481641645",
          first_name: "Brennan",
          last_name: "Gilliard",
          time_zone: "Asia/Jakarta",
          program: "GMC"
        },
        {
          id: 8,
          email: "eemblem7@icio.us",
          slack_id: "6304019451035232085",
          github_id: "5602229742188248009",
          first_name: "Elspeth",
          last_name: "Emblem",
          time_zone: "Asia/Manila",
          program: "Lotus"
        },
        {
          id: 9,
          email: "maulds8@technorati.com",
          slack_id: "6333975797772736",
          github_id: "3589560945764542",
          first_name: "Mollie",
          last_name: "Aulds",
          time_zone: "America/Montreal",
          program: "Buick"
        },
        {
          id: 10,
          email: "gpauletto9@youtu.be",
          slack_id: "3578365600944170",
          github_id: "560222254777938737",
          first_name: "Gilberto",
          last_name: "Pauletto",
          time_zone: "Europe/Uzhgorod",
          program: "Kia"
        },
        {
          id: 11,
          email: "pwitcharda@ycombinator.com",
          slack_id: "30294240743347",
          github_id: "3543631702328485",
          first_name: "Pearla",
          last_name: "Witchard",
          time_zone: "America/Edmonton",
          program: "Ford"
        },
        {
          id: 12,
          email: "bwarneb@house.gov",
          slack_id: "201610818139415",
          github_id: "5273941833539566",
          first_name: "Berkley",
          last_name: "Warne",
          time_zone: "Asia/Tokyo",
          program: "Lamborghini"
        },
        {
          id: 13,
          email: "lbilslandc@constantcontact.com",
          slack_id: "3544257214638093",
          github_id: "6371257221261484",
          first_name: "Ludovico",
          last_name: "Bilsland",
          time_zone: "Europe/Lisbon",
          program: "Lincoln"
        },
        {
          id: 14,
          email: "sminchindend@prweb.com",
          slack_id: "5458347323195983",
          github_id: "3556043477839155",
          first_name: "Stefano",
          last_name: "Minchinden",
          time_zone: "Europe/Paris",
          program: "Maserati"
        },
        {
          id: 15,
          email: "lwellesleye@amazon.co.jp",
          slack_id: "3540771737191939",
          github_id: "201617379756735",
          first_name: "Lindie",
          last_name: "Wellesley",
          time_zone: "Asia/Shanghai",
          program: "GMC"
        },
        {
          id: 16,
          email: "gbumbyf@taobao.com",
          slack_id: "633357565893162130",
          github_id: "3536938416886461",
          first_name: "Guy",
          last_name: "Bumby",
          time_zone: "America/Argentina/Cordoba",
          program: "Mercury"
        },
        {
          id: 17,
          email: "cbulterg@loc.gov",
          slack_id: "3575607638609611",
          github_id: "201903363123383",
          first_name: "Corinna",
          last_name: "Bulter",
          time_zone: "Europe/Paris",
          program: "Pontiac"
        },
        {
          id: 18,
          email: "abrittonerh@si.edu",
          slack_id: "5196685248421563",
          github_id: "3542297669503709",
          first_name: "Almire",
          last_name: "Brittoner",
          time_zone: "Asia/Kuala_Lumpur",
          program: "Dodge"
        },
        {
          id: 19,
          email: "lschoolfieldi@instagram.com",
          slack_id: "5602239444633458857",
          github_id: "3546407660682487",
          first_name: "Linette",
          last_name: "Schoolfield",
          time_zone: "Asia/Makassar",
          program: "Ford"
        },
        {
          id: 20,
          email: "dromeij@jiathis.com",
          slack_id: "3531532704677453",
          github_id: "372301298779440",
          first_name: "Demetria",
          last_name: "Romei",
          time_zone: "Asia/Harbin",
          program: "GMC"
        },
        {
          id: 21,
          email: "dlongworthyk@e-recht24.de",
          slack_id: "3528461021852331",
          github_id: "5002356350119486",
          first_name: "Diannne",
          last_name: "Longworthy",
          time_zone: "Europe/Zaporozhye",
          program: "Mercury"
        },
        {
          id: 22,
          email: "acorderyl@ocn.ne.jp",
          slack_id: "3571278681188640",
          github_id: "3570774451672988",
          first_name: "Ambrose",
          last_name: "Cordery",
          time_zone: "Asia/Shanghai",
          program: "Mercedes-Benz"
        },
        {
          id: 23,
          email: "areuvenm@prlog.org",
          slack_id: "5565040995996073",
          github_id: "3528250596469005",
          first_name: "Ab",
          last_name: "Reuven",
          time_zone: "Africa/Lagos",
          program: "Volkswagen"
        },
        {
          id: 24,
          email: "ekleanthousn@mozilla.com",
          slack_id: "3570199006544427",
          github_id: "630454253352733430",
          first_name: "Elora",
          last_name: "Kleanthous",
          time_zone: "Asia/Shanghai",
          program: "Chevrolet"
        },
        {
          id: 25,
          email: "mshegogo@princeton.edu",
          slack_id: "5610169501639268",
          github_id: "4208657021692",
          first_name: "Malynda",
          last_name: "Shegog",
          time_zone: "Asia/Tashkent",
          program: "Honda"
        },
        {
          id: 26,
          email: "pchingp@toplist.cz",
          slack_id: "3562137020726794",
          github_id: "3552232579441010",
          first_name: "Padraic",
          last_name: "Ching",
          time_zone: "Europe/Prague",
          program: "Maybach"
        },
        {
          id: 27,
          email: "aheareq@narod.ru",
          slack_id: "3544339986969839",
          github_id: "3584809646502684",
          first_name: "Allan",
          last_name: "Heare",
          time_zone: "America/Tegucigalpa",
          program: "Mercedes-Benz"
        },
        {
          id: 28,
          email: "madamskyr@istockphoto.com",
          slack_id: "5048377352124874",
          github_id: "6333290067365255766",
          first_name: "Melania",
          last_name: "Adamsky",
          time_zone: "Asia/Jakarta",
          program: "Mazda"
        },
        {
          id: 29,
          email: "jgerriessens@meetup.com",
          slack_id: "501889413845904307",
          github_id: "5504507481943961",
          first_name: "Jessie",
          last_name: "Gerriessen",
          time_zone: "Africa/Juba",
          program: "Mercedes-Benz"
        },
        {
          id: 30,
          email: "xgillbardt@nature.com",
          slack_id: "3548276931312408",
          github_id: "6333803009377898",
          first_name: "Xylia",
          last_name: "Gillbard",
          time_zone: "Asia/Manila",
          program: "Mercedes-Benz"
        },
        {
          id: 31,
          email: "dlearmountu@soundcloud.com",
          slack_id: "3530718367436722",
          github_id: "3582771076603444",
          first_name: "Delinda",
          last_name: "Learmount",
          time_zone: "Asia/Chongqing",
          program: "Ford"
        },
        {
          id: 32,
          email: "hchristopherv@columbia.edu",
          slack_id: "3582106248108644",
          github_id: "4041375349321",
          first_name: "Hurley",
          last_name: "Christopher",
          time_zone: "Asia/Jakarta",
          program: "Chevrolet"
        },
        {
          id: 33,
          email: "vkoptaw@pbs.org",
          slack_id: "56022385914583514",
          github_id: "56022103912804174",
          first_name: "Violet",
          last_name: "Kopta",
          time_zone: "Asia/Jakarta",
          program: "Chevrolet"
        },
        {
          id: 34,
          email: "rsargeauntx@yandex.ru",
          slack_id: "6399455305899769",
          github_id: "6762333293721311924",
          first_name: "Rolfe",
          last_name: "Sargeaunt",
          time_zone: "Africa/Lagos",
          program: "Chrysler"
        },
        {
          id: 35,
          email: "rohannigany@wix.com",
          slack_id: "5602216606963844",
          github_id: "3578558405125728",
          first_name: "Rolf",
          last_name: "O'Hannigan",
          time_zone: "Asia/Makassar",
          program: "Mitsubishi"
        },
        {
          id: 36,
          email: "gratterz@abc.net.au",
          slack_id: "4911693510130592045",
          github_id: "4405027359725658",
          first_name: "Goldarina",
          last_name: "Ratter",
          time_zone: "America/Asuncion",
          program: "Mercury"
        },
        {
          id: 37,
          email: "psaltwell10@comcast.net",
          slack_id: "3551988746000218",
          github_id: "56022168220220942",
          first_name: "Pearla",
          last_name: "Saltwell",
          time_zone: "Asia/Chongqing",
          program: "Mitsubishi"
        },
        {
          id: 38,
          email: "jmabey11@pinterest.com",
          slack_id: "375127355310101",
          github_id: "6759818918167813",
          first_name: "Jamie",
          last_name: "Mabey",
          time_zone: "Asia/Kabul",
          program: "Ford"
        },
        {
          id: 39,
          email: "gmulhall12@bandcamp.com",
          slack_id: "3582018732817053",
          github_id: "5190198866359707",
          first_name: "Gabriella",
          last_name: "Mulhall",
          time_zone: "Asia/Shanghai",
          program: "Chevrolet"
        },
        {
          id: 40,
          email: "vnellis13@cnbc.com",
          slack_id: "3534969172988128",
          github_id: "675941280819660613",
          first_name: "Valentijn",
          last_name: "Nellis",
          time_zone: "Asia/Bangkok",
          program: "Land Rover"
        },
        {
          id: 41,
          email: "mgeorgiev14@mit.edu",
          slack_id: "4175003340775399",
          github_id: "3534531724053007",
          first_name: "Meris",
          last_name: "Georgiev",
          time_zone: "Asia/Jakarta",
          program: "Volvo"
        },
        {
          id: 42,
          email: "nmosedill15@narod.ru",
          slack_id: "6304569374380545",
          github_id: "6709412969407525",
          first_name: "Nikola",
          last_name: "Mosedill",
          time_zone: "Asia/Shanghai",
          program: "Volkswagen"
        },
        {
          id: 43,
          email: "bsorrel16@tripadvisor.com",
          slack_id: "6333401175867920732",
          github_id: "5641820826124310",
          first_name: "Brook",
          last_name: "Sorrel",
          time_zone: "Europe/Kaliningrad",
          program: "BMW"
        },
        {
          id: 44,
          email: "jmitrovic17@i2i.jp",
          slack_id: "3550964552730249",
          github_id: "3542642957968637",
          first_name: "Jaimie",
          last_name: "Mitrovic",
          time_zone: "Africa/Kampala",
          program: "Land Rover"
        },
        {
          id: 45,
          email: "gsalery18@drupal.org",
          slack_id: "3547717498601304",
          github_id: "3544167955624097",
          first_name: "Gayler",
          last_name: "Salery",
          time_zone: "Asia/Bangkok",
          program: "GMC"
        },
        {
          id: 46,
          email: "yjeannaud19@photobucket.com",
          slack_id: "3547731271310405",
          github_id: "3555819959061793",
          first_name: "Yvon",
          last_name: "Jeannaud",
          time_zone: "Asia/Manila",
          program: "Lincoln"
        },
        {
          id: 47,
          email: "hgidney1a@yahoo.co.jp",
          slack_id: "67714120504021876",
          github_id: "3556549291497137",
          first_name: "Hy",
          last_name: "Gidney",
          time_zone: "America/Bogota",
          program: "Acura"
        },
        {
          id: 48,
          email: "sgisborne1b@guardian.co.uk",
          slack_id: "5010128633601345",
          github_id: "3587583458119229",
          first_name: "Stacy",
          last_name: "Gisborne",
          time_zone: "Asia/Makassar",
          program: "Mercury"
        },
        {
          id: 49,
          email: "spiffe1c@phpbb.com",
          slack_id: "3528485247150873",
          github_id: "3581677005429879",
          first_name: "Sunshine",
          last_name: "Piffe",
          time_zone: "Asia/Chongqing",
          program: "Toyota"
        },
        {
          id: 50,
          email: "apenrice1d@shop-pro.jp",
          slack_id: "4905413383798199",
          github_id: "50381742228006988",
          first_name: "Arleyne",
          last_name: "Penrice",
          time_zone: "Africa/Ndjamena",
          program: "Audi"
        }
      ]);
    });
};
