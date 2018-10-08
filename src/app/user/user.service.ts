import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, observable } from "rxjs";
import { User } from "./user.model";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";



@Injectable()
export class UserService {
    fn = "";
    ln = "";
    logged = false;
    apiUrl: string = 'http://localhost:4000/users/';
    constructor(private httpClient: HttpClient,
        private router: Router) { }



    current(): Observable<User> {
        let token = localStorage.getItem('authToken');

        return this.httpClient.get<User>
            (this.apiUrl + 'current', {
                headers: {
                    "Authorization": "Bearer " + token
                }
            });

    }

    updateUser(id, user): Observable<any> {
        let token = localStorage.getItem('authToken');
        return this.httpClient.put(this.apiUrl + id, user, {
            headers: {
                'authorization': "Bearer " + token
            }
        })
    }


    addUser(user: User): Observable<User> {
        return this.httpClient.post<User>
            (this.apiUrl + 'register', user).pipe(
                map((data: any) => {

                    if (data.success == true) {
                        this.logged = true;
                        this.fn = data.user.firstName;
                        this.ln = data.user.lastName;
                        return data
                    }
                    else {
                        return data
                    }

                })
            );
    }

    authenticateUser(username: string, hash: string) {
        return this.httpClient.post(this.apiUrl + 'authenticate', { username, hash }).pipe(
            map((data: any) => {

                if (data.success == true) {
                    localStorage.setItem('authToken', data.token);
                    data.token = '';
                    this.logged = true;
                    this.fn = data.user.firstName;
                    this.ln = data.user.lastName;
                    return data;
                }
                else {
                    return data
                }

            })
        );
    }


    Logout() {
        this.logged = false;
        this.router.navigate(['/recipes']);
    }




}