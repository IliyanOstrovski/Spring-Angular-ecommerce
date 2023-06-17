import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdictCategoryMenuComponent } from './prodict-category-menu.component';

describe('ProdictCategoryMenuComponent', () => {
  let component: ProdictCategoryMenuComponent;
  let fixture: ComponentFixture<ProdictCategoryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdictCategoryMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdictCategoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
