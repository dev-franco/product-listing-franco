import data from '../api/products.json';

export class ApiClient {

    public async getAll<T>(): Promise<T[]> {
        await new Promise(resolve => setTimeout(resolve, 500));
        return data as T[];
    }
}