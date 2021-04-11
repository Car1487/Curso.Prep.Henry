function primo (num){
    var contador;
    for (var i = 1; 1<= num; i++){
        if(num % i === 0){
            contador++
        }
    }
    if (contador=== 2){
        return true;
    }
    else {
        return false;
    }
}
primo (5)
