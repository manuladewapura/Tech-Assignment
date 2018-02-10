import { TestBed, inject } from '@angular/core/testing';
import { Http, HttpModule, Response } from '@angular/http';
import { TourService } from './tour.service';
import * as TypeMoq from "typemoq";

describe('TourService', () => {
	let httpMock: TypeMoq.IMock<Http>;

	beforeEach(() => {
		httpMock = TypeMoq.Mock.ofType(Http);

		TestBed.configureTestingModule({
			providers: [TourService, { provide: Http, useValue: httpMock }]
		});
	});

	it('should be created', inject([TourService], (service: TourService) => {
		expect(service).toBeTruthy();
	}));
});