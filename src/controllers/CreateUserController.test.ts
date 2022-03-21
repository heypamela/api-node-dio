import { getConnection } from 'typeorm';
import createConnection  from '../database';
import { makeMockResponse } from '../utils/mocks/mockResponse';
import { Request } from 'express';
import { CreateUserController } from './CreateUserController';

describe('CreateUserController', ()=>{

    beforeAll(async ()=>{
        const connection = await createConnection()
        await connection.runMigrations()
    })

    afterAll(async ()=>{
        const connection = getConnection()
        await connection.query('DELETE FROM users')
        await connection.close()
    })

    const createUserController = new CreateUserController();

    const response = makeMockResponse()
    
    test('should return status 201 when created user', async() => {
        
        const request = {
            body: {
                name: 'Algum usuário',
                email: 'email@email.com'
            }
        } as Request

        await createUserController.handle(request, response);

        expect(response.state.status).toBe(201)

    })

    test('should return status 201 when email is not given', async()=>{
        const request = {
           body: {
                name: 'Pâmela',
                email: ''
            }
        } as Request

        await createUserController.handle(request, response);

        expect(response.state.status).toBe(201)
    })

    test('should return status 400 when name is not given', async()=>{
        const request = {
            body: {
                name: '',
                email: 'email@email.com'
            }
        } as Request

        await createUserController.handle(request, response);
        expect(response.state.status).toBe(400);
    })
})