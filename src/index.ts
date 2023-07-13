import express, { Application } from 'express'
import appConfig from './app';
import dbconfig from './config/Db';
// IIFE  Immediately invoke function expression
// function speak(){}
// speak()

// Anonymous function

const port: number = 7000;
const app:Application = express();

const server =  async()=>{
    try {
        appConfig(app);
        dbconfig();
        
        app.listen(port, () => {
            console.log("")
            console.log(`Server is now listening on port ${port} `);
        });
    } catch (error) {
        console.log(error)
    }
    };
    //Server Initialisation
    server();



