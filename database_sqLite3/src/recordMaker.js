const faker = require("faker");

/* console.log(faker.name.jobType());
console.log(faker.name.firstName());

console.log(faker.name.title()) */

/* function createUser () {
  
    name: faker.name.firstName();
    lastName: faker.name.lastName();
}

const createdUser = createUser();
console.log(createdUser); */

/* function createUser2 () {
    const usersArray = [];

    usersArray.push({
        name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    })

}

const createdUser2 = createUser2();
console.log(createUser2); */

function recordMaker (x){
    const arr = []
    
    for (let i=1; i<x; i++) {
    
    arr.push(

        {
          id: i,
       titel: faker.name.title(),
        name: faker.name.firstName(),
    lastName: faker.name.lastName(),
         age: Math.round((Math.random()+0.1)*100),
        city: faker.address.city(),
       state: faker.address.state(),
     company: faker.company.companyName(),
       email: faker.internet.email(),
       phone: faker.phone.phoneNumber(),
    }
    
    )
    } return arr }

 module.exports = recordMaker;   