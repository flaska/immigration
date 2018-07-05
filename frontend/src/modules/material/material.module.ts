import {MatButtonModule, MatCardModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatButtonToggleModule, MatProgressBarModule, MatDividerModule],
  exports: [MatButtonModule, MatCardModule, MatButtonToggleModule, MatProgressBarModule, MatDividerModule],
})
export class MaterialModule { }
