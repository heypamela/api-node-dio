import { Request, Response } from 'express';
import { v4 as uuid}  from 'uuid';
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {
    async handle(req: Request, res:Response) {
        const createUserService = new CreateUserService();

        const id = uuid();
        const name = req.body.name;
        const email = req.body.email;
        

        if(name.length === 0){
            return res.status(400).json({mens: 'Informe um nome e um email'})
        }
        
        const user = await createUserService.execute({id, name, email})

        return res.status(201).json({user})
    }
}

export { CreateUserController }