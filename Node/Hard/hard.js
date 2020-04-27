let express = require('express')

let app = express()

let data = require('./public/employees.json')

app.get('/test', function(req, res){

    res.send('hello world')

})




app.get('/employees', (req, res) =>{
    if(!data){
        res.status(404).send(`Couldn't find the employees`)
}

res.send(data)
    
})




app.get('/employees/:id', function(req, res){
    
    const sData = data.students.find(function(student){
        // console.log(student.id)
        return parseInt(req.params.id) === student.id
    })
    
    if(!sData){
        res.status(404).send(`Couldn't find the employees id`)
}

res.send(sData)




})



const port = process.env.PORT || 3000;     //.env is for security

app.listen(port, () =>{
    console.log(`Server sunning on port ${port}`)
})