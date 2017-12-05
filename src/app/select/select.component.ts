import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {TripService} from '../services/trip.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {


  private _form: FormGroup;

  private _method: FormControl;

  private _departure: FormControl;
  private _arrival: FormControl;


  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _tripService: TripService
  ) { }

  ngOnInit() {

    this.tripService.fetchTrips();

    this.method = new FormControl('fastest');
    this.departure = new FormControl('');
    this.arrival = new FormControl('');
    this.form = this.formBuilder.group({
      departure: this.departure,
      arrival: this.arrival,
      method: this.method
    });
  }

  onFormSubmit() {

    const form = this.form.controls;

    this.tripService.calculatePath(form.departure.value, form.arrival.value, form.method.value);


    this.router.navigate(['/present']).then(null);

  }


  /**
   * here goes the getters and setters
   */
  get tripService(): TripService {
    return this._tripService;
  }

  set tripService(value: TripService) {
    this._tripService = value;
  }

  get arrival(): FormControl {
    return this._arrival;
  }

  set arrival(value: FormControl) {
    this._arrival = value;
  }
  get departure(): FormControl {
    return this._departure;
  }

  set departure(value: FormControl) {
    this._departure = value;
  }

  get router(): Router {
    return this._router;
  }

  set router(value: Router) {
    this._router = value;
  }

  get method(): FormControl {
    return this._method;
  }

  set method(value: FormControl) {
    this._method = value;
  }

  get formBuilder(): FormBuilder {
    return this._formBuilder;
  }

  set formBuilder(value: FormBuilder) {
    this._formBuilder = value;
  }
  get form(): FormGroup {
    return this._form;
  }

  set form(value: FormGroup) {
    this._form = value;
  }

}
