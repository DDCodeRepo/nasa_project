const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://nasa-api:batman8DD$$@nasacluster.jttg4.mongodb.net/nasaDB?retryWrites=true&w=majority';

mongoose.connection.on('open', ()=>{ console.log('MongoDB connection ready!') });

mongoose.connection.on('error', (err)=> {
    console.error(err);
});

async function mongoConnect(){
    await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect(){
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect
}