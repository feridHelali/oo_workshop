function Calculator(montant){
    this.montant=montant;
    this.applyDiscount=function(r){
            this.montant = this.montant * (1-r);
            return this;
    };
    this.applyTax=function (t){
        this.montant = this.montant * (1+t);
        return this;
    }

    this.getAmount=function(){
        return this.montant;
    }
}

let c = new Calculator(1000);
let result = c
    .applyDiscount(0.10)
    .applyDiscount(0.2)
    .applyTax(.19)
    .getAmount();
    
console.log(result);