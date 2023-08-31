const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/kaju");
const VideoSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});
const saveInDB = async () => {
  const Video = mongoose.model("videos", VideoSchema);
  let data = new Video({
    name: "krish",
    price: 1000,
    brand: "xyz",
    category: "krash",
  });
  const result = await data.save();
  console.log(result);
};

const updateInDB = async () => {
  const Video = mongoose.model("videos", VideoSchema);
  let data = await Video.updateOne(
    {
      name: "sila babhi",
    },
    {
      $set: { price: 3402 },
    }
  );
  console.log(data);
};

const deleteInDB = async () => {
  const Video = mongoose.model("videos", VideoSchema);
  let data = await Video.deleteOne({ name: "sila babhi" });
  console.log(data);
};
const findInDB = async () => {
  const Video = mongoose.model("videos", VideoSchema);
  let data = await Video.find({ name: "kaju best fun" });
  console.log(data);
};

findInDB();












// const main = async () => {
//   const Video = mongoose.model("videos", VideoSchema);
//   let data = new Video({
//     name: "krish",
//     price: 1000,
//     brand: "xyz",
//     category: "krash",
//   });
//   const result = await data.save();
//   console.log(result);
// };
// main();
