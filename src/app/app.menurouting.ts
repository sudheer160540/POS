
import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {MenuroutingComponent} from './menurouting/menurouting.component';
import {OrdermenuComponent} from './ordermenu/ordermenu.component';
import {UserloginComponent} from './userlogin/userlogin.component';
import {ItemquantityComponent} from './itemquantity/itemquantity.component';
import {AuthManager} from './userlogin/userlogin.auth'
export const mrouter:Routes=[{path:'',component:UserloginComponent},
                             {path:'order',component:OrdermenuComponent,
                             children:[{path:'',component:OrdermenuComponent},
                             {path:'orderSumm',component:ItemquantityComponent}],canActivate:[AuthManager]},
                              {path:'dineorder',component:MenuroutingComponent,canActivate:[AuthManager]},
                               {path:'orderSumm',component:ItemquantityComponent,canActivate:[AuthManager]}
     ];

export const menurouter:ModuleWithProviders=RouterModule.forRoot(mrouter);