



function square(number){
    var value = 1;
    
    console.log(this.value);
    //console.log(this);

    return number*number;
}

square(2);
//console.log(this === window);