import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  book: Book = {
    _id: '',
    isbn: '',
    title: '',
    author: '',
    description: '',
    publisher: '',
    publishedYear: '',
    // updatedAt: null,
    updatedAt: new Date(),
  };
  isLoadingResult = true;

  // constructor(route: ActivatedRoute, api: ApiService, router: Router) {}
  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getBookDetails(this.route.snapshot.paramMap.get('id'));
  }

  getBookDetails(id: any): void {
    this.api.getBook(id).subscribe((data: any) => {
      this.book = data;
      console.log(this.book);
      this.isLoadingResult = false;
    });
  }

  deleteBook(id: any): void {
    this.isLoadingResult = true;
    this.api.deleteBook(id).subscribe(
      () => {
        this.isLoadingResult = false;
        this.router.navigate(['/books']);
      },
      (err) => {
        console.log(err);
        this.isLoadingResult = false;
      }
    );
  }
}
