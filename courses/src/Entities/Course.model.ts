export class Course{
    id?:number;
    name?:string;
    categoryId?:number;
    lessonsCount?:number;
    startDate?:Date;
    syllabus?:string[]=[];
    learningWay?:LearningWay;
    lecturerId?:number;
    imgRouting?:string; 
}
 
export enum LearningWay{
    Frontal=1,
    Zoom=2
}