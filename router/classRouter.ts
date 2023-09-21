import { Router } from "express";
import { enterClass, seeAllStudentClasses } from "../controller/classController";

const router = Router()
router.route("/:studentID/enter-class").post(enterClass)
router.route("/:className/classed").get(seeAllStudentClasses)
export default router