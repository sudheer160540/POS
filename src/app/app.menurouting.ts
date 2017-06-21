
import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {MenuroutingComponent} from './menurouting/menurouting.component';
import {OrdermenuComponent} from './ordermenu/ordermenu.component';
import {UserloginComponent} from './userlogin/userlogin.component';
export const mrouter:Routes=[{path:'',component:UserloginComponent},
                             {path:'order/:edien',component:OrdermenuComponent},
                              {path:'dineorder',component:MenuroutingComponent}];

export const menurouter:ModuleWithProviders=RouterModule.forRoot(mrouter);