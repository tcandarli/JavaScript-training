/* A sample of object
 * Family tree by using json structure
 */

let person = {
	name: "Mehmet",
	lastname: "Akin",
	father: "Ahmet",
	mother: "Havva",
	age: 35,
	address: {
		street: "1st street",
		city: "Istanbul",
	},
	children: [{
			name: "Ali",
			lastname: "Akin",
			spouse: {
				name: "",
				lastname: ""
			},
			children: [{
					name: "Hasan",
					lastname: "Akin",
					spouse: {
						name: "Aygul",
						lastname: "Akin"
					}
				},
				{
					name: "Huseyin",
					lastname: "Akin",
					spouse: {
						name: "Melike",
						lastname: "Akin"
					}
				}

			],
		},

		{
			name: "Zeynep",
			lastname: "Ozcan",
			spouse: {
				name: "Kadir",
				lastname: "Ozcan"
			},
			children: [{
					name: "Ekrem",
					lastname: "Ozcan",
				},
				{
					name: "Erdem",
					lastname: "Ozcan",
				}
			]
		},
		{
			name: "Kemal",
			lastname: "Akin",
			spouse: {
				name: "Kadriye",
				surname: "Akin"
			}
		},
	],
	uncle: [{
			name: "Kerem",
			lastname: "Akin",
			spouseName: "Kerime",
			children: [{
					name: "Halil",
					Lastname: "Akin",
				},
				{
					name: "Memnune",
					lastname: "Akin"

				}
			]

		},
		{
			name: "Adnan",
			lastname: "Akin",
			spouseName: ""
		}
	],
	Aunt: [{
			name: "Fatma",
			lastname: "Ozen",
			spouseName: "Fethi",
			children: [{
					name: "Abdullah",
					lastname: "Ozen",
					age: 28,
					spouseName:"Feride",
					children: [
						{
							name:"Ferhat",
							lastname:"Ozen",
							age: 1
						}
					]
				},
				{
					name: "Sevval",
					lastname: "Ozen",
					age: 12
				}
			]
		},
		{
			name: "Ayse",
			lastname: "Ozturk",
			spouseName: "Bilal",
			children: [{
				name: "Mehmet",
				lastname: "Ozturk",
				age: 5
			}]
		}
	]


}


person = JSON.stringify(person); // Converts to JSON type
person = JSON.parse(person); // Converts to JS object type

console.log(person);
console.log("Name: ", person.name);
console.log("Lastname: ", person.lastname);
console.log("Age", person.age);
console.log("Father: ", person.father);
console.log("Address", person.address.street);
console.log("Name of child 3:", person.children[2].name);
console.log("Spousename of child 3 ", person.children[2].spouse.name);
console.log("Name of first grandchild of person: ", person.children[0].children[0].name);
console.log("SpouseName of second grandchild of person: ", person.children[0].children[1].spouse.name);
console.log("Name of 2nd grandchild from 2nd child :", person.children[1].children[1].name);
console.log("Name of 2nd uncle: ", person.uncle[1].name);
console.log("SpouseName of 1st uncle: ", person.uncle[0].spouseName);
console.log("Name of second cousin from 1st uncle: ", person.uncle[0].children[1].name);
console.log("Name of second cousin from 1st aunt: ", person.Aunt[0].children[1].name);
console.log("Name of 1st aunt: ", person.Aunt[0].name);
console.log("SpouseName of 1st aunt: ", person.Aunt[0].spouseName);
console.log("Age of second cousin from 1st aunt: ", person.Aunt[0].children[1].age);
console.log("Name of grandchild of 1st aunt: ", person.Aunt[0].children[0].children[0].name);
console.log("Age of 1st grandchild of 1st aunt: ", person.Aunt[0].children[0].children[0].age);
console.log("Name of 2nd aunt: ", person.Aunt[1].name);
console.log("Name of 1st cousin from 2nd aunt: ", person.Aunt[1].children[0].name);
console.log("Age of 1st cousin from 2nd aunt: ", person.Aunt[1].children[0].age);