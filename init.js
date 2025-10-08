// init.js will be executed when the container and the volume are first created
db.createUser(
  {
    user: process.env.MONGODB_USERNAME,
    pwd: process.env.MONGODB_PASSWORD,
    roles: [ { role: "readWrite", db: process.env.MONGO_INITDB_DATABASE } ]
  }
)