import * as React from 'react';

export default function ServiceCardR(props){
	return (
    	<>
      		<li className='testR'>
        		<p>{props.text1}<br />{props.text2}</p>
      		</li>
      		<br />
    	</>
  	);
}