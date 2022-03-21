import { Request } from 'express';
import { Params } from 'express-serve-static-core';

interface mockReq {
    params?: Params;
}

export function makeMockRequest({ params }: mockReq): Request{
    const request = {
        params: params || {},
    } as unknown

    return request as Request
}