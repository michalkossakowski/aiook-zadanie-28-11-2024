import React from 'react';

function GradesComponent({grades}:{grades:number[]}) {
    
  return (
    <>
      Oceny Studenta:
      <ul>
        {grades.map((g) =>
          <li style={{color: g==2 ? "red" : "green"}}>
            {g} 
          </li>
        )}
      </ul>
    </>
  );
}

export default GradesComponent;
