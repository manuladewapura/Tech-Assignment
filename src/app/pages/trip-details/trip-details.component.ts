import { Component, OnInit, Input } from '@angular/core';
import { Trip } from '../../models/trip';
import { Traveller } from '../../models/traveller';
import { TourService, CommonService } from "../../services/services";
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-trip-details',
	templateUrl: './trip-details.component.html',
	styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {
	private _trip: Trip;

	@Input()
	set trip(trip: Trip) {
		if (trip) {
			this._trip = trip;
			this.tripTravellers = this.tourTravellers.filter(t => this._trip.Travellers.includes(t.Id));
		}
	}

	get trip(): Trip { return this._trip; }

	tourTravellers: Traveller[];
	tripTravellers: Traveller[];

	constructor(
		private route: ActivatedRoute,
		private commonService: CommonService,
		private tourService: TourService) { }

	ngOnInit() {
		this.getTourTravellers();
	}

	getTourTravellers() {
		let selectedTourId = this.commonService.getTourIdFromParent(this.route);
		this.tourService.getTourTravellers(selectedTourId).subscribe(data => this.tourTravellers = data);
	}
}
