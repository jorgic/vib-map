import React from "react";

import Link from "next/link";

const Index = () => {
  return (
    <div>
      <Link href="/google-map">
        <a>Google Map</a>
      </Link>
      <br />
      <Link href="/amcharts-map">Amcharts Map</Link>
    </div>
  );
};

export default Index;
