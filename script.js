
const objects = [];


for (let i = 0; i < 500; i++) {
    objects.push({ value: i + 1 }); 
}


const total = objects.reduce((acc, objectCul) => {
    return acc + objectCul.value;
}, 0); 

console.log( total);
