const  express =require('express');
const routes = require('./routes/routes.js')
const  Connection  = require('./Database.js');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();

const Port = 2000;

// app.use(cors());
app.use(cors({
    origin:["https://social-app-psi-six.vercel.app"],
    methods:["POST","GET","PUT"],
    credentials:true
}));
app.use(express.json())
app.use('/images', express.static(path.join(__dirname, '../insta-frontend/src/images')));
app.use('/profiles', express.static(path.join(__dirname, '../insta-frontend/src/userProfiles')));
app.use('/api',routes);
app.use(cookieParser())


Connection();

app.listen(Port,()=>{
    console.log(`Server is Running on port http://localhost:${Port}`);
});
