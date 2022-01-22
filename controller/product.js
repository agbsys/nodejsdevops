const Product = require("../models/product");
const dbRepo = require("../repositories/product");

exports.getProducts = (req, res) => {
    // return only json
    // res.status(200).send(Product.getAll()); 
    //Product.add(new Product(1, "nuevo", "Equipamieto", 10000.00)); 
    //Product = Product.getAll();
    //console.log(Product.getAll());
    dbRepo.listall().then(items => {
        res.render("list-products", {products: items});
    });    
}

exports.getAddForm = (req, res)=>{
    res.render('add-product');
}

exports.getUpdateForm = (req, res)=>{
    var prod_id = req.params['_id'];
    dbRepo.findById(prod_id).then(
        item => {
            res.render('update-product', {product: item});
        }
    );
    
}

exports.addProduct = (req, res)=>{
    const product = new Product(req.body._id, req.body.name, req.body.detail, req.body.price);
    dbRepo.add(product, ()=>{
        dbRepo.listall().then(items => {
            res.render("list-products", {products: items});
        });  
    });    
}

exports.updateProduct = (req, res)=>{
    const product = new Product(req.body._id, req.body.name, req.body.detail, req.body.price);
    dbRepo.findByIdUpdate(product).then(items => {
        dbRepo.listall().then(items => {
            res.render("list-products", {products: items});
        }); 
    });  
    
    //var productToUpdate = Product.getAll().find(p=> p.id==req.body._id);
    //productToUpdate.name = req.body.name;
    //productToUpdate.detail = req.body.detail;
    //productToUpdate.price = req.body.price;
    //Product.update(productToUpdate);
    //res.render('list-products', {products: Product.getAll()});
}

exports.deleteProduct = (req, res)=>{   
    var prod_id = req.params['_id'];  
    dbRepo.findByIdDelete(prod_id).then(items =>{
        dbRepo.listall().then(items => {
            res.render("list-products", {products: items});
        }); 
    })
    //Product.delete(prod_id);
    //res.render('list-products', {products: Product.getAll()});
}