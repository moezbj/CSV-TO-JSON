
const file='./customer-data.csv'
const csv =require('csvtojson')
const fs =require('fs')
const path=require('path')
var result=[]
csv()
.fromFile(file)
.on('end_parsed',(jsonObj)=>{
  fs.writeFileSync(path.join(__dirname,'newfile.json'),JSON.stringify(jsonObj))
})
.on('done',(error)=>{
  console.log('end')
})
