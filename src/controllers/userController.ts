import {Request, Response } from "express"
import UserModel, { iUser } from "../models/userModels"

 export const createStudent = async (req : Request < {}, {}, iUser >, res : Response) => {
    try {
 const { name, age, email, gender, hobbies} =  req.body;  
        const newStudent = await UserModel.create({
name,
age,
email,
gender,
hobbies
        });
     return  res.status(201).json
({
    message: "Student successfully created", data: newStudent
})    } catch (error) {
        return res.status(500).json(error);
    }
}

export const getAllStudents = async (req: Request, res: Response) => {
    try {
       const student = await UserModel.findById(req.params.id)
    //    if (!student) {
    //     return res.status(400).json({
    //         message: "User not found",
    //     })
    //    }
       return res.status(200).json({
message: "Gotten student successfully" 
       })
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const getStudent= async (req: Request, res: Response) => {
    try {
        const Id  = req.params;
       const student = await UserModel.findById(Id)
       if (!student) {
        return res.status(400).json({
            message: "User not found",
        })
       }
       return res.status(200).json({
message: "Gotten student successfully" ,
data: student
       })
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const updateStudent = async (req: Request, res: Response) => {
    try {
        const { name,age} = req.body;   
             const student = await UserModel.findByIdAndUpdate(req.params.studentID,
                {
                name,
                age,
             },
             {
             new: true}
             );
             return res.status(200).json(student);
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const deleteStudent = async (req: Request, res: Response) => {
    try {
      const student =  await UserModel.findByIdAndDelete(req.params.studentID);
        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            })
            // return res.status(201).json({
            //     message: "Student successfully deleted"
            // })
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}

// Assignment get all status code 100, 200, 300, 400(10), 500, 5 each the rest


