const address={
    street:'Madivala',
    city:'Bangalore',
    pincode:560068
};
function showAdress(address){
    for (let key in address){
        console.log(key,address[key]);
    }
}
showAdress(address);