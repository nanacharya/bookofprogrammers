import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  loogedIn: boolean = false;

  constructor() {
  }

  isLoggedIn() {
    return this.loogedIn;
  }

  setLoggedIn(looged: boolean) {
    this.loogedIn = looged;

  }
}
