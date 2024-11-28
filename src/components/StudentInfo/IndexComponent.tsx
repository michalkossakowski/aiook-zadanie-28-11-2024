import React from 'react';

function IndexComponent({index}:{index:number}) {
    
  return (
    <>
      <div style={{fontSize:'24px', fontWeight: 'bolder'}}>
        Index: {index}
      </div>
    </>
  );
}

export default IndexComponent;
