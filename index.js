const jsonServer = require("json-server"); 
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; 

server.use(middlewares);
server.use(router);

server.listen(port, () => {
    console.log('JSON Server is running' + port)
  })

//   * run json - $ json-server --watch db.json --port 8080