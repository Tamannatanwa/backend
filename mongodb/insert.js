const dbConnect = require("./mongo_db");
const insert = async () => {
  const db = await dbConnect();
  const result = await db.insertMany(
    [{
        name: "raghu bhaiya",
        owner: "raghav",
        price: 202,
        brand: "chapri",
      },
      {
        name: "sila babhi",
        owner: "sila",
        price: 212,
        brand: "babhi ka jayka",
      }]
  )
  if (result.acknowledged){
    console.log("data inserted")
  }
};
insert();
