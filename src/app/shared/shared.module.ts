import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { OnlyNumber } from './Directives/numberOnlyDirective';
import { ScrollDirective } from './Directives/scrollDirective';
import { SortDirective } from './Directives/sort.directive';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { KeysPipe } from './Pipes/filterObjectKeys';

const declarations = [HeaderComponent, FooterComponent,
  Comp1Component,
  Comp2Component,
  Comp3Component,
  Comp4Component,
  ScrollDirective, 
  SortDirective,
  KeysPipe,
  OnlyNumber]
  const imports = [CommonModule,FormsModule];
@NgModule({
  declarations: [
      ...declarations
  ],
  imports:[...imports],
  exports: [...declarations]
})
export class sharedModule { }
