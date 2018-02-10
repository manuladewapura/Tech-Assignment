import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trip } from '../../models/trip'
import { TourService, CommonService } from "../../services/services";

@Component({
	selector: 'app-tour-trips',
	templateUrl: './tour-trips.component.html',
	styleUrls: ['./tour-trips.component.css']
})
export class TourTripsComponent implements OnInit {
	selectedTrip: Trip;
	tourTrips: Trip[]
	trips: any;

	constructor(
		private route: ActivatedRoute,
		private commonService: CommonService,
		private tourService: TourService) { }

	ngOnInit() {
		this.getTourTrips();
	}

	getTourTrips() {
		let selectedTourId = this.commonService.getTourIdFromParent(this.route);
		this.tourService.getTourTrips(selectedTourId).subscribe(data => this.tourTrips = data, null, () => console.log(this.tourTrips));
	}

	onSelect(trip: Trip) {
		this.selectedTrip = trip;
	}
}
