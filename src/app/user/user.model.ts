export class User {
    public username: string;
    public password: string;
    public firstName: string;
    public lastName: string;

    constructor(username: string, password: string, fn: string, ln: string){
        this.username = username;
        this.password = password;
        this.firstName = fn;
        this.lastName = ln; 
    }

}