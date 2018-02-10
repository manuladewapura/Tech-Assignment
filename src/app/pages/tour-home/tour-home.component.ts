import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { TourService, CommonService } from '../../services/services'

@Component({
	selector: 'app-tour-home',
	templateUrl: './tour-home.component.html',
	styleUrls: ['./tour-home.component.css']
})
export class TourHomeComponent implements OnInit {
	loading = false;
	selectedTour: any;
	tourName: string;
	constructor(
		private commonService: CommonService,
		private tourService: TourService,
		private route: ActivatedRoute) { }

	ngOnInit() {
		this.getTour();
	}

	getTour() : void {
		let selectedTourId = this.commonService.getTourId(this.route);
		this.tourService.getTour(selectedTourId).subscribe(data => this.selectedTour = data, null, () => this.setTourName());
	}

	setTourName(): void {
		this.tourName = this.selectedTour.Name;
	}
}
