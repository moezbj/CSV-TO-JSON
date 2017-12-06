const fs= require ('fs')
const csv =require('fast-csv')

fs.createReadStream('customer-data.csv')
  .pipe(csv())
  .on('data',function (data){
  console.log(data)
})
.on('end',function(data){
  console.log('read finished')
});
