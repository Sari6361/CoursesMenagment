export class UserModel {
    id?: number;
    name?: string;
    addres?: string;
    email?: string;
    password?: string;
    role?: boolean;

    constructor(n: string, a: string, e: string, p: string, r: number) {
        this.name = n;
        this.addres = a;
        this.email = e;
        this.password = p;
        if (r == 1)//lecturer
            this.role = true;
        else       //student
            this.role = false;
    }
}