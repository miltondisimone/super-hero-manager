import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-hero-dialog',
  templateUrl: './delete-hero-dialog.component.html',
  styleUrls: ['./delete-hero-dialog.component.scss']
})
export class DeleteHeroDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteHeroDialogComponent>) { }

  ngOnInit(): void {
  }

  dismiss() {
    this.dialogRef.close('dismiss');
  }

  delete() {
    this.dialogRef.close('delete');
  }

}
