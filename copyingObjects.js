const circle ={
    radius:1,
    draw(){
        console.log('Drawing a circle');
    }
};
const another={...circle};
// const another=Object.assign({},circle);
console.log(another);
another.draw();