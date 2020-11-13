import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { StarComponent } from './star.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StarComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarComponent,
    ConvertToSpacesPipe,
    FormsModule,
    CommonModule
  ]
})
export class SharedModule { }
