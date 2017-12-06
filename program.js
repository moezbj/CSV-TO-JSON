const fs= require ('fs')
const csv =require('fast-csv')


var res=fs.createReadStream('customer-data.csv')
// const solution=fs.createReadStream('Data.json')
  .pipe(csv())
  .on('data',function (data){
  console.log(data)
})
.on('end',function(data){
  console.log('read finished')
});
