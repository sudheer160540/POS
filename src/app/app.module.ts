import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {menurouter} from './app.menurouting';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule} from 'angularfire2'
import { MenuroutingComponent } from './menurouting/menurouting.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { OrdermenuComponent } from './ordermenu/ordermenu.component';
import { CategoryComponent } from './category/category.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { ItemquantityComponent } from './itemquantity/itemquantity.component';
export const firebaseConfig={
  apiKey:'',
  authDomain:'',
  databaseURL:'',
  storageBucket:'',
  messagingSenterId:''
};
@NgModule({
  declarations: [
    AppComponent,
    MenuroutingComponent,
    UserloginComponent,
    OrdermenuComponent,
    CategoryComponent,
    ItemlistComponent,
    ItemquantityComponent
  ],
  imports: [
    BrowserModule,
    menurouter,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
