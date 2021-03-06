//require http so we can run in the browser
var http = require('http');

//reuire url library to parse a querystring value
var url = require('url');

//start the server
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text-plain'});
    res.write('<h1>Simple Calculator</h1>');
    
    //get the subtotal from the url querysting
    var qs = url.parse(req.url,true).query;
    
    var x = parseFloat(qs.x);
    var y = parseFloat(qs.y);
    var method = qs.method;
    
    //find out the which method to apply.. use if..elseif..else
    if( method == 'add')
    {
        res.write('Output: ' + x + ' + ' + y + ' = ' + (x+y));
    }
    else if(method == 'subtract')
    {
        res.write('Output: ' + x + ' - ' + y + ' = ' + (x-y));
    }
    else if(method == 'multiply')
    {
        res.write('Output: ' + x + ' * ' + y + ' = ' + (x*y));
    }
    else if(method == 'divide')
    {
        if(y!=0)
            res.write('Output: ' + x + ' / ' + y + ' = ' + (x/y));
        else
            res.write('Cannot devide by 0 (Zero) !! It is Infinity Value!! ');
    }
    else
    {
        res.write('Invalid Operation !!!!! ;-)');
    }
    res.end();
}).listen(3000);