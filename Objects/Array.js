// In-built properties of arrays: push() and pop()

var fruits = [];
fruits.push("apple");
fruits.push("pear");
console.log(fruits);

fruits.pop();
console.log(fruits);


function TransformArray(one, two, three){
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}

var newarr = TransformArray("apple","pear","mango");
console.log(newarr);