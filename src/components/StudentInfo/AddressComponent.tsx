import React from 'react';

function AddressComponent({address}:{address:string}) {
    
  return (
    <>
      <div>Miejsce Zamieszkania: {address}</div>
    </>
  );
}

export default AddressComponent;
