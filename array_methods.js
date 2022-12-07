let carCatalog =[
    {id:1,brand:"Mercedes",price:70500,stock:4},
    {id:2,brand:"BMW",price:80500, stock:3},
    {id:3,brand:"Peugeot",price:30500, stock:6},
    {id:4,brand:"Fiat",price:20500, stock:6},
    {id:5,brand:"Audi",price:25500, stock:3}
]

const carPriceGT35000 = 
 carCatalog
    .filter(car => car.price>35000)
    .filter(car => car.stock===3);

const total = carCatalog.reduce((total,car)=>total+(car.price*car.stock),0)

console.table(carCatalog)
let bmw = carCatalog.find(car=>car.brand==="BMW");
console.log(bmw)
console.log(total);