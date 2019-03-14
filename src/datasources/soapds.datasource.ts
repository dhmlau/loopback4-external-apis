import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './soapds.datasource.json';

export class SoapdsDataSource extends juggler.DataSource {
  static dataSourceName = 'soapds';

  constructor(
    @inject('datasources.config.soapds', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
