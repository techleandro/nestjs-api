import { IsString} from "class-validator";

export class CreateCourseDto {
    @IsString()
    readonly id: string;

    @IsString()
    readonly name: string;

    @IsString()
    readonly description: string;

// o each true serve pra validar os filhos, ou seja, o que ta dentro do array que vai ser string
    @IsString({ each: true})
    readonly tags: string[];
}
