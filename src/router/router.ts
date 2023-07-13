import { Router, Request, Response } from "express";
import { createStudent, deleteStudent, getAllStudents, getStudent, updateStudent,  } from "../controllers/userController";

const router = Router()

router.route("/read").get((req: Request, res: Response)=>{
return res.status(200).json({
    message: "Welcome Home",
})
})
router.post("/create", createStudent)
router.get("/:allstudents", getAllStudents)
router.get("/getOne/:studentID", getStudent)
router.patch("/updateprofile", updateStudent)
router.delete("/delete/:deletestudent", deleteStudent)

export default router;