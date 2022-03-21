import {CreateUserService} from '../services/CreateUserService';
import { v4 as uuid } from 'uuid'

class FakeData{
    createUserService = new CreateUserService();

    async execute(){
        await this.createUserService.execute({
            id: uuid(),
            name: 'Usuário',
            email:'usuario@user.com.br'
        })

        await this.createUserService.execute({
            id: uuid(),
            name: 'Usuár',
            email:''
        })
    }

    async createUser(){
        const user = await this.createUserService.execute({
            id: uuid(),
            name: 'Usuário',
            email:'usuario@user.com.br'
        })
        return user
    }
}

export { FakeData }