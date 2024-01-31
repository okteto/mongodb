# MongoDB with Docker Compose

This is a sample repo to deploy MongoDB with Docker Compose.

## Deploy MongoDB with the Okteto CLI

Run the following command:

```
> okteto deploy
```

```
 ✓  Kubernetes service 'mongodb' created
 ✓  Volume 'data' created
 ✓  Service 'mongodb' created
 ✓  Compose 'mongodb-with-compose' successfully deployed
 ```

 ## Configure the password

 Set the environment variables `MONGODB_PASSWORD` and `MONGODB_ROOT_PASSWORD` to configure the password of the MongoDB database. You can do this using [Admin Variables](https://www.okteto.com/docs/admin/dashboard/#variables).
