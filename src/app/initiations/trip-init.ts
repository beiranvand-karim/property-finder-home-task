

import {Trip} from '../classes/trip';
import {durationInit} from './duration-init';

export const tripInit = new Trip();


tripInit.transport = Trip.EMPTY;
tripInit.departure = Trip.EMPTY;
tripInit.arrival = Trip.EMPTY;
tripInit.duration = durationInit;
tripInit.cost = Trip.ZERO;
tripInit.discount = Trip.ZERO;
tripInit.reference = Trip.EMPTY;

