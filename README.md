# MongoDB with Docker Compose

This is a modernized MongoDB deployment using the official MongoDB Docker image with Docker Compose on Okteto.

## Features

- **Official MongoDB 7.0.14** - Updated from Bitnami-compatible image to official MongoDB image
- **Health Checks** - Integrated health monitoring for better reliability
- **Security Improvements** - Updated to latest stable version with security patches
- **Standard Volume Paths** - Using official MongoDB data directory `/data/db`

## Deploy MongoDB with the Okteto CLI

Run the following command:

```
> okteto deploy --wait
```

Expected output:
```
 ✓  Kubernetes service 'mongodb' created
 ✓  Volume 'data' created
 ✓  Service 'mongodb' created
 ✓  Compose 'mongodb-with-compose' successfully deployed
 ```

## Configuration

### Environment Variables

Set the following environment variables to configure the MongoDB database:

- `MONGODB_ROOT_PASSWORD` - Root password for MongoDB (default: password)

You can configure these using [Admin Variables](https://www.okteto.com/docs/admin/dashboard/#variables).

### Database Access

The MongoDB instance is configured with:
- **Root Username**: `root`
- **Default Database**: `okteto`
- **Non-Root Username**: `okteto`
- **Default Database**: `okteto`
- **Port**: `27017`

### Health Monitoring

The deployment includes health checks using `mongosh` to ensure the database is responsive.
