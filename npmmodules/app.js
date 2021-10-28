var debug=require('debug')('http'), 
http=require('http'),
name='MyApp'

debug('booting ',name);

http.createServer(function(req,res){
    debug(req.method+ ' '+req.url);
    res.end("Hello Wolrd")
}).listen(3000,function(){
    debug("started listinig")
})

require('./worker')