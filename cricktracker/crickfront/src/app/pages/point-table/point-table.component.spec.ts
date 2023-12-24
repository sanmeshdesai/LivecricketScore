import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointTableComponent } from './point-table.component';
import { CommonModule } from '@angular/common';

describe('PointTableComponent', () => {
  let component: PointTableComponent;
  let fixture: ComponentFixture<PointTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PointTableComponent,CommonModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PointTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
