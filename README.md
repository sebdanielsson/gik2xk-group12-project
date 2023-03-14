# gik2xk-group12-project

## Usage

### Start the database

```sh
docker run -d --name store_db -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=store_development -p 5432:5432 -v store_db:/var/lib/postgresql/data postgres
```

### Start backend

```sh
cd backend
npm run start
```

### Start frontend

```sh
cd frontend
npm run start
```

### Live

**Backend:** <http://localhost:5500>  
**Frontend:** <http://localhost:3000>
