const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const settings = require('./settings');

const mongooseCon = mongoose.connect(`mongodb://${settings.mongoServer}:${settings.mongoPort}/${settings.mongoDbName}`)
     .then(() => {
          console.log('DB Connected')
     });

const mongoStoreCon = MongoStore.create({
     mongoUrl: `mongodb://${settings.mongoServer}:${settings.mongoPort}/${settings.mongoDbName}`
})

module.exports = {
     mongoStoreCon,
     mongooseCon
};