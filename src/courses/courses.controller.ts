import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto/update-course.dto';

@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService){

    }

    @Get()
    findAll(){
        return this.coursesService.findAll();
    }

    // pega especificamente o parâmetro de id
    @Get(':id')
    findOne(@Param('id') id:string ){
        return this.coursesService.findOne(id);
    }

    @Post()
    create(@Body() createCourseDto: CreateCourseDto){
        return this.coursesService.create(createCourseDto);
    }


    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto){
        return this.coursesService.update(id, updateCourseDto);
    }

    @Delete(':id')
    remove(@Param('id') id:string ){
        return this.coursesService.remove(id);
    }
}


//     @Get(':id')
//     findOne(
// // pode pegar todo e qualquer parâmetro que estiver na rota
//         @Param() params 
//     ){
//         return `Curso #${params.id}`;
//     }
// }