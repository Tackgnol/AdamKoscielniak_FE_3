import axios from 'axios'
import { ApiResponse } from '~/models/dto'

export class BaseService {
    private baseUrl = 'https://adamkoscielniak.eu.org/'

    constructor(private url: string) {}

    private extractValue = <T>(r: ApiResponse<T>): T => {
        return r.Value
    }

    public getAll = async <T>(): Promise<T[]> => {
        const response = await axios.get<ApiResponse<T[]>>(
            this.baseUrl + this.url
        )
        return this.extractValue(response.data)
    }

    public getOne = async <T>(id: string): Promise<T> => {
        const response = await axios.get<T>(`${this.baseUrl}${this.url}/${id}`)
        return response.data
    }
}
