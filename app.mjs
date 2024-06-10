import express from "express";
import path from "path";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { fileURLToPath } from "url";

// // Get __dirname equivalent in ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app=express();
const port = 80;

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/contactdance", {
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Connection to MongoDB failed:", error);
    }
};
connectDB();

const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email:String,
    address:String,
    desc:String
});

const contact = mongoose.model('contact', contactSchema);

app.use('/static',express.static('static'));// for serving static files
app.use(express.urlencoded());

// pug specific stuff
app.set('view engine', 'pug');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    const params={ }
    res.status(200).render('home.pug',params);
})

app.get('/contact',(req,res)=>{
    const params={ }
    res.status(200).render('contact.pug',params);
})

app.post('/contact',(req,res)=>{
    const mydata=new contact(req.body);
    mydata.save().then(()=>{
        res.send("this item has been saved to the database")
    }).catch(()=>{
        res.status(400).send("item was not saved to the database")
    })
    // res.status(200).render('contact.pug');
})

app.listen(port,()=>{
    console.log(`the application started succesfully on port ${port}`)
});