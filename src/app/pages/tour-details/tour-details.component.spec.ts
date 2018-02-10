import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from "@angular/router";
import { TourDetailsComponent } from './tour-details.component';
import { TourService, CommonService } from "../../services/services";
import { Observable } from "rxjs/Rx";
import { Tour } from '../../models/tour';
import * as TypeMoq from "typemoq";

describe('TourDetailsComponent', () => {
	let component: TourDetailsComponent;
	let fixture: ComponentFixture<TourDetailsComponent>;

	let activatedRouteMock: TypeMoq.IMock<ActivatedRoute>;
	let commonSvcMock: TypeMoq.IMock<CommonService>;
	let tourSvcMock: TypeMoq.IMock<TourService>;
	

	beforeEach(async(() => {
		commonSvcMock = TypeMoq.Mock.ofType(CommonService);
		tourSvcMock = TypeMoq.Mock.ofType(TourService);
		activatedRouteMock = TypeMoq.Mock.ofType(ActivatedRoute);

		TestBed.configureTestingModule({
			declarations: [TourDetailsComponent],
			providers: [
				{ provide: ActivatedRoute, useValue: activatedRouteMock },
				{ provide: CommonService, useValue: commonSvcMock.object },
				{ provide: TourService, useValue: tourSvcMock.object }
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TourDetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();

		let tour: Tour;

		tour = new Tour();
		tour.Id = 1;
		tour.Name = "";
		tour.ArtistName = "";
		tour.DateStart = new Date();
		tour.DateEnd = new Date();
		tour.Host = "";
		tour.Trips = [];
		tour.Travellers = [];
		tour.Contact = null;

		tourSvcMock.setup(svc => svc.getTour(TypeMoq.It.isAnyNumber()))
			.returns(() => Observable.of(tour));
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it("ngOnInit should invoke getTour",
		() => {
			spyOn(component, "getTour");
			component.ngOnInit();
			expect(component.getTour).toHaveBeenCalledTimes(1);
		});
});
