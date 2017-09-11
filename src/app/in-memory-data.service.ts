import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const candidates = [
      { firstName: 'Jane',  lastName: 'Doe' },
      { firstName: 'John',  lastName: 'Smith' }
    ];
    return {candidates};
  }
}