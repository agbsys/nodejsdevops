const dbRepo = require("../repositories/user");

exports.getUsers = (req, res) => {
 
    dbRepo.listall().then(items => {
        res.send(items);
    });    
}

exports.findUser = (req, res)=>{
    var user_id = req.params['_id'];
    dbRepo.findById(user_id).then(
        item => {
            res.send(item);
        }
    );
    
}

exports.addUser = (req, res)=>{
    const User = new User(req.body._id, req.body.email, req.body.password, req.body.username, req.body.status);
    dbRepo.add(User, ()=>{
        dbRepo.listall().then(items => {
            res.send(User);
        });  
    });    
}

exports.updateUser = (req, res)=>{
    const User = new User(req.body._id, req.body.email, req.body.password, req.body.username, req.body.status);
    dbRepo.findByIdUpdate(User).then(items => {
        dbRepo.listall().then(items => {
            res.send(items);
        }); 
    });      
}

exports.deleteUser = (req, res)=>{   
    var user_id = req.params['_id'];  
    dbRepo.findByIdDelete(user_id).then(items =>{
        dbRepo.listall().then(items => {
            res.status(200).send(items);
        }); 
    })
}