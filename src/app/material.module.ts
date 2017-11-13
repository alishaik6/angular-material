import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatProgressBarModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatProgressBarModule],
  exports: [MatButtonModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatProgressBarModule],
})
export class MaterialModule { }