exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("people")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("people").insert([
        {
          id: 1,
          email: "nparnby0@istockphoto.com",
          slackID: "5602210322634797",
          githubID: "3545680676376325",
          firstName: "Nonah",
          lastName: "Parnby",
          timeZone: "Asia/Shanghai",
          program: "Chrysler"
        },
        {
          id: 2,
          email: "lauton1@ow.ly",
          slackID: "5602254953497165",
          githubID: "3571587890877862",
          firstName: "Larisa",
          lastName: "Auton",
          timeZone: "Africa/El_Aaiun",
          program: "Chevrolet"
        },
        {
          id: 3,
          email: "vakam2@oaic.gov.au",
          slackID: "3582845913099501",
          githubID: "4405541248156966",
          firstName: "Vera",
          lastName: "Akam",
          timeZone: "Asia/Jakarta",
          program: "Saturn"
        },
        {
          id: 4,
          email: "lgammon3@topsy.com",
          slackID: "3551274569266255",
          githubID: "6333123641242618702",
          firstName: "Linnie",
          lastName: "Gammon",
          timeZone: "America/Chicago",
          program: "Mercury"
        },
        {
          id: 5,
          email: "csoutheran4@com.com",
          slackID: "3570063262445119",
          githubID: "3577567285621137",
          firstName: "Cairistiona",
          lastName: "Southeran",
          timeZone: "Europe/Warsaw",
          program: "Lotus"
        },
        {
          id: 6,
          email: "bgilhespy5@gravatar.com",
          slackID: "3566304601409713",
          githubID: "5100172293491523",
          firstName: "Britta",
          lastName: "Gilhespy",
          timeZone: "Europe/Prague",
          program: "Mercury"
        },
        {
          id: 7,
          email: "jbartlett6@liveinternet.ru",
          slackID: "4508166396729939",
          githubID: "3584829406749119",
          firstName: "Jesse",
          lastName: "Bartlett",
          timeZone: "Asia/Manila",
          program: "Eagle"
        },
        {
          id: 8,
          email: "lsaunder7@businesswire.com",
          slackID: "3589902786652867",
          githubID: "4405821105800595",
          firstName: "Libbi",
          lastName: "Saunder",
          timeZone: "Asia/Shanghai",
          program: "Infiniti"
        },
        {
          id: 9,
          email: "gmcfade8@wix.com",
          slackID: "374622459655865",
          githubID: "4405554007865883",
          firstName: "Gracia",
          lastName: "McFade",
          timeZone: "Europe/Stockholm",
          program: "Chrysler"
        },
        {
          id: 10,
          email: "dgoodright9@vkontakte.ru",
          slackID: "3551996854620206",
          githubID: "3575374214810713",
          firstName: "Dannye",
          lastName: "Goodright",
          timeZone: "Asia/Jakarta",
          program: "Mercury"
        },
        {
          id: 11,
          email: "rcronea@seesaa.net",
          slackID: "6331104555210542693",
          githubID: "3584546013524624",
          firstName: "Rachel",
          lastName: "Crone",
          timeZone: "Europe/Minsk",
          program: "Oldsmobile"
        },
        {
          id: 12,
          email: "mbossb@acquirethisname.com",
          slackID: "3586996756640830",
          githubID: "5108756002775697",
          firstName: "Marcelline",
          lastName: "Boss",
          timeZone: "Asia/Tokyo",
          program: "Lincoln"
        },
        {
          id: 13,
          email: "dskogginsc@mediafire.com",
          slackID: "3559850025991396",
          githubID: "493678648260149566",
          firstName: "Darcey",
          lastName: "Skoggins",
          timeZone: "Asia/Makassar",
          program: "Land Rover"
        },
        {
          id: 14,
          email: "ekoepped@facebook.com",
          slackID: "3541304493630145",
          githubID: "3537115501673026",
          firstName: "Elvina",
          lastName: "Koeppe",
          timeZone: "Asia/Shanghai",
          program: "Chevrolet"
        },
        {
          id: 15,
          email: "tbreedere@ovh.net",
          slackID: "201673028131481",
          githubID: "5602213660885237",
          firstName: "Tracey",
          lastName: "Breeder",
          timeZone: "America/Guayaquil",
          program: "Toyota"
        },
        {
          id: 16,
          email: "gvintenf@fastcompany.com",
          slackID: "3543314681695600",
          githubID: "6372005088982372",
          firstName: "Gabbi",
          lastName: "Vinten",
          timeZone: "Europe/Warsaw",
          program: "Acura"
        },
        {
          id: 17,
          email: "jtroubridgeg@123-reg.co.uk",
          slackID: "3539341037639731",
          githubID: "3564408471857034",
          firstName: "Justine",
          lastName: "Troubridge",
          timeZone: "Asia/Manila",
          program: "Audi"
        },
        {
          id: 18,
          email: "tbudgeonh@mit.edu",
          slackID: "67097890958767532",
          githubID: "3565910465423110",
          firstName: "Tabbitha",
          lastName: "Budgeon",
          timeZone: "Asia/Jakarta",
          program: "Ford"
        },
        {
          id: 19,
          email: "acuerdalli@pen.io",
          slackID: "201628022288513",
          githubID: "4175006258434040",
          firstName: "Ali",
          lastName: "Cuerdall",
          timeZone: "America/Jamaica",
          program: "Aston Martin"
        },
        {
          id: 20,
          email: "xbellengerj@ebay.com",
          slackID: "3562107046810369",
          githubID: "3577442760298464",
          firstName: "Xena",
          lastName: "Bellenger",
          timeZone: "Asia/Harbin",
          program: "GMC"
        },
        {
          id: 21,
          email: "rklewerk@skype.com",
          slackID: "30470252521231",
          githubID: "6390863045694870",
          firstName: "Rey",
          lastName: "Klewer",
          timeZone: "Asia/Manila",
          program: "Chevrolet"
        },
        {
          id: 22,
          email: "skoomarl@dyndns.org",
          slackID: "490535891234728607",
          githubID: "3569738153310745",
          firstName: "Sophi",
          lastName: "Koomar",
          timeZone: "Europe/Athens",
          program: "Mercedes-Benz"
        },
        {
          id: 23,
          email: "bgoudem@globo.com",
          slackID: "6304666049612389280",
          githubID: "4905229123514740",
          firstName: "Brandi",
          lastName: "Goude",
          timeZone: "Europe/Moscow",
          program: "Audi"
        },
        {
          id: 24,
          email: "cryamn@sakura.ne.jp",
          slackID: "3547692345889552",
          githubID: "4913565695612317",
          firstName: "Chrissy",
          lastName: "Ryam",
          timeZone: "Asia/Shanghai",
          program: "Toyota"
        },
        {
          id: 25,
          email: "cstinsono@unesco.org",
          slackID: "3537745305829067",
          githubID: "3589600102052578",
          firstName: "Corry",
          lastName: "Stinson",
          timeZone: "America/New_York",
          program: "Aston Martin"
        },
        {
          id: 26,
          email: "gtrenbeyp@hp.com",
          slackID: "493661837116039829",
          githubID: "5020553473468336881",
          firstName: "Germain",
          lastName: "Trenbey",
          timeZone: "Asia/Urumqi",
          program: "Land Rover"
        },
        {
          id: 27,
          email: "mpriestnallq@state.gov",
          slackID: "30347264268458",
          githubID: "6759900931318329721",
          firstName: "Michell",
          lastName: "Priestnall",
          timeZone: "Asia/Tokyo",
          program: "Subaru"
        },
        {
          id: 28,
          email: "deyresr@google.com.br",
          slackID: "201495478828998",
          githubID: "374288458932588",
          firstName: "Di",
          lastName: "Eyres",
          timeZone: "America/Sao_Paulo",
          program: "Chevrolet"
        },
        {
          id: 29,
          email: "jkenealys@vkontakte.ru",
          slackID: "6759091426209391525",
          githubID: "3540398246388952",
          firstName: "Janean",
          lastName: "Kenealy",
          timeZone: "Europe/Lisbon",
          program: "Chevrolet"
        },
        {
          id: 30,
          email: "ghillettt@yellowbook.com",
          slackID: "3582271907334202",
          githubID: "3541680869316652",
          firstName: "Guinevere",
          lastName: "Hillett",
          timeZone: "America/Los_Angeles",
          program: "Kia"
        },
        {
          id: 31,
          email: "sgoadyu@live.com",
          slackID: "5553425724442891",
          githubID: "3549552543488821",
          firstName: "Starla",
          lastName: "Goady",
          timeZone: "Africa/Lagos",
          program: "Ford"
        },
        {
          id: 32,
          email: "cfullicksv@goodreads.com",
          slackID: "3557839687859241",
          githubID: "3528708452317543",
          firstName: "Carmelina",
          lastName: "Fullicks",
          timeZone: "Europe/Moscow",
          program: "Mazda"
        },
        {
          id: 33,
          email: "pmasarratw@miitbeian.gov.cn",
          slackID: "560222757700112733",
          githubID: "5108751183763695",
          firstName: "Paulita",
          lastName: "Masarrat",
          timeZone: "Asia/Jakarta",
          program: "Oldsmobile"
        },
        {
          id: 34,
          email: "eadrianox@weebly.com",
          slackID: "4038285970198532",
          githubID: "5007666691727101",
          firstName: "Emelda",
          lastName: "Adriano",
          timeZone: "Asia/Almaty",
          program: "Oldsmobile"
        },
        {
          id: 35,
          email: "smundfordy@1und1.de",
          slackID: "3575532555020479",
          githubID: "3536488614892655",
          firstName: "Shara",
          lastName: "Mundford",
          timeZone: "Europe/Moscow",
          program: "Chevrolet"
        },
        {
          id: 36,
          email: "klohdenz@facebook.com",
          slackID: "3553671244645217",
          githubID: "6394393721450096",
          firstName: "Krissie",
          lastName: "Lohden",
          timeZone: "Asia/Bangkok",
          program: "Volkswagen"
        },
        {
          id: 37,
          email: "bmawford10@twitpic.com",
          slackID: "4017951428879040",
          githubID: "4026679236377647",
          firstName: "Brandy",
          lastName: "Mawford",
          timeZone: "America/New_York",
          program: "MINI"
        },
        {
          id: 38,
          email: "cchild11@ca.gov",
          slackID: "30289830403252",
          githubID: "3553224637954448",
          firstName: "Chrystel",
          lastName: "Child",
          timeZone: "Asia/Shanghai",
          program: "Dodge"
        },
        {
          id: 39,
          email: "mthorius12@surveymonkey.com",
          slackID: "3589940376193926",
          githubID: "3549013609957480",
          firstName: "Marion",
          lastName: "Thorius",
          timeZone: "Asia/Makassar",
          program: "Saab"
        },
        {
          id: 40,
          email: "saked13@purevolume.com",
          slackID: "337941099961855",
          githubID: "3579050569453186",
          firstName: "Shauna",
          lastName: "Aked",
          timeZone: "Asia/Manila",
          program: "Ford"
        },
        {
          id: 41,
          email: "cbrushfield14@yellowpages.com",
          slackID: "6334120979714870315",
          githubID: "3564000738294778",
          firstName: "Charlotta",
          lastName: "Brushfield",
          timeZone: "Asia/Jakarta",
          program: "Mercedes-Benz"
        },
        {
          id: 42,
          email: "jboggers15@dell.com",
          slackID: "4936896612229889530",
          githubID: "5007666552974354",
          firstName: "Jeri",
          lastName: "Boggers",
          timeZone: "Europe/Moscow",
          program: "Lexus"
        },
        {
          id: 43,
          email: "kberg16@g.co",
          slackID: "201703488023298",
          githubID: "5108757975441713",
          firstName: "Krystalle",
          lastName: "Berg",
          timeZone: "Asia/Karachi",
          program: "Mercury"
        },
        {
          id: 44,
          email: "mperkis17@smh.com.au",
          slackID: "6333804128769528",
          githubID: "374622357554731",
          firstName: "Miof mela",
          lastName: "Perkis",
          timeZone: "Europe/Lisbon",
          program: "Volkswagen"
        },
        {
          id: 45,
          email: "kbotcherby18@cnet.com",
          slackID: "3540219694997583",
          githubID: "3548089118312608",
          firstName: "Kassi",
          lastName: "Botcherby",
          timeZone: "Europe/Stockholm",
          program: "Aston Martin"
        },
        {
          id: 46,
          email: "dhumbie19@newyorker.com",
          slackID: "3552907220538104",
          githubID: "3576289988639081",
          firstName: "Delila",
          lastName: "Humbie",
          timeZone: "Europe/Paris",
          program: "Ford"
        },
        {
          id: 47,
          email: "tsposito1a@mail.ru",
          slackID: "3561738906060215",
          githubID: "30058559662442",
          firstName: "Tessi",
          lastName: "Sposito",
          timeZone: "Asia/Chongqing",
          program: "Ford"
        },
        {
          id: 48,
          email: "comullally1b@blogspot.com",
          slackID: "3553411631990367",
          githubID: "3553954887254061",
          firstName: "Cloris",
          lastName: "O'Mullally",
          timeZone: "Europe/Helsinki",
          program: "Chevrolet"
        },
        {
          id: 49,
          email: "scoldman1c@slashdot.org",
          slackID: "30462599113582",
          githubID: "5602247602292904",
          firstName: "Shel",
          lastName: "Coldman",
          timeZone: "Europe/Warsaw",
          program: "Chevrolet"
        },
        {
          id: 50,
          email: "cfoord1d@geocities.com",
          slackID: "5007664440443153",
          githubID: "3533465370222817",
          firstName: "Cornie",
          lastName: "Foord",
          timeZone: "Asia/Jakarta",
          program: "Toyota"
        }
      ]);
    });
};
