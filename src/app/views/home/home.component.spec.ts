import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HomeComponent} from "./home.component";
import {By} from "@angular/platform-browser";
import {HttpClientTestingModule} from "@angular/common/http/testing";


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [HomeComponent],
        imports: [HttpClientTestingModule]
      }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

/*  it('deve teste o component com sucesso', () => {
    component.test = {...component.test.};
    fixture.detectChanges();
    const elementTitle = fixture.debugElement.query(By.css('#title'));
    expect((elementTitle.nativeElement as HTMLSpanElement).textContent)
      .toEqual()

  })*/
});
