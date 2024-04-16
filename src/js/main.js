let userName= "Majo";
let lastName= "Pino";
const age= "19";
const email= "majo12pino@gmail.com";
let address= "Cra 82#9A Sur";
let cel= "3153582196";

console.group("Data basic information");

console.info("User info:")
console.log("User: " + userName + " " + lastName);
console.log("User age: " + age);

console.groupEnd();

console.group("Data contact information");

console.info("User contact info:")
console.log("User mail: " + email);
console.log("User address: " + address);
console.log("User cel: " + cel);

console.groupEnd();

listCodersGates=["lupe ortiz", "mario zapata", "pedro pascal"];

console.info(listCodersGates);
console.table(listCodersGates);


/* console.log("User: " + userName + " " + lastName);
console.log("User age: " + age);
console.log("User mail: " + email);
console.log("User address: " + address);
console.log("User cel: " + cel);
console.log(`Hello ${userName} ${lastName}, your age is ${age}, your address is ${address}, your cellphone number is ${cel} and your email is ${email}`);
console.warn("User:" , userName , lastName , "Age:" , age , "Address:" , address , "Email:" , email , "Cellphone:" , cel );
console.error("User info: " + userName + " " + lastName + " " + age + " " + address + " " + email + " " + cel);
document.write("Welcome " + userName + " " + lastName);
console.log(`%c${cel}`, "background-color: #D9CEFF; border-radius: 50px; font-weight: bold; padding-top: 5px; padding-right: 8px; padding-bottom: 5px; padding-left: 8px;");
 */