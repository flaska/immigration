import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, MatIconModule, MatInputModule, MatProgressSpinnerModule,
  MatSnackBarModule
} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatCardModule, MatChipsModule, MatInputModule, MatSnackBarModule, MatProgressSpinnerModule],
  exports: [MatButtonModule, MatCardModule, MatChipsModule, MatInputModule, MatSnackBarModule, MatProgressSpinnerModule],
})
export class MaterialForumModule { }
