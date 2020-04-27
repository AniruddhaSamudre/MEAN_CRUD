const express=require("express");
const EmployeeRoutes= express.Router();
const Employee= require('../Models/employee');

//fetch data from server

EmployeeRoutes.get("/",(req,res)=>{
    Employee.find({})
    .then((emp)=>{
        res.send(emp);
    })
    .catch((err)=>{
        res.send(err);
    })
})

//end of fetch data

//single record with id
EmployeeRoutes.get("/update/:id",(req,res)=>{
    Employee.findById({_id:req.params.id})
    .then((emp)=>{
        res.send(emp);
    })
    .catch((err)=>{
        res.send(err);
    })
})


//insert data

EmployeeRoutes.post("/create",(req,res)=>{
    const employee=new Employee()
    employee.firstname=req.body.firstname;
    employee.lastname=req.body.lastname;
    employee.email=req.body.email;
    employee.address=req.body.address;
    employee.salary=req.body.salary;

    employee.save()
    .then((empdata)=>{
        res.send(empdata)
    })
    .catch((err)=>{

        res.send(err)
    })
})

//end of data insertion

EmployeeRoutes.post("/updateSingle/:id",(req,res)=>{
    const upd=req.body;
    delete upd._id
    Employee.findByIdAndUpdate({_id:req.params.id},upd)
    .then(()=>{
        res.send({"msg":"data updated"})
    })
    .catch((err)=>{
        res.send(err)
    })
})

//delete api requset

    EmployeeRoutes.delete("/delete/:id",(req,res)=>{
        Employee.findByIdAndRemove({_id:req.params.id})
        .then(()=>{
            res.send({"msg":"data deleted successfully"})
        })
        .catch((err)=>{
            res.send({"msg":"data not deleted successfully"})
        })
    })


    module.exports=EmployeeRoutes;