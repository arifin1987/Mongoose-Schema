const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/my-students')

.then(()=> console.log("connected mongodb successfully"))

.catch(err=> console.log("connection failed"));


const studentSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName:String,
    dob: Date,
    entryDate: {type:Date, default:Date.now},
    passed: Boolean,
    hobbies:[String],
    parents:{
        father: String,
        mother:String
    },
    subjects: [{name:String, marks:{type: Number, min:0, max:100}}]
});


const Student = mongoose.model('Student',studentSchema) //Class

const student = new Student({
    firstName:"Rahim",
    lastName:"Khan",
    dob: new Date("30 December 1987"),
    passed: true,
    hobbies:["Swiming", "Fishing"],
    parents:{
        father: "A",
        mother:"B"
    },
    subjects:[{name: "Math", marks: 80}, {name:"English", marks:90}]
});

student.save()
.then(data=> console.log(data))
.catch(err=>console.log(err) )

