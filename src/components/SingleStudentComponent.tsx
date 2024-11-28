import React from 'react';
import { Student } from '../Student';
import NameComponent from './StudentInfo/NameComponent';
import SurnameComponent from './StudentInfo/SurnameComponent';
import BirthDateComponent from './StudentInfo/BirthDateComponent';
import AddressComponent from './StudentInfo/AddressComponent';
import IndexComponent from './StudentInfo/IndexComponent';
import GroupComponent from './StudentInfo/GroupComponent';
import ScholarshipComponent from './StudentInfo/ScholarshipComponent';
import GradesComponent from './StudentInfo/GradesComponent';


type Props = {
  student: Student
}

function SingleStudentComponent(props:Props) {
    
  return (
    <div style={{border: 'solid black 1px', margin: '10px', padding: '10px'}}>
      <IndexComponent index={props.student.indeks}/>
      <NameComponent name={props.student.imie}/>
      <SurnameComponent surname={props.student.nazwisko}/>
      <BirthDateComponent birthDate={props.student.dataUrodzenia}/>
      <AddressComponent address={props.student.adres}/>
      <ScholarshipComponent scholarship={props.student.stypendium}/>
      <GroupComponent group={props.student.grupa} />
      <GradesComponent grades={props.student.oceny}/>
    </div>
  );
}

export default SingleStudentComponent;
