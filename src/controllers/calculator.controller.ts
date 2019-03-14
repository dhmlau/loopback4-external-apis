import {inject} from '@loopback/core';
import {
  CalculatorService,
  AddResponse,
  CalculatorParameters,
} from '../services';
import {get, param} from '@loopback/rest';

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';

export class CalculatorController {
  constructor(
    @inject('services.CalculatorService')
    protected calculatorService: CalculatorService,
  ) {}

  @get('/add/{intA}/{intB}')
  async add(
    @param.path.integer('intA') intA: number,
    @param.path.integer('intB') intB: number,
  ): Promise<AddResponse> {
    //Preconditions

    return await this.calculatorService.add(<CalculatorParameters>{
      intA,
      intB,
    });
  }

  @get('/subtract/{intA}/{intB}')
  async subtract(
    @param.path.integer('intA') intA: number,
    @param.path.integer('intB') intB: number,
  ): Promise<AddResponse> {
    //Preconditions

    return await this.calculatorService.subtract(<CalculatorParameters>{
      intA,
      intB,
    });
  }
}
