import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entitiesormodel/course.entity';

@Injectable()
export class CoursesService {
// constructor ja inicializado usando a model para ser injetado no controller
    private courses:Course[] = [
        {
        id: 1,
        name: "Fundamentos do framework NestJS",
        description: "Fundamentos do framework NestJS",
        tags: ["node.js", "nestjs", "javascript"],
        },
    ];

// métodos

    findAll(){
        return this.courses;
    }

    findOne(id:string){
        const onecourse = this.courses.find((course) => course.id == Number(id));

        if(!onecourse){
            throw new HttpException(`Course ID ${id} not found`, HttpStatus.NOT_FOUND)
        };

        return onecourse;
    }

// esse Dto é só uma variavel, poderia ser qualquer outra, o que importa é o conceito de o front mandar um objeto que é criado no back, e o any é pq a gnt ainda nao sabe o tipo que vai ser o objeto, entao define como qualquer coisa, mas vai ser mudado dps. nao usa a model pq o id é automatico e tu nao cria no create
// esse 
    create(courseNaoPopulado: any){
        this.courses.push(courseNaoPopulado);
        return courseNaoPopulado;
    }

    update(id:string, updateCourseDto: any){
        const indexCourse = this.courses.findIndex((course) => course.id == Number(id),);

        this.courses[indexCourse] = updateCourseDto;
    }

    remove(id:string){
        const indexCourse = this.courses.findIndex((course) => course.id == Number(id),);

        if(indexCourse>=0){
            this.courses.splice(indexCourse, 1)
        }
    }
}
