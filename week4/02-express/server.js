import express from "express"

const app = express();

app.listen(8080, function(){
    console.log("Server is listening posrt 8080... (ง •̀_•́)ง");
});

app.get('/', function(request, response){
    response.send(`you are looking at my root now`)
})

app.get('/api/upgrades', function (request,response) {
    // I will specify the server is sending back JSON.
    response.status(206).json([{name: 'Sam'}, {name: 'Connor'}, {name: 'Tim'}, {name: 'Jez'}])
})

app.get('/api/upgrades', function (request,response) {
    // I will specify the server is sending back JSON.
    response.send.json([{name: 'Sam'}, {name: 'Connor'}, {name: 'Tim'}, {name: 'Jez'}])
})

app.get("/messages", function(request, response){
    response.json({message: "Hello, World!"});
});

app.use(express.json());

app.post("/messages", function (request, response) {
  response.json({ message: "Hello, All!" });
});