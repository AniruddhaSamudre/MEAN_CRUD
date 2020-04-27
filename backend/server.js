const express=require('express');
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const cors=require("cors");
const app=express();

require('./mongo');

const Employee=require('./Models/employee');
const EmployeeRoutes=require('./Routes/employee-routes');

//creation of middleware
app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use("/employee",EmployeeRoutes);

//middleware end

port=3000;
app.listen(port,console.log(`server running on port 3000`));