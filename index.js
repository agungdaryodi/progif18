const express = require ('express')
const app = express();
const {users} = require ("./users");
app.use(express.json());

app.get('/', (req,res)=> {
    res.send('Hello World');
});

app.post('/login',(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    if (users.some(user => user.email === email && user.password === password)) {
        res.send('Login Success');
    } else {
        res.send('Login Failed');
    }
} );

app.listen(3000,() => {
    console.log('Listening on port 3000');
});



