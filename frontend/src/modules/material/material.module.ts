import {MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatButtonToggleModule, MatProgressBarModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatSnackBarModule],
  exports: [MatButtonModule, MatCardModule, MatButtonToggleModule, MatProgressBarModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatSnackBarModule],
})
export class MaterialModule { }
