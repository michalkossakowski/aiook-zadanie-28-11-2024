import React from 'react';

function ScholarshipComponent({scholarship}:{scholarship:boolean}) {
    
  return (
    <>
        <div style={{color: scholarship ? "green" : "red"}}>Student {scholarship ? "" : "nie"} posiada stypendium.</div>
    </>
  );
}

export default ScholarshipComponent;
