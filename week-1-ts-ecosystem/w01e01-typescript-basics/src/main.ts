import {hasAddress, hasGivenAge} from "./user";
import {User} from "./user";

const user: User = {
  name: 'Andy',
  age: 30,
  email: 'andy@mail-me-tommorow.com',
  address: {
    street: 'Strange Alley',
    no: 23,
  },
}
const isAdult = hasGivenAge(18);

console.log(`User ${user.name} is ${isAdult(user) ? 'adult' : 'minor'}`)
console.log(`and has${hasAddress(user) ? '' : ' no'} address`)
