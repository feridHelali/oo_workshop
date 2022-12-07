

let m2=function(){
    this.feature1 = function(){
        console.log("feature 1 from module 2 is running")
    }
    this.feature2 = function(){
        console.log("feature 2 from module 2 is running")
    }

    return {
        feature1:feature1,
        feature2:feature2
    }
}

exports.m2=m2;

console.log(exports)

m1.feature1()
m1.feature2()
m2.feature1()
m2.feature2()