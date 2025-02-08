const obj = {
  name: "Prakash",
  age: 100,
  jay: function () {
    console.log(this.name);
  },
address: {
    street: "123 Main St",
    zip: "400001",
    country: "India"
}
};

// Adding new properties using dot notation
obj.city = "Mumbai";
obj.state = "Maharashtra";
obj.age = 10;
obj.address.street = "456 New St";
obj.address.zip = "500002";
obj.address.country = "USA";

// console.log(obj);
// console.log(show);/
// Output: { name: 'Prakash', age: 100, city: 'Mumbai', state: 'Maharashtra' }

for (let key in obj) {
    if (typeof obj[key] === 'object') {
        for (let subKey in obj[key]) {
            console.log(`key: ${key}.${subKey}: value: ${obj[key][subKey]}`);
        }
    } else {
        console.log(`key: ${key}: value: ${obj[key]}`);
    }
}
