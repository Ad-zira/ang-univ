import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Book } from '../book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  displayedColumns: string[] = ['title', 'author'];
  dataSource: Book[] = [];
  isLoadingResult: boolean = true;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getBooks().subscribe(
      (res: any) => {
        this.dataSource = res;
        console.log(this.dataSource);
        this.isLoadingResult = false;
      },
      (err) => {
        console.log(err);
        this.isLoadingResult = false;
      }
    );
  }
}
