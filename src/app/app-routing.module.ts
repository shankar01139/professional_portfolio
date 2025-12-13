// app-routing.module.ts (or wherever you define your routes)

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Import the new component
import { ProjectInfoComponent } from './components/project-info/project-info.component';
import { MainPortfolioLayoutComponent } from './components/main-portfolio-layout/main-portfolio-layout.component';

const routes: Routes = [
  // 1. Root Path: Loads the component containing all portfolio sections (The Default)
  { path: '', component: MainPortfolioLayoutComponent }, 
  
  // 2. Project Path: Loads the component with project details
  { path: 'project/:id', component: ProjectInfoComponent }, 

  // Optional: Redirects any unknown path back to the homepage
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }