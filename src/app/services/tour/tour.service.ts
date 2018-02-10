import { Injectable } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Tour } from '../../models/tour';
import { Trip } from '../../models/trip';
import { Traveller } from '../../models/traveller';
import { CommonService } from "../shared/common.service";
import 'rxjs/Rx';

@Injectable()
export class TourService {
	private dataUrl: string = 'https://my-json-server.typicode.com/tagdevteam/AssignmentApi/tours';

	constructor(public http: Http,
		public commonService: CommonService) {
	}

	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json() || 'Server error');
	}

	public getTours(): Observable<Tour[]> {
		return this.http.get(this.dataUrl)
			.map((response: Response) => response.json() as Tour[])
			.catch(this.handleError);
	}

	public getTour(id: number): Observable<Tour> {
		return this.http.get(this.dataUrl)
			.map((response: Response) => response.json())
			.map(t => t.find(y => y.Id == id) as Tour)
			.catch(this.handleError);
	}

	public getTourTrips(id: number): Observable<Trip[]> {
		return this.http.get(this.dataUrl)
			.map((response: Response) => response.json())
			.map(t => t.find(y => y.Id == id) as Tour)
			.map(r => r.Trips)
			.catch(this.handleError);
	}

	public getTourTravellers(id: number): Observable<Traveller[]> {
		return this.http.get(this.dataUrl)
			.map((response: Response) => response.json())
			.map(t => t.find(y => y.Id == id) as Tour)
			.map(r => r.Travellers)
			.catch(this.handleError);
	}
}
