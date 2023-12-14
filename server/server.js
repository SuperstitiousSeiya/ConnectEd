const bodyParser = require("body-parser");
var cors = require("cors");
const express =  require('express');
const employeeRoutes = require('./src/routes/employee.routes');
const app = express();
app.search(cors());

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json());


app.use('/api/v1/employees', employeeRoutes);
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})