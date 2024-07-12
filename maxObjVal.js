// Create an array of objects and print the object with the highest value.
const objects = [
    { Fname: 'Abu Bakar', Lname : 'Saddique', value: 10 },
    { Fname: 'Ali', Lname : 'Raza', value: 15 },
    { Fname: 'Usman', Lname : 'Umer', value: 5 }
    ];

const maxObj = objects.reduce((max,obj)=>{
    return obj.value > max.value ? obj : max;
},objects[0]);

console.log(maxObj);