import {Injectable} from '@angular/core';
import {CanActivate,Router,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
@Injectable()
export class AuthManager implements CanActivate{
constructor(private _router:Router){

}
canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot){
     if(window.localStorage.getItem('auth_key'))
     return true;
     console.log("you must login");
     this._router.navigate(['']);
     return false;
}

}