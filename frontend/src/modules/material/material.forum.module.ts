import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatChipsModule,MatInputModule, MatProgressSpinnerModule, MatSnackBarModule, MatTooltipModule
} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatCardModule, MatChipsModule, MatInputModule, MatSnackBarModule, MatProgressSpinnerModule, MatTooltipModule],
  exports: [MatButtonModule, MatCardModule, MatChipsModule, MatInputModule, MatSnackBarModule, MatProgressSpinnerModule, MatTooltipModule],
})
export class MaterialForumModule { }
