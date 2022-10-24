require('./connections/mongo.con')();
const express = require('express');
const userCtrl = require('./controllers/user.controller');
const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
    try {
        let users = await userCtrl.getAllUsers();
        let response = {
            payload: users,
        };
        res.render('index', { response });
    } catch (err) {
        let response = {
            error: err,
        };
        res.render('error', { response });
    }

});

app.post('/create', async (req, res) => {
    try {
        const { fname } = req.body;
        let user = await userCtrl.createUser(fname);
        if (user) {
            response = {
                fName: fname,
                userType: user.userType,
            };
            res.render('info', { response });
        } else {
            response = {
                error: "User not Created !",
            };
            res.render('error', { response });
        }

    } catch (err) {
        response = {
            error: err,
        };
        res.render('error', { response });
    }
})


app.listen(3000, () => {
    console.log('server ready!!!');
});


function login() {
    return { name: 'Khalil M. Shams', userType: 'admin' };
}