var arr = [10,20,30];
console.log(arr);
console.log("array lenngth -->>",arr.length);

//push the element
arr.push(40);

console.log(arr);

//pop the element
arr.pop(40);

console.log(arr);

var student =  {
    name:"ravi",
    class:7,
    all_rounder:true,
    arr:["fuck",10]
}
console.log(student);

console.log(student.name);

student.age=20;

student.all_rounder=false;

console.log(student.arr[1]);


var list =[
    {
        name:"rin",
        roll_no:1
    },
    {
        name:"shin",
        roll_no:2
    }
];

console.log(list);

console.log(list[0]);

console.log(list[0].name);

console.log(list[1].roll_no);


var animal = ["cat","dog","bat"];
animal.forEach(function(i){
    console.log(i);
})

function loop(i){
    console.log(i);
}
animal.forEach(loop);