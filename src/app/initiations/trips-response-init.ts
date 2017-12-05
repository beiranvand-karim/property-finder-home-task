

import {TripsResponse} from '../classes/trips-response';
import {tripInit} from './trip-init';

export const tripsResponseInit = new TripsResponse();

tripsResponseInit.currency = TripsResponse.EUR_CURRENCY;
tripsResponseInit.deals = tripInit[30];
