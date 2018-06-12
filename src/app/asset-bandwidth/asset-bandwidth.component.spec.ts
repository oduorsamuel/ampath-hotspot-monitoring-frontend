import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetBandwidthComponent } from './asset-bandwidth.component';

describe('AssetBandwidthComponent', () => {
  let component: AssetBandwidthComponent;
  let fixture: ComponentFixture<AssetBandwidthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetBandwidthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetBandwidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
