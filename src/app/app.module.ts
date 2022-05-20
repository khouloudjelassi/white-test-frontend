import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { DashuserComponent } from './pages/usera/dashuser/dashuser.component';
import { AdmindashComponent } from './pages/admindash/admindash.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admindash/sidebar/sidebar.component';
import {MatCardModule} from '@angular/material/card';
import { WelcomeComponent } from './pages/admindash/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admindash/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admindash/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admindash/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admindash/add-quiz/add-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { UpdateQuizComponent } from './pages/admindash/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admindash/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './pages/admindash/add-question/add-question.component';
import { SidebarUserComponent } from './pages/usera/sidebar-user/sidebar-user.component';
import { LoadQuizComponent } from './pages/usera/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/usera/instructions/instructions.component';
import { StartComponent } from './pages/usera/start/start.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DashuserComponent,
    AdmindashComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    ViewQuizzesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuizQuestionsComponent,
    AddQuestionComponent,
    SidebarUserComponent,
    LoadQuizComponent,
    InstructionsComponent,
    StartComponent,
 
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
