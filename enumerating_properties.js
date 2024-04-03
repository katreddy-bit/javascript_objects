const circle={
    radius:1,
    draw(){
        console.log('drawing a circle');
    }

};
for (let key in circle){
    console.log(key,circle[key]);
}
for (let key of Object.keys(circle)){
    console.log(circle[key]);
}
for (let entry of Object.entries(circle)){
    console.log(entry);
}
if ('radius' in circle) console.log('YES');
if ('circle' in circle) console.log('YES');