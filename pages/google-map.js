import React from "react";

import Link from "next/link";
import GoogleMapContainer from "../components/GoogleMapContainer";

const GoogleMap = () => {
  return (
    <div>
      <Link href="/">
        <a>Back</a>
      </Link>
      <hr />
      <GoogleMapContainer />
    </div>
  );
};

export default GoogleMap;
