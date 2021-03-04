// 2'nd task
import { Students } from "./students";
import { Teachers } from "./teachers";

export interface Class{
    name: String;
    students: Students[];
    teachers: Teachers[];
}