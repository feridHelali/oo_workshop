export class CarListView{
    
    render(carList,anchor){
        console.log(carList)
        const ol=document.createElement('ol');
        ol.className="list-group list-group-flush";
        carList.forEach(car => {
            let li=document.createElement('li');
            li.id=car.id;
            li.innerHTML=`
            <span data-id="${car.id}">${car.id}</span>
            <span>${car.brand}</span>
            `;

            li.className="list-group-item";
            ol.appendChild(li);
          
        });

        anchor.appendChild(ol)

    }
}