import { Router } from "express";
import { register, viewStudents } from "../controller/studentController";

const router = Router()
router.route("/create").post(register)
router.route("/view").get(viewStudents)
export default router