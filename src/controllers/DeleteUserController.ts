import { Request, Response } from 'express';
import { DeleteUserService } from '../services/DeleteUserServices';

class DeleteUserController{
    async handle(req: Request, res: Response){
        const deleteUserService = new DeleteUserService();
        
        const { id } = req.params;

        await deleteUserService.execute({ id })
        return res.status(204).json()
    }
}

export { DeleteUserController }