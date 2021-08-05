import * as React from "react";
import ServiceCardL from "../ServiceCardL";
import ServiceCardR from "../ServiceCardR";

export default function Services() {
  return (
    <div class="box">
      <div>
        <ServiceCardL text1="SERVICE 1" text2="IMAGE" />
        <ServiceCardL text1="SERVICE 2" text2="IMAGE" />
        <ServiceCardL text1="SERVICE 3" text2="IMAGE" />
        <ServiceCardL text1="SERVICE 4" text2="IMAGE" />
        <ServiceCardL text1="SERVICE 5" text2="IMAGE" />
      </div>

      <div>
        <ServiceCardR text1="SERVICE 1" text2="DETAILS" />
        <ServiceCardR text1="SERVICE 2" text2="DETAILS" />
        <ServiceCardR text1="SERVICE 3" text2="DETAILS" />
        <ServiceCardR text1="SERVICE 4" text2="DETAILS" />
        <ServiceCardR text1="SERVICE 5" text2="DETAILS" />
      </div>
    </div>
  );
}
