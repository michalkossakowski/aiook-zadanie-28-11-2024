import React from 'react';

function NameComponent({name}:{name:string}) {
    
  return (
    <>
      <div style={{fontSize:'20px'}}>
        Imię:
        <b style={{color: 'purple'}}> {name}</b>
      </div>
    </>
  );
}

export default NameComponent;
