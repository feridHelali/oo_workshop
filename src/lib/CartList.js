export class CarList{
    constructor(){
        this.carList=[];
    }

    addCar(car){
        this.carList.push(car);
    }

    removeCar(id){
        this.carList.map(car => {
            if(car.id!==id) return car;
        })
    }

    get theCarList(){
        return this.carList;
    }
}