var products=[];

module.exports = class Product{
    constructor(id, name, detail, price){
        this._id = id;
        this.name = name;
        this.detail = detail;
        this.price = price;
    }

    static getAll(){
        return products;
    }

    static add(product){
        products.push(product);
    }

    static update(objprod){
        const index = products.findIndex(p => p.id==objprod.id); 
        products[index]=objprod;       
    }

    static getProductId(id){
        for (const obj of products) {
            console.log("id="+obj.id);
            if (obj.id == id) {
              return obj;          
            }
          }        
    }

    static delete(id){
        const index = products.findIndex(p => p.id==id); 
        console.log(index);
        products.splice(index, 1);
        console.log(products);
    }
}