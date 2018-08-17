import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule],
  exports: [MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule],
})
export class MaterialCommentsModule { }
