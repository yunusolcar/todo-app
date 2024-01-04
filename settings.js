const mongoConfig = {
     server: '127.0.0.1',
     mongoPort: '27017',
     dbName: 'todo-db',
     sessionSecret: 'cat_tom',
     port: 3000
}
const connection = `mongodb://${mongoConfig.server}:${mongoConfig.mongoPort}/${mongoConfig.dbName}`;

module.exports = {
     mongoConfig,
     connection
}
