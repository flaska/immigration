import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, MatIconModule} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule],
  exports: [MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule],
})
export class MaterialForumModule { }
