function CreateAdress(street,city,pincode){
    this.street=street,
    this.city=city,
    this.pincode=pincode
}
const Adress1=new CreateAdress('madivala','Bangalore',560068);
const Adress2=new CreateAdress('madivala','Bangalore',560068);
const Adress3=Adress1;

console.log(areEqual(Adress1,Adress2));
console.log(areSame(Adress1,Adress2));
console.log(areSame(Adress1,Adress3));


function areEqual(Adress1,Adress2){
    return Adress1.street===Adress2.street && Adress1.city===Adress2.city&&Adress1.pincode===Adress2.pincode
}
function areSame(Adress1,Adress2){
    return Adress1=== Adress2
}