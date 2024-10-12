import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceitosAutomaticoService {
  getAutomatic(): string {
    return 'Service automatic funcionando';
  }
}
