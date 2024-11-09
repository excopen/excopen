import {ITour} from "@/shared/types/entities/ITour.ts";

export class ApiException extends Error {

    public statusCode?: number;
    public data?: ITour[];

    constructor(message: string, statusCode?: number, data?: ITour[]) {
        super(message); // Передаем сообщение в базовый класс Error
        this.name = 'ApiError';
        this.statusCode = statusCode;
        this.data = data;
        Object.setPrototypeOf(this, ApiException.prototype);
    }

}