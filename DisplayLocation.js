import React from 'react';

const DisplayLocation = ({latitude}) =>{

  var region = (latitude > 0) ? 'north' : 'south' ;

 return(
   <div>  you are in {region} </div>
 )
}



export default DisplayLocation;
