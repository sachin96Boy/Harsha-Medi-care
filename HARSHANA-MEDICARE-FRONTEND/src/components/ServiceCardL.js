import * as React from 'react';

export default function ServiceCardL(props){
	return (
    	<>
      		<li className='testL'>
      			<div className='wrapimage'>
      				<img src={props.url} alt={props.text}  width='250px' height='200px' />
      				
      			</div>
      			<div className='wrapheading'>
      				<br />
      				<br />
   		   			<h2>{props.heading}</h2>
      			</div>
      		</li>
      		<br />
    	</>
  	);
}