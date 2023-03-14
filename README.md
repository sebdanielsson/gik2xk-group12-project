# gik2xk-group12-project

## Usage

### Start the database

```sh
docker run -d --name gik2xk_store_db -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=store -p 5432:5432 -v gik2xk_store_db:/var/lib/postgresql/data postgres
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
