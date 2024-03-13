import { LearningWay } from "./Course.model";

export class CourseModel{
    id?:number;
    name?:string;
    categoryId?:number;
    lessonsCount?:number;
    startDate?:Date;
    syllabus?:string;
    learningWay?:LearningWay;
    lecturerId?:number;
    imgRouting?:string; 
    
    constructor(n:string, c:number, l:number, st:Date, sy:string[], le:number, lec:number, im:string ) {
        this.name=n;
        this.categoryId=c;
        this.lessonsCount=l;
        this.startDate=st;
        this.learningWay=le;
        this.lecturerId=lec;
        this.imgRouting=im;
        let s:string;
        sy.forEach(element => {s+=element+' ';});
        this.syllabus=s;
    }
}