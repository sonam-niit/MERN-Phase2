var a=require('debug')('worker:a'),
b =require('debug')('worker:b')

function work(){
    a('extra work');

    setTimeout(work,Math.random()*1000)
}

work();

function workb(){
    b("another work");
    setTimeout(work,Math.random()*1000)
}

workb()