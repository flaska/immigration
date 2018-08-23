import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatDividerModule} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatCardModule, MatDividerModule],
  exports: [MatButtonModule, MatCardModule, MatDividerModule],
})
export class MaterialForumModule { }
