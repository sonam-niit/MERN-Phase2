var fs=require('fs');

fs.readFile('test.html','utf-8',function(erer,data){
    debugger;

    if(err) throw err;

    console.log(data);
})