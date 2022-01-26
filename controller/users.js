
const dbRepo = require("../repositories/User");

exports.getUsers = (req, res) => {
    // return only json
    // res.status(200).send(User.getAll()); 
    //User.add(new User(1, "nuevo", "Equipamieto", 10000.00)); 
    //User = User.getAll();
    //console.log(User.getAll());
    dbRepo.listall().then(items => {
        console.log(items.length);
        if(items.length>0){
            res.status(200).render("list-Users", {Users: items});
        }else{
            res.status(200).render("list-users",{ Users: []})
        }
        
    });    
}

exports.getAddForm = (req, res)=>{
    res.render('add-User');
}

exports.getUpdateForm = (req, res)=>{
    var prod_id = req.params['_id'];
    dbRepo.findById(prod_id).then(
        item => {
            res.render('update-User', {User: item});
        }
    );
    
}

exports.addUser = (req, res)=>{
    const User = new User(req.body._id, req.body.name, req.body.detail, req.body.price);
    dbRepo.add(User, ()=>{
        dbRepo.listall().then(items => {
            res.render("list-Users", {Users: items});
        });  
    });    
}

exports.updateUser = (req, res)=>{
    const User = new User(req.body._id, req.body.name, req.body.detail, req.body.price);
    dbRepo.findByIdUpdate(User).then(items => {
        dbRepo.listall().then(items => {
            res.render("list-Users", {Users: items});
        }); 
    });  
    
    //var UserToUpdate = User.getAll().find(p=> p.id==req.body._id);
    //UserToUpdate.name = req.body.name;
    //UserToUpdate.detail = req.body.detail;
    //UserToUpdate.price = req.body.price;
    //User.update(UserToUpdate);
    //res.render('list-Users', {Users: User.getAll()});
}

exports.deleteUser = (req, res)=>{   
    var prod_id = req.params['_id'];  
    dbRepo.findByIdDelete(prod_id).then(items =>{
        dbRepo.listall().then(items => {
            res.render("list-Users", {Users: items});
        }); 
    })
    //User.delete(prod_id);
    //res.render('list-Users', {Users: User.getAll()});
}