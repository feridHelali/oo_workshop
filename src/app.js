import {Car} from './lib/Car';
import { CarList } from './lib/CartList';
import {CarListView} from './lib/CarListView';

const addCarTextField = document.querySelector('#addCarText')
const addCarButton = document.querySelector('#addCarBtn')
const displayCarListOutput = document.querySelector('#outputList')

list = new CarList()



 const view=new CarListView();
 
 addCarButton.addEventListener('click',(event)=>{
    let theCar = new Car(addCarTextField.value);
    list.addCar(theCar);
    addCarTextField.value="";
    displayCarListOutput.innerHTML="";
    
    console.log("****",list.theCarList)

    view.render(list.theCarList,displayCarListOutput);
    console.log('Add Car Clicked');
})