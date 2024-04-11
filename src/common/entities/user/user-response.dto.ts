import { Exclude } from "class-transformer";

export default class UserResponseDto {

    id: number;
    email: string;

    @Exclude()
    password: string;
    createdAt: Date;

    constructor(data: Partial<UserResponseDto>) {
        Object.assign(this, data);
    }
}