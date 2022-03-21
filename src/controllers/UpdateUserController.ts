import { Request, Response } from 'express';
import { UpdateUserService } from '../services/UpdateUserServices';

class UpdateUserController{
    async handle(req: Request, res: Response){
        const updateUserService = new UpdateUserService();
        const {id, name, email} = req.body

        if(id.length === 0){
            return res.status(400).json({mensagem: 'ID não informado'})
        }
        
        if(name.length === 0){
            return res.status(400).json({mensagem: 'Informe um nome'})
        }

        await updateUserService.execute({ id, name, email})
        return res.status(204)
    }
}

export { UpdateUserController }