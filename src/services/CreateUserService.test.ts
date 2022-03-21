import { getConnection } from "typeorm";
import createConnection from "../database";
import { CreateUserService } from "./CreateUserService";

describe('CreateUserService', () => {
    beforeAll(async () => {
        const connection = await createConnection()
        await connection.runMigrations()
    })

    afterAll(async () => {
        const connection = getConnection()
        await connection.query('DELETE FROM users')
        await connection.close()
    })

    test('should return created user id', async()=>{
        const createUserService = new CreateUserService();

        const result = await createUserService.execute({
            id:'9be67005-792c-41c3-8c84-0c4527fb04eb',
            name:'Pamela',
            email: 'pam@ela.com.br'
        })

        console.log(result)
        expect(result).toHaveProperty('id')
    })
})