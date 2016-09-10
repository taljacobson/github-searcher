import { Injectable } from "@angular/core";
import { Http , Headers } from "@angular/http";

import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
  private userName; // github user name

  constructor(private _http: Http ){

  }
  // get user from github
  getUser(){
    return this._http.get('https://api.github.com/users/' + this.userName)
    .map(res => res.json() )
  }

  getRepos(){
    return this._http.get('https://api.github.com/users/' + this.userName + '/repos')
    .map(res => res.json() )
  }
  updateUser(username){
    this.userName = username
  }
}
