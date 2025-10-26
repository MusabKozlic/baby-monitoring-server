import { Genders } from "@prisma/client";
import { IsDate, IsDateString, IsNumber, IsString } from "class-validator";


export class CreateChildDto {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsNumber()
    weight: number;
    @IsNumber()
    height: number;

    @IsDateString()
    birthday: string;

    @IsString()
    parentId: string;
    @IsString()
    gender: Genders;

    @IsString()
    userId: string;

    @IsString()
    id?: string;
}