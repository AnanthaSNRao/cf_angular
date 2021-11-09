import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostchildComponent } from './postchild.component';

describe('PostchildComponent', () => {
  let component: PostchildComponent;
  let fixture: ComponentFixture<PostchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
