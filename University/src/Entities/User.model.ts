export class User {
    id?: number;
    name?:string;
    addres?:string;
    email?:string;
    password?:string;
    role?:Role;

    // constructor(i:number, n:string, a:string, em:string, pa:string, r:boolean) {
    //     this.id=i;
    //     this.name = n;
    //     this.addres = a;
    //     this.email = em;
    //     this.password = pa;
    //     if (r == true)//lecturer
    //     this.role = 1;
    //     else       //student
    //     this.role = 0;
        
    // }
}

export enum Role{
    Student=0,
    Lecturer=1
}