import { Metadata } from '../models/metadata';

export class ApiClient {

    static url = '/api/products.json';

    public async getAll<T>(): Promise<T[]> {
        await new Promise(resolve => setTimeout(resolve, 500)); // simulate delay to showcase app in loading state
        const response = await fetch(ApiClient.url);
        const data = await response.json();
        return data as T[];
    }

    public async getMetadata(): Promise<Metadata> {
        const response = await fetch(ApiClient.url);
        const data = await response.json();
        const metadata = new Metadata();
        metadata.productCategories = [...new Set(data.map((d: any) => d.category))].sort() as string[];
        return metadata;
    }
}