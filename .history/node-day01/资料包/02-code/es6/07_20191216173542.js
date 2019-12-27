//  扩展运算符的使用

let a=[1,2,3,4];
function foo(...rest){
    console.log(rest);
}

foo(...a);