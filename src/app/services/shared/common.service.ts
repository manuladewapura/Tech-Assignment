import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
	selectedTour: any;
	tourId: any;

	constructor() { }

	getTourId(route): number {
		route.params.subscribe(params => {
			this.tourId = params['id'];
		});

		return this.tourId;
	}
}
