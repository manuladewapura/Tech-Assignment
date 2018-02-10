import { Injectable } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Tour } from '../../models/tour';
import { CommonService } from "../shared/common.service";

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
}
