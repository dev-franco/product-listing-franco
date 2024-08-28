import data from '../api/products.json';
import { Metadata } from '../models/metadata';

export class ApiClient {

    public async getAll<T>(): Promise<T[]> {
        await new Promise(resolve => setTimeout(resolve, 500));
        return data as T[];
    }

    public async getMetadata(): Promise<Metadata> {
        await new Promise(resolve => setTimeout(resolve, 250));
        const metadata = new Metadata();
        metadata.productCategories = [...new Set(data.map(d => d.category))].sort();

        return metadata
    }
}