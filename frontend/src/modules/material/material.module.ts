import {MatButtonModule, MatCardModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatButtonToggleModule],
  exports: [MatButtonModule, MatCardModule, MatButtonToggleModule],
})
export class MaterialModule { }
