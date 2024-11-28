import React from 'react';

function BirthDateComponent({birthDate}:{birthDate:Date}) {
    
  return (
    <>
      <div>Data Urodzenia: {birthDate.toLocaleDateString()}</div>
    </>
  );
}

export default BirthDateComponent;
