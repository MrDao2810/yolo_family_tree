import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeGenealogyComponent } from './tree-genealogy.component';

describe('TreeGenealogyComponent', () => {
  let component: TreeGenealogyComponent;
  let fixture: ComponentFixture<TreeGenealogyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeGenealogyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeGenealogyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
