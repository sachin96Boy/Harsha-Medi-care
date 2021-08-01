import * as React from 'react';
import { Link } from 'react-router-dom';

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