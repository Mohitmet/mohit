// import mongoose from "mongoose";

// const connectDB = async () => {
//     try {
//         await mongoose.connect("mongodb://localhost:27017/harrykart", {
//         });
//         console.log("Connected to MongoDB");
//     } catch (error) {
//         console.error("Connection to MongoDB failed:", error);
//     }
// };

// const kittySchema = new mongoose.Schema({
//     name: String
// });

// kittySchema.methods.speak = function () {
//     const greeting = "My name is " + this.name;
//     console.log(greeting);
// };

// const Kitten = mongoose.model('harrykitty', kittySchema);

// const saveKitten = async () => {
//     await connectDB();
//     const harrykitty = new Kitten({ name: 'harrykitty' });
//     await harrykitty.save();
//     harrykitty.speak();
// };

// const findKittens = async () => {
//     await connectDB();
//     const kittens = await Kitten.find();
//     console.log(kittens);
// };

// const findHarryKitty = async () => {
//     await connectDB();
//     const harryKitties = await Kitten.find({ name: "harrykitty" });
//     console.log(harryKitties);
// };
// saveKitten();
// findKittens();
// findHarryKitty();


// export default connectDB();
// // const express=require("express");
// // const path=require("path");
// // const fs=require("fs");
// // const app=express();
// // import mongoose from "mongoose";
// import express from "express";
// import path from "path";
// import fs from "fs";
// const app=express();
// import bodyparser from "body-parser";
// import mongoose from "mongoose";

// const connectDB = async () => {
//     try {
//         await mongoose.connect("mongodb://localhost:27017/contactdance", {
//         });
//         console.log("Connected to MongoDB");
//     } catch (error) {
//         console.error("Connection to MongoDB failed:", error);
//     }
// };
// const port=80;

// const contactSchema = new mongoose.Schema({
//     name: String,
//     phone: String,
//     email:String,
//     address:String,
//     desc:String
// });

// const contact = mongoose.model('contact', contactSchema);

// app.use('/static',express.static('static'));// for serving static files
// app.use(express.urlencoded());

// // pug specific stuff
// app.set('view engine', 'pug');
// app.set('views',path.join("__dirname:",'views'));

// app.get('/',(req,res)=>{
//     const params={ }
//     res.status(200).render('home.pug',params);
// })

// app.get('/contact',(req,res)=>{
//     const params={ }
//     res.status(200).render('contact.pug',params);
// })

// app.post('/contact',(req,res)=>{
//     const params={ }
//     res.status(200).render('contact.pug',params);
// })

// app.listen(port,()=>{
//     console.log(`the application started succesfully on port ${port}`)
// });
// import express from "express";
// import path from "path";
// import fs from "fs";
// const app=express();
// import bodyparser from "body-parser";
// import mongoose from "mongoose";

// const connectDB = async () => {
//     try {
//         await mongoose.connect("mongodb://localhost:27017/contactdance", {
//         });
//         console.log("Connected to MongoDB");
//     } catch (error) {
//         console.error("Connection to MongoDB failed:", error);
//     }
// };
// const port=80;

// const contactSchema = new mongoose.Schema({
//     name: String,
//     phone: String,
//     email:String,
//     address:String,
//     desc:String
// });

// const contact = mongoose.model('contact', contactSchema);

// app.use('/static',express.static('static'));// for serving static files
// app.use(express.urlencoded());

// // pug specific stuff
// app.set('view engine', 'pug');
// app.set('views',path.join('__dirname','views'));

// app.get('/',(req,res)=>{
//     const params={ }
//     res.status(200).render('home.pug',params);
// })

// app.get('/contact',(req,res)=>{
//     const params={ }
//     res.status(200).render('contact.pug',params);
// })

// app.post('/contact',(req,res)=>{
//     const mydata=new contact(req.body);
//     mydata.save().then(()=>{
//         res.send("this item has been saved to the database")
//     }).catch(()=>{
//         res.status(400).send("item was not saved to the database")
//     })
//     // res.status(200).render('contact.pug');
// })

// app.listen(port,()=>{
//     console.log(`the application started succesfully on port ${port}`)
// });