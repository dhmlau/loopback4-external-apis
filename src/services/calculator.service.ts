import {getService} from '@loopback/service-proxy';
import {inject, Provider} from '@loopback/core';
import {SoapdsDataSource} from '../datasources';

export interface CalculatorService {
  // this is where you define the Node.js methods that will be
  // mapped to the SOAP operations as stated in the datasource
  // json file.
  add(args: CalculatorParameters): Promise<AddResponse>;
  subtract(args: CalculatorParameters): Promise<SubtractResponse>;
}

export class CalculatorServiceProvider implements Provider<CalculatorService> {
  constructor(
    // soapds must match the name property in the datasource json file
    @inject('datasources.soapds')
    protected dataSource: SoapdsDataSource = new SoapdsDataSource(),
  ) {}

  value(): Promise<CalculatorService> {
    return getService(this.dataSource);
  }
}

export interface AddResponse {
  result: {
    value: number;
  };
}
export interface SubtractResponse {
  result: {
    value: number;
  };
}
export interface CalculatorParameters {
  intA: number;
  intB: number;
}
