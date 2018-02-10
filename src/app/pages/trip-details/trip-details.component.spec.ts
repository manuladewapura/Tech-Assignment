import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes, ActivatedRoute } from "@angular/router";
import { RouterTestingModule } from '@angular/router/testing';
import { TripDetailsComponent } from './trip-details.component';
import { TourService, CommonService } from "../../services/services";
import * as TypeMoq from "typemoq";

describe('TripDetailsComponent', () => {
	let component: TripDetailsComponent;
	let fixture: ComponentFixture<TripDetailsComponent>;

	let activatedRouteMock: TypeMoq.IMock<ActivatedRoute>;
	let commonSvcMock: TypeMoq.IMock<CommonService>;
	let tourSvcMock: TypeMoq.IMock<TourService>;

	beforeEach(async(() => {

		commonSvcMock = TypeMoq.Mock.ofType(CommonService);
		tourSvcMock = TypeMoq.Mock.ofType(TourService);
		activatedRouteMock = TypeMoq.Mock.ofType(ActivatedRoute);

		TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			declarations: [TripDetailsComponent],
			providers: [
				{ provide: ActivatedRoute, useValue: activatedRouteMock },
				{ provide: CommonService, useValue: commonSvcMock.object },
				{ provide: TourService, useValue: tourSvcMock.object }
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TripDetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	//it('should create', () => {
	//	expect(component).toBeTruthy();
	//});
});
