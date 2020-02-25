const hbs = require('express-handlebars'); //
const path = require('path'); //
const express = require('express'); //
const bodyParser = require('body-parser'); //
const mongoose = require('mongoose'); //
const UserSchema = require('./models/users');

require('dotenv').config(); //
const app = express(); //

mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@usersignup-6yj6w.mongodb.net/userdb?retryWrites=true&w=majority`, { //
    useNewUrlParser: true,
    useUnifiedTopolgy: true
});

const user = new UserSchema({
    name:'winston',
    email: 'winston@mail.com',
    password: 'password444'
})

UserSchema.find({}, (err,docs) => {
    console.log(docs);
})


app.use(express.static(path.join(__dirname, 'public'))); //
app.use(bodyParser.urlencoded({extended: false})); //
app.use(bodyParser.json()); //

app.engine('.hbs', hbs ({ //
    defaultLayout: 'layout',
    extname: '.hbs'
}));

app.set('view engine', '.hbs'); //

app.get('/', (req,res) => { //
    res.render('index');
});

app.get('/signup', (req,res) => {
    res.render('signup');
});

app.get('/login', (req,res) => {
    res.render('login');
});

app.post('/', async(req,res) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    res.render('index', {data: {name, email, password}});
});

app.post('/signup', async(req, res) => {

    res.render('signup', )
});

app.post('/login', async(req, res) => {

    res.render('login')
})


app.listen(3000, () => { //
    console.log('server is listening on port 3000');
});