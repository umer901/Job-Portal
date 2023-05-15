const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./db/connection');
const User = require('./model/userSchema');
const Employee = require('./model/employee');
const Employer = require('./model/employer');
const Jobs = require('./model/postJob');
const jobApplicationsRouter = require('./router/jobApplication');
const postJobRouter = require('./router/postJob');
const profileRouter = require('./router/emp_profile');
const profileRouter2 = require('./router/employerprofile');
const employeesearch = require('./router/employee_search');
const searchjobs = require('./router/searchjobs');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());

app.use(require('./router/auth'));

app.use(require('./router/jobApplication', jobApplicationsRouter));
app.use(postJobRouter);

app.use(require('./router/emp_profile', Employee));
app.use(profileRouter);

app.use(require('./router/employerprofile', Employer));
app.use(profileRouter2);

app.use(require('./router/employee_search', Employee));
app.use(employeesearch);

app.use(require('./router/searchjobs', Jobs));
app.use(searchjobs);
// const employeeSchema = new mongoose.Schema({
//     name: String
//     });
// const Employee = mongoose.model('Employee', employeeSchema);

// server.post('/demo',async (req,res)=>{
//     let employee = new Employee
//     employee.name = req.body.name
//     const doc = await employee.save()
//     console.log(req.body)

//     console.log(doc)
//     res.json(req.body)
// })

// server.get('/demo',async (req,res)=>{
//     const docs = await Employee.find({});
//     res.json(docs)
// })

// server.listen(8080,() => {
//     console.log('server started')
// })

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));