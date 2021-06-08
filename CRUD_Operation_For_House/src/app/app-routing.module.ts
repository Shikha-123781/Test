import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ReadComponent } from './read/read.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//comments
const routes: Routes = [
{path:"", component:CreateComponent},
{path:"update/:houseNo", component:UpdateComponent},
{path:"delete/:houseNo", component:DeleteComponent},
{path:"read", component:ReadComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
