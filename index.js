const express = require('express')
const bcrypt = require('bcrypt')
const app = express()

const port = 8000

app.set('view engine', 'hbs')

app.use(express.urlencoded({extended:false}))

app.use('/public', express.static('public'))

app.listen(port, function(){
    console.log(`Server running on port : ${port}`);
})

app.get('/', function(req, res){
    res.send('Wassup world')
})


/* ROUTING */
app.get('/home', (req, res) => {
    res.render('index')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/project', (req, res) => {
    res.render('project')
})

app.post('/project', (req, res) => {
    const data = req.body
    console.log(data)

    res.redirect('/home')
})

app.get('/detail-project/:index', (req, res) => {
    const index = req.params.index
    console.log(index);

    res.render('detailProject')
})
/* ROUTING */