import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full' },
{path:'home', component:HomeComponent},
{path:'home/:id', component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'quiz/:id',component:QuizComponent},
{path:'contact',component:ContactComponent},
{path:'contact/:id',component:ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
