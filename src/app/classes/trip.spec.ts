

import {Trip} from './trip';

describe(' trip class', () => {


  let trip: Trip;

  beforeEach(() => {

    trip = new Trip();
  });

  afterEach(() => {

    trip = null;
  });


  it('first test' , () => {

    expect(false).toBeFalsy();
  });

});
