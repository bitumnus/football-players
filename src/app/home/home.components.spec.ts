import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { Router } from '@angular/router';

class RouterStub {
    navigate(path: String[]) {};
}

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ HomeComponent ],
            providers: [
                {provide: Router, useClass: RouterStub}
            ]
        })
        fixture = TestBed.createComponent(HomeComponent)
        component = fixture.componentInstance
    });

    it('should be defined', () => {
        expect(component).toBeDefined();
    });
    it('should navigate to players', () => {
        let router = TestBed.get(Router)
        let spy = spyOn(router, 'navigate')

        component.goToPlayersPage()

        expect(spy).toHaveBeenCalledWith(['/players'])
    });
    
});