// init.js will be executed when the container and the volume are first created
db.createUser(
  {
    user: process.env.MONGO_INITDB_NONROOT_USERNAME,
    pwd: process.env.MONGO_INITDB_NONROOT_PASSWORD,
    roles: [ { role: "readWrite", db: process.env.MONGO_INITDB_DATABASE } ]
  }
)