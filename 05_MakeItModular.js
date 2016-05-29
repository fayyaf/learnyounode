var myModule = require('./05_Module.js');
var directory = process.argv[2];
var extension = process.argv[3];

myModule(directory, extension, function(err, files)
{
	if (err)
  	{
  		return console.error("ERROR: ", err);
  	}
  	else
  	{
  		files.forEach(function(file)
  		{
  			console.log(file);
  		});
  	}
});