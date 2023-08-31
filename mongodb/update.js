const dbConnect = require("./mongo_db");
const updateData= async () => {
  const db = await dbConnect();
  const result = await db.updateOne({
    owner:"sila"},{
        $set:{name:"sila didi"}
    })
    console.log(result)
};
updateData();
