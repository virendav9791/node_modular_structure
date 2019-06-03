const http = require('http');
const app = require('./config/app');
let server = http.createServer(app);
app.set('port', 3000);

server.listen(3000, () => {
    console.log("server listen on 3000")
})

