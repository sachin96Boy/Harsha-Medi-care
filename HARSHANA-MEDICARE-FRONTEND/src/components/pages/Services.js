import * as React from "react";
import ServiceCardL from "../ServiceCardL";
import ServiceCardR from "../ServiceCardR";

export default function Services() {
  return (
    <>
      <div>
        <ServiceCardL
          url="images/img-9.jpg"
          text="IMAGE 1"
          heading="Provide lab Consaltation Services"
        />
        <ServiceCardL
          url="images/img-2.jpg"
          text="IMAGE 2"
          heading="Channel Your Doctor fast and Easy with Doc-Support"
        />
        <ServiceCardL
          url="images/img-3.jpg"
          text="IMAGE 3"
          heading="Support Your Health and medical needs Effectively"
        />
        <ServiceCardL
          url="images/img-4.jpg"
          text="IMAGE 4"
          heading="Buy new Medicine from Our Store"
        />
        <ServiceCardL
          url="images/img-8.jpg"
          text="IMAGE 5"
          heading="Sign-in with our Shop For Meny More services"
        />
      </div>

      <div>
        <ServiceCardR text1="SERVICE 1" text2="DETAILS" />
        <ServiceCardR text1="SERVICE 2" text2="DETAILS" />
        <ServiceCardR text1="SERVICE 3" text2="DETAILS" />
        <ServiceCardR text1="SERVICE 4" text2="DETAILS" />
        <ServiceCardR text1="SERVICE 5" text2="DETAILS" />
      </div>

      <div>
        <ServiceCardR text1="SERVICE 1" text2="DETAILS" />
        <ServiceCardR text1="SERVICE 2" text2="DETAILS" />
        <ServiceCardR text1="SERVICE 3" text2="DETAILS" />
        <ServiceCardR text1="SERVICE 4" text2="DETAILS" />
        <ServiceCardR text1="SERVICE 5" text2="DETAILS" />
      </div>
    </>
  );
}
