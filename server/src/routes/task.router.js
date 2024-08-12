import {Router} from "express"
import {PrismaClient} from "@prisma/client"
const prisma= new PrismaClient();
const router = Router();

router.post("/", async(req, res)=>{
const{Title, Description}=req.body;
    try{
        const task = await prisma.task.create({
         data:{
            Title,
            Description
         }
        })
        res.status(200).json(task)
    }
    catch(e){
        res.status(500).json(e.message)
    }
})
export default router