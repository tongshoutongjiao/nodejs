//  扩展运算符的使用

let a=[1,2,3,4];
function foo(...rest){
    console.log(rest);
    let [a,b,c,d]=rest;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

foo(...a);