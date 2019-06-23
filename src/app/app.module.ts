import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule} from 'angularfire2';
import { firebaseConfig } from './../environments/firebase.config';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

import { TodoService } from './services/todo.service';
import { AddWikiComponent } from './components/add-wiki/add-wiki.component';
import { ListwikiComponent } from './components/list-wiki/list-wiki.component';

const appRoutes:Routes = [
  {path:"", component:UserComponent},
  {path:"about", component:AboutusComponent},
  {path:"add-wiki", component:AddWikiComponent},
  {path:"list-wiki", component:ListwikiComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutusComponent,
    AddWikiComponent,
    ListwikiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
