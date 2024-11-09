export interface User{
    id:number;
    username:string;
    password:string
}

export interface Project{
    id:number;
    title:string;
    description:string;
    ownerId:number
}

export interface Task{
    id:number;
    title:string;
    projectId:number;
    description:string;
    status:'To Do'|'In progress'|'Done';
}