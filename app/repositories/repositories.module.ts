import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryComponent } from './repository/repository.component';
import { RouterModule,Routes} from '@angular/router';
@NgModule({
  declarations: [RepositoryComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path:'repository',component: RepositoryComponent}

    ])
  ]
})
export class RepositoriesModule { }
