import {getService} from '@loopback/service-proxy';
import {inject, Provider} from '@loopback/core';
import {RestdsDataSource} from '../datasources';

export interface StarwarService {
  // this is where you define the Node.js methods that will be
  // mapped to the SOAP operations as stated in the datasource
  // json file.
  getCharacter(personId: number): Promise<Person>;
}

export class StarwarServiceProvider implements Provider<StarwarService> {
  constructor(
    // restds must match the name property in the datasource json file
    @inject('datasources.restds')
    protected dataSource: RestdsDataSource = new RestdsDataSource(),
  ) {}

  value(): Promise<StarwarService> {
    return getService(this.dataSource);
  }
}

export interface Person {
  name: string;
  height: string;
  mass: string;
}
