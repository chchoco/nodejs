var testFolder='./data';
var fs= require('fs');
//파일의 리스트를 가져오기 data에 있는 파일의 리스트를 가져온다.
fs.readdir(testFolder, function(error,filelist){
  console.log(filelist);
})
