import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  standalone: true,
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ],
  templateUrl: './edit-itinerary-dialog.component.html',
  selector: 'app-edit-itinerary-dialog',
  styleUrls: ['./edit-itinerary-dialog.component.scss'],
  imports: [FormsModule,ReactiveFormsModule,MatDialogModule,MatFormFieldModule,
    MatInputModule,]
})
export class EditItineraryDialogComponent {
  editForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditItineraryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
    
    this.editForm = this.fb.group({
      clientName: [data.clientName],
      paxCount: [data.paxCount],
      duration: [data.duration],
      startDate: [data.startDate]
    });
  }

  onSave(): void {
    if (this.editForm.valid) {
      this.dialogRef.close(this.editForm.value);
    }
  }
}
