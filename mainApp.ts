import express, { Application } from "express";
import cors from "cors"
import auth from "./router/studentRouter"
import classed  from "./router/classRouter"

export const mainApp= (app:Application)=>{
    app.use(express.json());
    app.use(cors())

    app.use("/api", auth)
    app.use("/api", classed)
}