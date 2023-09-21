import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const register = async(req: Request, res: Response)=>{
    try {
        const {student} = req.body

        const user = await prisma.authModel.create({
            data:{
                student,
                 
            },
            include:{class:true}
        })
        return res.status(201).json({
            message:"success",
            data: user
        })
    } catch (error:any) {
        return res.status(404).json({
            message:"error",
            data:error.message
        })
    }
}

export const viewStudents =async(req:Request, res:Response)=>{
    try {
        const students = await prisma.authModel.findMany({
            include:{class:true}
        })
        return res.status(200).json({
            message:"success",
            data: students
        })
    } catch (error:any) {
        return res.status(404).json({
            message:"error",
            data:error.message
        })
    }
}
