const express = require("express");
var CryptoJS = require("crypto-js");

const server = express();
const productRoutes = require("./routes/products");
const userRoutes = require("./routes/user");
const apiProductRoutes = require("./routes/api_products");

const bodyParser = require("body-parser");
const MongoDbConfig = require("./config/mongodb");
MongoDbConfig.connect();

var pubkey = "b792c78e7049253f1c0827545528bd28";
var pvtkey = "77a58bc440375371a8e5d1ea3d5a64b126c977bf";
var ts = new Date().getTime();

//pm.environment.set("ts", ts)
//pm.environment.set("apikey", pubkey)

console.log(ts.toString());
var message = ts+pvtkey+pubkey;
var a = CryptoJS.MD5(message);
//pm.environment.set("hash", a.toString())
console.log(a.toString());

server.set("view engine","pug");
server.set("views", "views");

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));

server.get("/", (req, res) =>{
	res.render('index', { error: false });
});

server.use('/users', userRoutes);
server.use('/products', productRoutes);
server.use('/api/product', apiProductRoutes);



server.use(bodyParser.urlencoded({ extended: true }));

server.listen(3100, ()=> {
	console.log("Express esta escuchando");
});
