const db = require("../config/mongodb");


const {
    ObjectId
  } = require('mongodb');
  
exports.add = (product, callback) => {
    const collection = db.getCollection("Products");    
    collection.insertOne({name:product.name,
        detail: product.detail, price: product.price}).then(
            () => {
                callback();
            }
        )
}

exports.listall = () => {
    const collection = db.getCollection("Products");    
    //collection.find().toArray(function(err, results) {
    //    return results;
    //});
    const query = { };
    const projection = {};

    return collection.find(query, projection)
    .sort({ name: 1 })
    .toArray()
    .then(items => {
        //console.log(`Successfully found ${items.length} documents.`)
        //items.forEach(console.log)
        return items
    })
    .catch(err => console.error(`Failed to find documents: ${err}`));
}

exports.findByIdUpdate = (product) => {
    const collection = db.getCollection("Products");  
    const query = {
        '_id': new ObjectId(product._id)
      };    
    const update = {
        $set: {name: product.name, detail: product.detail, price: product.price}
    };
    const options = { "upsert": false };
    return collection.findOneAndUpdate(query,update,options)
        .then(result => {
        const { matchedCount, modifiedCount } = result;
        if(matchedCount && modifiedCount) {
          console.log(`Successfully added a new review.`)
        }
      }).catch(err => console.error(`Failed to add review: ${err}`));

}

exports.findById = (id) => {
    const query = {
        '_id': new ObjectId(id)
      };    
    const projection = "{}";
    const collection = db.getCollection("Products"); 
    return collection.findOne(query, projection)
    .then(item => {
        return item
    })
    .catch(err => console.error(`Failed to find documents: ${err}`));
}

exports.findByIdDelete = (id) => {

    const query = {
        '_id': new ObjectId(id)
      };    
    console.log(query);
    const projection = "{}";
    const collection = db.getCollection("Products"); 
    return collection.findOneAndDelete(query, projection)
    .then(item => {
        console.log(item);
        return item
    })
    .catch(err => console.error(`Failed to find documents: ${err}`));
}