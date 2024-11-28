import React from 'react';

function SurnameComponent({surname}:{surname:string}) {
    
  return (
    <>
      <div style={{fontSize:'20px'}}>
        Nazwisko: 
        <b style={{color: 'blue'}}> {surname}</b>
      </div>
    </>
  );
}

export default SurnameComponent;
