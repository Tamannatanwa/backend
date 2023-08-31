const {MongoClient} = require('mongodb')
// const url= 'mongodb://127.0.0.1:27017';
const url= 'mongodb://0.0.0.0:27017';
const databaseName='kaju'
const client= new MongoClient(url);

async function dbConnect()
{
    let result = await client.connect();
    db= result.db(databaseName);
    return db.collection('videos');
    // let data = await collection.find({name:"Lalu"}).toArray();
    // console.log(data)
}
module.exports = dbConnect;




// const {MongoClient} = require('mongodb')
// // const url= 'mongodb://127.0.0.1:27017';
// const url= 'mongodb://0.0.0.0:27017';
// const databaseName='kaju'
// const client= new MongoClient(url);

// async function getData()
// {
//     let result = await client.connect();
//     db= result.db(databaseName);
//     collection = db.collection('videos');
//     let data = await collection.find({name:"Lalu"}).toArray();
//     console.log(data)


// }
// getData();








// const {MongoClient} = require('mongodb')
// // const url= 'mongodb://127.0.0.1:27017';
// const url= 'mongodb://0.0.0.0:27017';
// const databaseName='kaju'
// const client= new MongoClient(url);

// async function getData()
// {
//     let result = await client.connect();
//     db= result.db(databaseName);
//     collection = db.collection('videos');
//     let data = await collection.find({}).toArray();
//     console.log(data)


// }
// getData();