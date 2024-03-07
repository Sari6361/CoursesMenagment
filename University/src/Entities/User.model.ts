export class User{
    id?: number;
    name?:string;
    addres?:string;
    email?:string;
    password?:string;
    role?:Role;
}

export enum Role{
    Student=1,
    Lecturer=2
}