import express, { Request, Response, NextFunction} from "express";
import errorHandler from "./middlewares/error-handler.middleware";
import statusRoute from "./routes/status.routes";
import usersRoute from "./routes/user.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(usersRoute);
 
app.use(statusRoute);

app.use(errorHandler)

app.listen(3000, ()=>{
    console.log("Rodando Poha")
})