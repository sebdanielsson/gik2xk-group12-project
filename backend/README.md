# Create config.json

Create a file called `config.json` in the `backend/config` directory. This file will contain the configuration for the backend database. The file should look like this:

```json
{
    "development": {
        "username": "postgres",
        "password": "postgres",
        "database": "database_dev",
        "host": "127.0.0.1",
        "dialect": "postgres",
        "logging": false
    },
    "test": {
        "username": "root",
        "password": "postgres",
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "postgres"
    },
    "production": {
        "username": "postgres",
        "password": "postgres",
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "postgres"
    }
}
```
