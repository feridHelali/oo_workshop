
const players =[
    {id:1,name:'Messy'},
    {id:2,name:'Ronaldo'},
    {id:3,name:'Aziz'},
    {id:4,name:'Maradona'},
]

const aziz=players[3];
console.log(aziz);

function findPerson(id, personList) {
    for (let person of personList) {
        if (person.id === id) {
            return person;
        }
    }
    return {}
}


o={key:"value",key2:"varlue2"}

console.log(findPerson(3,players))
