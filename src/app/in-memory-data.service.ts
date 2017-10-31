import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const candidates = [
      { firstName: 'Jane',  lastName: 'Doe', phoneNumber: '555-555-5555' },
      { firstName: 'John',  lastName: 'Smith', phoneNumber: '555-555-5555' }
    ];
    return {candidates};
  }
}