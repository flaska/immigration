import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatButtonToggleModule, MatProgressBarModule, ],
  exports: [MatButtonModule, MatCardModule, MatButtonToggleModule, MatProgressBarModule,  ],
})
export class MaterialNewsModule { }
