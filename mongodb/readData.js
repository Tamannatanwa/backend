const dbConnect = require('./mongo_db')


const main = async ()=>{
  let data = await dbConnect();
  data = await data.find().toArray();
  console.warn(data)
}

main();
// dbConnect().then((resp)=>{
//   resp.find({name:"Lalu bhai india se"}).toArray().then((data)=>{
//     console.warn(data)
//   })
// })
