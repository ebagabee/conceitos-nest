import { Controller, Get } from '@nestjs/common';

@Controller('conceitos-automatico')
export class ConceitosAutomaticoController {
    @Get()
    getAutomatico() {
        return "Conceito automatico"
    }
}
