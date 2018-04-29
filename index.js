var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    var q = url.parse(req.url, true).query;
   // var txt = q.para1 + " " + q.para2;
res.write('<html><div>This is for writing json file using nodejs  </div></html>')
	fs.readFile('para.json', 'utf8', function readFileCallback(err, data){
	    if (err){
		console.log(err);
	    } else {
	   // obj = JSON.parse(data); //now it an object
console.log(err);
		
	}});
var obj = {
		   table: []
		};
		obj.table.push({id: 1, para:q.para1});
		obj.table.push({id: 2, para:q.para2});
		obj.table.push({id: 3, para:q.para3});
		obj.table.push({id: 4, para:q.para4});
		obj.table.push({id: 5, para:q.para5});
	    json = JSON.stringify(obj); //convert it back to json
fs.writeFile('para.json', json, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }
 console.log("The file was saved!");
}); // write it back 
   // res.end(uc(txt));
    res.end();
}).listen(8080);
