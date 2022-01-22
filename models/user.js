var users=[];

module.exports = class user{
    constructor(id, email, password, username, status){
        this._id = id;
        this.email = email;
        this.password = password;
        this.username = username;
        this.status = status;
    }

    static getAll(){
        return users;
    }

    static add(user){
        users.push(user);
    }

    static update(objprod){
        const index = users.findIndex(p => p.id==objprod.id); 
        users[index]=objprod;       
    }

    static getuserId(id){
        for (const obj of users) {
            console.log("id="+obj.id);
            if (obj.id == id) {
              return obj;          
            }
          }        
    }

    static delete(id){
        const index = users.findIndex(p => p.id==id); 
        console.log(index);
        users.splice(index, 1);
        console.log(users);
    }
}