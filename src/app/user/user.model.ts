export class User {
    public username: string;
    public hash: string;
    public firstName: string;
    public lastName: string;

    constructor(username: string, hash: string, fn: string, ln: string){
        this.username = username;
        this.hash = hash;
        this.firstName = fn;
        this.lastName = ln; 
    }

}