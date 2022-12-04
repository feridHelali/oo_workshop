export class CarList{
    constructor(){
        this.carList=[];
    }

    addCar(car){
        this.carList.push(car);
    }

    get theCarList(){
        return this.carList;
    }
}