import { Component, OnInit } from '@angular/core';
import { Tour } from '../../models/tour'
import { TourService, CommonService } from '../../services/services';

@Component({
	selector: 'app-tours',
	templateUrl: './tours.component.html',
	styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {
	tours: Tour[] = [];
	selectedTour: any;

	constructor(
		private tourService: TourService,
		private commonService: CommonService) { }

	ngOnInit() {
		if (!localStorage.getItem('tours')) {
			this.tourService.getTours().subscribe(data => this.tours = data, null, () => this.setLocal());

		} else {
			this.tours = JSON.parse(localStorage.getItem('tours'));
		}
	}

	setLocal(): void {
		localStorage.setItem('tours', JSON.stringify(this.tours));
	}
}
