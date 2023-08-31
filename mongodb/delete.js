const dbConnect = require("./mongo_db");
const deleteData= async () => {
  const db = await dbConnect();
  let data = await db.deleteMany({name:"raghu bhaiya"})
  console.log(data);
};
deleteData();
