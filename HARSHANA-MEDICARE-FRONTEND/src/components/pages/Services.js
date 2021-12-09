import * as React from 'react';
import ServiceCardL from '../ServiceCardL'
import ServiceCardR from '../ServiceCardR'

export default function Services() {
  return (
      <div class="box">
        <div>
          <ServiceCardL
            url='images/services/img-1.jpg'
            text='IMAGE 1'
            heading='Pharmacists Service'
          />
          <ServiceCardL
            url='images/services/img-2.jpg'
            text='IMAGE 2'
            heading='Loyalty Cards'
          />
          <ServiceCardL
            url='images/services/img-3.jpg'
            text='IMAGE 3'
            heading='Home Delivery Service'
          />
          <ServiceCardL
            url='images/services/img-4.jpeg'
            text='IMAGE 4'
            heading='Pay Securely'
          />
        </div>
          
        <div>
          <ServiceCardR
            text1='Pharmacists are an integral part of the health care team, and are among the most trusted and accessible health care professionals. Pharmacists offer you advice on the different medications you take and the possible side effects – in turn we can offer alternative medicines and various treatments as safer options.'
            text2=''
          />
          <ServiceCardR
            text1='We have introduced a loyalty card system where each member will get a discount of 5 % off the bill throughout the year and exclusive discounts that will be implemented each month.'
            text2=''
          />
          <ServiceCardR
            text1='You can now whatsapp or fax your prescription to the relevant pharmacies and we can prepre the order for collection!'
            text2=''
          />
          <ServiceCardR
            text1='You can now pay online securely your bill easily. On the otherhand in this covid-19 pandemic situation, it is safe to pay online without the physical presence!'
            text2=''
          />
        </div>
      </div>
  );
}