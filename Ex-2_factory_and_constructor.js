;
// factory function
function createAdress(street,city,pincode){
    return {
        street,
        city,
        pincode
    };
}
const address=createAdress('madivala','Bangalore',560068)
console.log(address);

// constructor function
function CreateAdress(street,city,pincode){
    this.street=street,
    this.city=city,
    this.pincode=pincode
}
const Adress=new CreateAdress('madivala','Bangalore',560068);
console.log(Adress);
