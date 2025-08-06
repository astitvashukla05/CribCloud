import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

/* ROUTES IMPORT */


/* CONFIGURATIONS */

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));

/* ROUTES */

app.get('/',(req,res)=> {

    res.send('Welcome to the server!');     

})

/* SERVER SETUP */
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{

    console.log('Server Running on Port '+ PORT)
})