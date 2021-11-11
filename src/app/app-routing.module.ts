import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAddComponent } from './book-add/book-add.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  { path: 'books', component: BooksComponent, data: { title: 'Books' } },
  {
    path: 'book-details/:id',
    component: BookDetailsComponent,
    data: {
      title: 'Book Details',
    },
  },
  {
    path: 'book-add',
    component: BookAddComponent,
    data: {
      title: 'Add a Book',
    },
  },
  {
    path: 'book-edit/:id',
    component: BookEditComponent,
    data: {
      title: 'Edit a Book',
    },
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
