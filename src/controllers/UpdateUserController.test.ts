import createConnection from '../database';
import { getConnection } from 'typeorm';
import { Request } from 'express';
import { makeMockResponse } from '../utils/mocks/mockResponse';
import { UpdateUserController } from "./UpdateUserController";
import { FakeData } from '../utils/FakeData';

describe('UpdateUserController', ()=>{
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

    test('should return status 204 when edited user', async()=>{
        const mockUser = await fakeData.createUser()

        const updateUserController = new UpdateUserController()

        const request = {
            body: {
                id: mockUser.id,
                name: 'Tião',
                email: 'tiao@zinho.com.br'
            }
        } as Request 
        
        const response= makeMockResponse();

        await updateUserController.handle(request, response);

        expect(response.state.status).toBe(204)
    })
})