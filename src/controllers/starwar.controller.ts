import {inject} from '@loopback/core';
import {StarwarService, Person} from '../services';
import {get, param} from '@loopback/rest';

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';

export class StarwarController {
  constructor(
    @inject('services.StarwarService')
    protected starwarService: StarwarService,
  ) {}

  @get('/starwar/people/{personId}')
  async getStarWarCharacter(
    @param.path.integer('personId') personId: number,
  ): Promise<Person> {
    return await this.starwarService.getCharacter(personId);
  }
}
