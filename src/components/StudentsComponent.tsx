import React from 'react';
import { Student } from '../Student';
import SingleStudentComponent from './SingleStudentComponent';


function StudentsComponent() {
    const students:Student[] = [];
    students.push(new Student("Michal", "Kossakowski", new Date(2002,2,2),"Białystok, Wiejska 45", 331110, "Ps4", true, [5,4,3,2,4]));
    students.push(new Student("Ichal", "Ossakowski", new Date(2003,3,3),"Białystok, Lipowa 44", 331110, "Ps1", true, [5,5,5,4,4]));
    students.push(new Student("Chal", "Ssakowski", new Date(2005,5,5),"Białystok, Jurowiecka 42", 331110, "Ps2", false, [1,2,3,2,4]));
    students.push(new Student("Al", "Akowski", new Date(2004,4,4),"Białystok, Słoneczna 41", 331110, "Ps3", false, [2,3,5,2,4]));
    students.push(new Student("Kichał", "Mossakowski", new Date(2001,1,1),"Białystok, Zwierzyniecka 46", 331110, "Ps5", false, [2,2,2,2,5]));

  return (
    <>
        <h1>Students:</h1>
        <ol>
            {students.map((s) => <li><SingleStudentComponent student={s}/></li>)}
        </ol>
    </>
  );
}

export default StudentsComponent;
