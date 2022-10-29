
# To-Do App-backend


it is a to do app containing all CRUD operation and a request
to get to do list in pagination form and made using node,express,mongoose,mongodb



## Installation

Install todo app with yarn

```bash
  cd <project-directory>
  yarn install 
  yarn start
```

    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file by renaming .env.dev to .env

`MONGODB_URI=mongodb://localhost:27017/to-do`

or

`MONGODB_URI:<your own mongodb url>`

port

`PORT=3000`




## API Reference

#### Get all todos

```http
  GET /api/v1/todos
```


#### Create todo

```http
  POST /api/v1/todos
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `body` | `string` | **Required**. body of the todo|
| `tagline` | `string` |**Optional** give any tagline|

#### Get todo

```http
  GET /api/v1/todo/${id}
```



#### Delete todo
```http
  DELETE /api/v1/todo/${id}
```

#### Update todo
```http
  PUT /api/v1/todo/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `body` | `string` |  body of the todo|
| `tagline` | `string` | give any tagline|
| `isPinned` | `boolean` |set it true if you what to be at top of list|




