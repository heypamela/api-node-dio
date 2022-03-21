import { getRepository } from 'typeorm';
import { User } from '../entities/Users';

interface IUser {
    id: string,
    name: string,
    email?: string
}

class CreateUserService{
    async execute({ id, name, email}:IUser){

        const user = await getRepository(User)
            .createQueryBuilder("user")
            .insert()
            .into(User)
            .values([
                { 
                    id: id,
                    name: name,
                    email: email
                }
            ])
            .execute();
        
        console.log(user)
        return user.identifiers[0];
    }
}

export { CreateUserService }