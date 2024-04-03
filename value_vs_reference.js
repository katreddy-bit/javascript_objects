let x=10;
let y=x;
// x=x+1;
// console.log(x);
// console.log(y);
// function inc(x){
//     x++;
//     console.log(x,'inner function')
// }
// inc(x);
// console.log(x)

const obj={value:10};
// obj.value=20;
// console.log(obj.value)
function inc(obj){
    obj.value++;
    console.log(obj,'inner function');

}
inc(obj);
console.log(obj);