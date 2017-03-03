import { RouterModule, Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CommentComponent } from './comment/comment.component';

const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'comment', component: CommentComponent},
];

export const AppRouting = RouterModule.forRoot(routes);