const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const settings = require('./settings');

const mongooseCon = mongoose.connect(settings.connection)
     .then(() => {
          console.log('DB Connected');
     })
     .catch((error) => {
          console.error('DB Connection Error:', error);
     });

const mongoStoreCon = MongoStore.create({
     mongoUrl: settings.connection
})

const mongoConnections = {
     mongoStoreCon,
     mongooseCon
}

module.exports = mongoConnections;