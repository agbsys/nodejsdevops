const Product = require("../models/Product");
const dbRepo = require("../repositories/Product");

exports.getProducts = (req, res) => {
 
    dbRepo.listall().then(items => {
        res.send(items);
    });    
}

exports.findProduct = (req, res)=>{
    var Product_id = req.params['_id'];
    dbRepo.findById(Product_id).then(
        item => {
            res.send(item);
        }
    );
    
}

exports.addProduct = (req, res)=>{
    const Product = new Product(req.body._id, req.body.name, req.body.detail, req.body.price);
    dbRepo.add(Product, ()=>{
        dbRepo.listall().then(items => {
            res.status(200).send(Product);
        });  
    });    
}

exports.updateProduct = (req, res)=>{
    const Product = new Product(req.body._id, req.body.name, req.body.detail, req.body.price);
    dbRepo.findByIdUpdate(Product).then(items => {
        dbRepo.listall().then(items => {
            res.send(items);
        }); 
    });      
}

exports.deleteProduct = (req, res)=>{   
    var Product_id = req.params['_id'];  
    dbRepo.findByIdDelete(Product_id).then(items =>{
        dbRepo.listall().then(items => {
            res.send(items);
        }); 
    })
}