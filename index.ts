import express, {Application} from "express"
import { mainApp } from "./mainApp"


const app:Application = express()

const port : number = 5450

mainApp(app)
app.listen(port, ()=>[
    console.log(""),
    console.log("server listening on port", port)
])
