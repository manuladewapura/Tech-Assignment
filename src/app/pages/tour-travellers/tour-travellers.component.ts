import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { Traveller } from '../../models/traveller';
import { TourService, CommonService } from "../../services/services";

@Component({
	selector: 'app-tour-travellers',
	templateUrl: './tour-travellers.component.html',
	styleUrls: ['./tour-travellers.component.css']
})

export class TourTravellersComponent implements OnInit {
	selectedTraveller: any;
	tourTravellers: Traveller[];

	constructor(
		private route: ActivatedRoute,
		private commonService: CommonService,
		private tourService: TourService) { }

	ngOnInit() {
		this.getTourTravellers();
	}

	travellerClicked(event, traveller) {
		this.selectedTraveller = traveller;
	}

	getTourTravellers() {
		let selectedTourId = this.commonService.getTourIdFromParent(this.route);
		this.tourService.getTourTravellers(selectedTourId).subscribe(data => this.tourTravellers = data);
	}
}
