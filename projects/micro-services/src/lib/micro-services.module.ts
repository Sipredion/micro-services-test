import { NgModule } from '@angular/core';
import { MicroServicesComponent } from './micro-services.component';
import { TestComponentComponent } from './test-component/test-component.component';

@NgModule({
  declarations: [MicroServicesComponent, TestComponentComponent],
  imports: [
  ],
  exports: [MicroServicesComponent, TestComponentComponent]
})
export class MicroServicesModule { }
