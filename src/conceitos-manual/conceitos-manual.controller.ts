import { Controller, Get } from "@nestjs/common";


@Controller('conceitos-manual')
export class ConceitosManualController {

    @Get()
    getStarted(): string {
        return 'Conceito Manual Controller funcionando perfeitamente'
    }
}