import { getConnection } from "typeorm";
import createConnection from '../database';
import { GetAllUserService } from './GetAllUserServices';
import { FakeData } from '../utils/FakeData';

describe('GetAllUserService', ()=>{
    beforeAll(async() =>{
        const connection = await createConnection()
        await connection.runMigrations()
    })

    afterAll(async()=>{
        const connection = getConnection()
        await connection.query('DELETE FROM users')
        await connection.close()
    })

    const fakeData = new FakeData();

    test('should return all created users', async()=>{
        await fakeData.execute()

        const expectedResponse = [
            {
                name: 'Usuário',
                email:'usuario@user.com.br'
            },
            {
                name: 'Usuár',
                email:''
            }
        ]

        const getAllUserService = new GetAllUserService();

        const result = await getAllUserService.execute();

        expect(result).toMatchObject(expectedResponse);
    })
})