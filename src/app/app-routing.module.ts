import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PinagsamaComponent } from './pinagsama/pinagsama.component';

const routes: Routes = [
  { path: 'pinagsama', component: PinagsamaComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect to login by default
  { path: '**', redirectTo: 'login' } // Wildcard route for any undefined paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
