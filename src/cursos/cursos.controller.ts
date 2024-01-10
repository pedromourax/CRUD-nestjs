import { Controller, Get, Param } from '@nestjs/common';

@Controller('cursos')
export class CursosController {
    @Get(':id')
    listarTodos(@Param() params) {
        return `Todos os cursos ${params.id}`
    }

}
