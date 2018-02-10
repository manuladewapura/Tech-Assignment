import { TestBed, async } from '@angular/core/testing';
import { Component } from "@angular/core";
import { AppComponent } from './app.component';
import { RoutingModule } from "../app/routing/routing.module";

@Component({
	selector: "router-outlet",
	template: `<div></div>`
})

class FakeRouterOutletComponent { }

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				FakeRouterOutletComponent
			],
		}).compileComponents();
	}));
	it('should create the app', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));
	it(`should have as title 'Tour App'`, async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app.title).toEqual('Tour App');
	}));
});
