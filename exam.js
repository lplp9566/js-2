function Mission1(arr) {
    let newArr = [];
    arr.forEach(element => {
        if (element % 2 == 0) {
            newArr.push(element);
        }
    });
    return newArr
}





function Mission2(string) {
   let  canter =0
   let newString = string.split(" ")
   newString.forEach(element =>{
    if (element.length == 4 ) {
        canter +=1
    }
   })
return canter
    
}


function Mission3(arrToConvert){
    let newArr =[]
    for (let i = 0 ; i< arrToConvert.length; i++){
        newArr = newArr.concat(arrToConvert[i])
    }
    return newArr

}


function Mission4 (arr){
 result = 0 
 for (let i =0 ;i< arr.length; i++){
    if (arr[i] < arr[i+1]){
        result = 1 
    }
    else if (arr[i]> arr [i+1] ){
        result = 2
    }
    else{
        result = 0
    }
 }
 return result
}
module.exports ={
    Mission1,
    Mission2,
    Mission3,
    Mission4
}