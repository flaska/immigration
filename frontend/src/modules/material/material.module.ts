import {MatButtonModule, MatCardModule, MatChipsModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';

//ADMIN
import {MatListModule} from '@angular/material/list'

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatButtonToggleModule, MatProgressBarModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatSnackBarModule,
    MatListModule, MatChipsModule],
  exports: [MatButtonModule, MatCardModule, MatButtonToggleModule, MatProgressBarModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatSnackBarModule,
    MatListModule, MatChipsModule],
})
export class MaterialModule { }
