import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './pages/admindash/add-category/add-category.component';
import { AddQuestionComponent } from './pages/admindash/add-question/add-question.component';
import { AddQuizComponent } from './pages/admindash/add-quiz/add-quiz.component';
import { AdmindashComponent } from './pages/admindash/admindash.component';
import { UpdateQuizComponent } from './pages/admindash/update-quiz/update-quiz.component';
import { ViewCategoriesComponent } from './pages/admindash/view-categories/view-categories.component';
import { ViewQuizQuestionsComponent } from './pages/admindash/view-quiz-questions/view-quiz-questions.component';
import { ViewQuizzesComponent } from './pages/admindash/view-quizzes/view-quizzes.component';
import { WelcomeComponent } from './pages/admindash/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashuserComponent } from './pages/usera/dashuser/dashuser.component';
import { InstructionsComponent } from './pages/usera/instructions/instructions.component';
import { LoadQuizComponent } from './pages/usera/load-quiz/load-quiz.component';
import { StartComponent } from './pages/usera/start/start.component';

const routes: Routes = [ 

  { path:'',
  component:HomeComponent,
  pathMatch:'full'},

 { path:'signup',
  component:SignupComponent,
  pathMatch:'full'},

{ path:'login',
component:LoginComponent,
pathMatch:'full'},

{path:'admin',
component:AdmindashComponent,

children:[
  {
    path:'',
    component:WelcomeComponent
  },
  {path:'profile',
component:ProfileComponent},

{
  path:'categories',
  component:ViewCategoriesComponent
},
{
  path:'add-category',
  component:AddCategoryComponent,
},
{
  path:'quizzes',
  component:ViewQuizzesComponent
},
{
  path:'add-quiz',
  component:AddQuizComponent
},
{
  path:'quiz/:qid',
  component:UpdateQuizComponent,
},
{
  path:'view-questions/:qid/:title',
  component:ViewQuizQuestionsComponent
},
{path:'add-question/:qid',
component:AddQuestionComponent}
]
},

{path:'user',
component:DashuserComponent,

children:[
  {
    path:':catId',
    component:LoadQuizComponent
  },
  {
    path:'instructions/:qid',
    component:InstructionsComponent
  },

]
},
{
  path:'start/:qid',
  component:StartComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
