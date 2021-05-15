import { Note } from "./Note";

export interface User{
    id:string
    email:string
    firstname:string
    lastname:string
    birtDate:string
    notes:Note[]
}