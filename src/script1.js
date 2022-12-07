exports={}


let m1=function(){
    this.feature1 = function(){
        console.log("feature 1 from module 1 is running")
    }
    this.feature2 = function(){
        console.log("feature 2 from module 1 is running")
    }

    return {
        feature1:feature1,
        feature2:feature2
    }
}

exports.m1=m1;