import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ReadComponent } from './read/read.component';



@NgModule({
  declarations: [
    IndexComponent, 
    ReadComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }
