import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatCardModule, MatChipsModule],
  exports: [MatButtonModule, MatCardModule, MatChipsModule],
})
export class MaterialForumModule { }
