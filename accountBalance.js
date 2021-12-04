function accountBalance(data) {

    let CountRequired = Number(data.shift());
    
    let Count = 0;
    
    let balance = 0;
    
    while (Count < CountRequired) {
    
        let amount = Number(data.shift());
    
        if (amount < 0) {
            console.log('Invalid operation!');
            break;    
        }
    
        balance += amount;
    
        console.log(`Increase: ${amount.toFixed(2)}`);
    
        Count++;
    
    }
    
    console.log(`Total: ${balance.toFixed(2)}`);
    
}



accountBalance([4, 5.51, 69.42, 205, 280.40])
accountBalance([6, 180, 45.55, -150])