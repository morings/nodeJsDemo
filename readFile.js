var fs = require("fs")
fs.readdir(process.cwd(),function(err,files){
	console.log("");
	if(!files.length){
		return console.log("no file")
	}
	console.log("file list");
	function file(i){
		var filename = files[i];
		fs.stat(__dirname+"/"+filename,function(err,stat){
			if(stat.isDirectory()){
				console.log(i+" "+filename);
			}else{
				console.log(i+" "+filename);
			}
			i++;
			if(i==files.length){
				console.log("");
				process.stdout.write("selct you choose");
				process.stdin.resume();
				process.stdin.setEncoding("utf8");
				process.stdin.on("data",function(data){
					var filename = files[Number(data)];
					console.log(filename);
					if(!filename){
						process.stdout.write(" enter your choose")
					}else{
						process.stdin.pause();
						fs.readFile(__dirname+"/"+filename,"utf8",function(err,data){
							console.log("");
							console.log("  "+data.replace(/(.*)/g, '   $1'));
						})
					}
				})
			}else{
				file(i)
		}
		})
	}
	file(0);
})