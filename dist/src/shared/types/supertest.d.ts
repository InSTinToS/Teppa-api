import { Response as SuperTestResponse } from 'supertest';
interface ISuperResponse<Response> extends SuperTestResponse {
    body: Response & {
        error: string;
    };
}
export type { ISuperResponse };
