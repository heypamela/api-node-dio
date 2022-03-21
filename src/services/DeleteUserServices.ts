import { getRepository} from 'typeorm';
import { User } from '../entities/Users';

interface IUser{
    id: string;
}

class DeleteUserService{
    async execute({id}: IUser){
        const user = await getRepository(User)
            .createQueryBuilder()
            .delete()
            .from(User)
            .where('id= :id', {id})
            .execute();

        return user.raw
    }
}

export { DeleteUserService }