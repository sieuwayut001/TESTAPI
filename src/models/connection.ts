import mongoose from 'mongoose';
// const dbConnectionUrl = process.env.MONGO_DB_URL || '';
const dbConnectionUrl = mongoose.connect(process.env.MONGO_DB_URL!)
        .then(data=>{
            console.log('Connection success');
        })
        .catch(err=>{
            console.log('Connection error'+err);
        })
    
export default dbConnectionUrl;


// , {useNewUrlParser: true, useUnifiedTopology: true}