const MongoDbClient = require("mongodb").MongoClient;
const url = "mongodb+srv://agbsys:Goba720927,nwa@cluster0.xkxm8.mongodb.net/testDatabase?retryWrites=true&w=majority";
var mongoclient;

exports.connect = () =>{
    MongoDbClient.connect(url).then(function(client){
        mongoclient = client;
        console.log("conectado");
    }).catch((err)=>{
        console.log(err);
    })

}

exports.getCollection = (name) => {
    return mongoclient.db("testDatabase").collection(name);
}