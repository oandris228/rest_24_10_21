import { IsDefined, IsNumber, IsString, Min } from "class-validator";

export class CreateProductDto {
    @IsDefined({ message: 'Kell a név kösz :x'})
    @IsString()
    name: string;

    @IsDefined()
    @IsNumber()
    @Min(1, {message: 'mor than     0'})
    prize: number;
}