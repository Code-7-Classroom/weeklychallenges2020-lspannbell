let express = require('express');
let app = express();
let data = require('./public/employees.json');
app.use(express.json())


app.get('/', function (req, res)  {
    res.send("Employee Database")
});


//GET METHOD
//http://localhost:4000/employees
app.get('/employees', (req, res) => {
    if (!data) {
        res.status(404).send(`Couldn't find the employee`)
    }
    res.send(data)
});
//http://localhost:3000/employees/1
app.get('/employees/:id', function (req, res) {
    const sData = data.employees.find(function (employee) {
        return parseInt(req.params.id) === employee.id
    })
    if (!sData) {
        res.status(404).send(`Couldn't find the employee ID`)
    }
    res.send(sData)
});
//POST METHOD
app.post('/employees', function (req, res) {
    const sData = {
        id: data.employees.length + 1,
        name: req.body.name,
        salary: req.body.salary,
        job: req.body.job
    }
    if (!sData) {
        res.status(404).send(`Couldn't add employee`)
    }
    data.employees.push(sData)
    res.send(sData)
});


//PUT METHOD
app.put('/employees/:id', function (req, res) {
    const sData = data.employees.find(function (employee) {
        return parseInt(req.params.id) === employee.id
    })
    if (!sData) {
        res.status(404).send(`Couldn't find the employee ID`)
    }
        sData.name = req.body.name,
        sData.salary = req.body.salary,
        sData.job = req.body.job
    res.send(sData)
});


//DELETE METHOD
app.delete('/employees/:id', function (req, res) {
    const sData = data.employees.find(function (employee) {
        return parseInt(req.params.id) === employee.id
    })
    if (!sData) {
        res.status(404).send(`Couldn't find the student id`)
    }
    const index = data.employees.indexOf(sData)
    data.employees.splice(index, 1)
    res.send(sData)
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});