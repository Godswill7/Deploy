import cors  from 'cors';
import router from './router/router';

import express,   { Application } from "express";

const appConfig = (app: Application) => {
    app
    .use(express.json())
    .use(cors())
    .use("/api", router);
    

    //Routes

}

export default appConfig;