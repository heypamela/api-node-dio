import createConnetion from '../database';
import { getConnection } from 'typeorm';
import { makeMockRequest } from '../utils/mocks/mockResquest';
import { makeMockResponse } from '../utils/mocks/mockResponse';
import { GetAllUserController } from "./GetAllUserController";
import { FakeData } from '../utils/FakeData';

describe('GetAllUserController', ()=>{
    beforeAll(async()=>{
        const connection = await createConnetion()
        await connection.runMigrations()
    })

    afterAll(async()=>{
        const connection = getConnection()
        await connection.query('DELETE FROM users')
        await connection.close()
    })

    const fakeData = new FakeData();

    test('should return status 200 when getting all users', async()=>{
        await fakeData.execute();

        const getAllUserController = new GetAllUserController();

        const request = makeMockRequest({})

        const response = makeMockResponse()

        await getAllUserController.handle(request, response)

        expect(response.state.status).toBe(200)
    })
})