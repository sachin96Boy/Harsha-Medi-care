import * as React from 'react';
import { Link } from 'react-router-dom';

export default function ServiceCardL(props){
	return (
    	<>
      		<li className='testL'>
      			<br />
        		<br />
        		<br />
        		<h1>{props.text1}<br />{props.text2}</h1>
      		</li>
      		<br />
    	</>
  	);
}