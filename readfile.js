var fs = require('fs');
var result;


function read(filename){
fs.readFile(filename,'utf-8',function(error,data){
   	if(error){
   		result = "您的文件不存在";
   	}else{
   		result = data;
   	}

});
	return result;
}

exports.read = read;	