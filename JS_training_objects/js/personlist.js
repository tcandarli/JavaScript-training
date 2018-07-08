const persons = [{
        "id": "5b408fc8440e46c233028d72",
        "isActive": true,
        "balance": "$2,726.46",
        "age": 26,
        "eyeColor": "green",
        "name": "Chandler Swanson",
        "gender": "male",
        "company": "ZEDALIS",
        "email": "chandlerswanson@zedalis.com",
        "phone": "+1 (948) 525-2488",
        "address": "922 Preston Court, Colton, Palau, 4078",
        "friends": [{
                "id": 0,
                "name": "Daugherty Hodges"
            },
            {
                "id": 1,
                "name": "Velez Oneill"
            },
            {
                "id": 2,
                "name": "Lavonne Wheeler"
            }
        ]
    },
    {
        "id": "5b408fc84ce214bb898e9376",
        "isActive": false,
        "balance": "$2,134.92",
        "age": 33,
        "eyeColor": "blue",
        "name": "French Campbell",
        "gender": "male",
        "company": "ADORNICA",
        "email": "frenchcampbell@adornica.com",
        "phone": "+1 (922) 404-2948",
        "address": "619 Railroad Avenue, Cecilia, Tennessee, 6853",
        "friends": [{
                "id": 0,
                "name": "Garner Fleming"
            },
            {
                "id": 1,
                "name": "Whitfield Faulkner"
            },
            {
                "id": 2,
                "name": "Phillips Guerrero"
            }
        ]
    },
    {
        "id": "5b408fc8babd49794c54aa3c",
        "isActive": true,
        "balance": "$3,864.05",
        "age": 25,
        "eyeColor": "green",
        "name": "Lilian Rosario",
        "gender": "female",
        "company": "FIBEROX",
        "email": "lilianrosario@fiberox.com",
        "phone": "+1 (995) 479-2884",
        "address": "498 Wythe Place, Flintville, Oklahoma, 8539",
        "friends": [{
                "id": 0,
                "name": "Wade Dudley"
            },
            {
                "id": 1,
                "name": "Ramsey Short"
            },
            {
                "id": 2,
                "name": "Eve Phelps"
            }
        ]
    },
    {
        "id": "5b408fc872a642e566d6adb9",
        "isActive": false,
        "balance": "$3,879.66",
        "age": 24,
        "eyeColor": "blue",
        "name": "Ferrell Greer",
        "gender": "male",
        "company": "LIMAGE",
        "email": "ferrellgreer@limage.com",
        "phone": "+1 (981) 560-2068",
        "address": "358 Adler Place, Maury, Maryland, 2929",
        "friends": [{
                "id": 0,
                "name": "Pam Blackburn"
            },
            {
                "id": 1,
                "name": "Elisabeth Ward"
            },
            {
                "id": 2,
                "name": "Jefferson Munoz"
            }
        ]
    },
    {
        "id": "5b408fc826b601415a3fbdb7",
        "isActive": true,
        "balance": "$2,174.92",
        "age": 34,
        "eyeColor": "blue",
        "name": "Effie Skinner",
        "gender": "female",
        "company": "MAGNEATO",
        "email": "effieskinner@magneato.com",
        "phone": "+1 (943) 452-3591",
        "address": "682 Bokee Court, Callaghan, Delaware, 2665",
        "friends": [{
                "id": 0,
                "name": "Cathryn Sparks"
            },
            {
                "id": 1,
                "name": "Shepherd Park"
            },
            {
                "id": 2,
                "name": "Carrie Kerr"
            }
        ]
    },
    {
        "id": "5b408fc8fbc8f02dc57296d9",
        "isActive": false,
        "balance": "$1,226.53",
        "age": 20,
        "eyeColor": "brown",
        "name": "Morgan Harris",
        "gender": "female",
        "company": "COMVERGES",
        "email": "morganharris@comverges.com",
        "phone": "+1 (946) 564-2332",
        "address": "508 Moore Street, Kilbourne, North Dakota, 4715",
        "friends": [{
                "id": 0,
                "name": "Mills Cantrell"
            },
            {
                "id": 1,
                "name": "Betsy Knox"
            },
            {
                "id": 2,
                "name": "Harvey Campos"
            }
        ]
    },
    {
        "id": "5b408fc8ab348335201c6a41",
        "isActive": true,
        "balance": "$3,104.42",
        "age": 38,
        "eyeColor": "blue",
        "name": "Yvonne Ball",
        "gender": "female",
        "company": "PETIGEMS",
        "email": "yvonneball@petigems.com",
        "phone": "+1 (832) 577-2283",
        "address": "641 Balfour Place, Dundee, Washington, 8651",
        "friends": [{
                "id": 0,
                "name": "Shelton Shannon"
            },
            {
                "id": 1,
                "name": "Maryellen Boyle"
            },
            {
                "id": 2,
                "name": "Townsend Whitfield"
            }
        ]
    }
]


// Number of persons who have green eyes
console.log("Number of persons who have green eyes:", persons.filter(person => person.eyeColor === "green").length);

// Persons; age >=30 and gender ===male
console.log("List of men who have 30 and older than 30: ", persons.filter(person => person.gender === "male" && person.age >= 30).length);

// Womens younger than 30
let WomenYoungerThan30 = persons.filter(person => person.gender === "female" && person.age < 30); //List of females younger than 30
    WomenNames = WomenYoungerThan30.map(person => person.name).join(", "); //women names younger than 30
console.log("List of females younger than 30: ", WomenNames);

// Womens younger than 40
let WomenYoungerThan40 = 
persons.filter(person => person.gender === "female" && person.age < 40)
        .map(person => person.name)
        .join(", "); //women names younger than 32
console.log("List of females younger than 40: ", WomenNames);

// Ages and average age of women who have more than 2000$

let agesOfWomenWhoHaVeMoreThan2000 =
    persons.filter(p=> +p.balance.replace("$","").replace(",","") > 2000 && p.gender === "female")
            .map(p => p.age) 
console.log("Age of women who have more than 2000$", agesOfWomenWhoHaVeMoreThan2000);
let ageAverage = 
    agesOfWomenWhoHaVeMoreThan2000.reduce((sum, value)=> sum+value) / agesOfWomenWhoHaVeMoreThan2000.length
console.log("Average age of women who have more than 2000$: ", ageAverage);


