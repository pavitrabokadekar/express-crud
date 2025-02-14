//import express module
const express=require('express');
const app=express();
app.use(express.json());//middleware to parse json data

//sample user data
let users=[
    
]

//get all users
 app.get('/users',(req,res)=>{
    res.json(users);//fixed from res.join(users) to res.json(users)
 });

 //post - add a new user
  app.post('/users',(req,res)=>{
    const newUser ={ id:users.length+1,...req.body,
                    name:"name",...req.body,
                    email:"email@gmail.com",...req.body
    };
    users.push(newUser);
    res.status(201).json(newUser);//added response after adding a new users
  });

  //put -upadate a user
  app.put('/users/:id',(req,res)=>{
    const user=users.find(u=>u.id=== parseInt(req.params.id));
    if(!user)return res.status(404).json({message:"user not found"});
    
    user.name=req.body.name||user.name;//fixed incorrect property reference
    user.email=req.body.email||user.email;//fixed incorrect property reference
    res.json(user);//fixed from res.join(user)to res.json(user)
});

//delete - remove a user 
  app.delete('/users/:id',(req,res)=>{
    //const userExits = user.some(user=>user.id==parseInt(req.part))
    //if (!userExitss) return res.status(404).json({message:"user not found"})

    users=users.filter(user=>user.id !==parseInt(req.params.id));
    res.json({message:'user deleted'});
});

   //start the sever
   app.listen(8000,()=>console.log("server is running on port 8000"));

   