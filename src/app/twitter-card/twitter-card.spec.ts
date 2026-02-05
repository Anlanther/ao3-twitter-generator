import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterCard } from './twitter-card';

describe('TwitterCard', () => {
  let component: TwitterCard;
  let fixture: ComponentFixture<TwitterCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwitterCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwitterCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
