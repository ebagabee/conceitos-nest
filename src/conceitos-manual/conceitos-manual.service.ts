import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceitosManualService {
  getStart(): string {
    return 'Service de Manual Está funcionando';
  }
}
