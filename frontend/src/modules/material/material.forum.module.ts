import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, MatIconModule, MatInputModule,
  MatSnackBarModule
} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatCardModule, MatChipsModule, MatInputModule, MatSnackBarModule],
  exports: [MatButtonModule, MatCardModule, MatChipsModule, MatInputModule, MatSnackBarModule],
})
export class MaterialForumModule { }
