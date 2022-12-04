export class CarListView{
    
    render(carList,anchor){
        console.log(carList)
        const ol=document.createElement('ol');
        carList.forEach(car => {
            let li=document.createElement('li');
            li.innerHTML=`<span>${car.id}</span>
            <span>${car.brand}</span>
            `;
            ol.appendChild(li);
        });
        anchor.appendChild=ol
    }
}