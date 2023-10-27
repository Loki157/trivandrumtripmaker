import React from "react";
import { Helmet } from "react-helmet";

function HeaderHelmet({ value }) {
  return (
    <Helmet>
      <title>{value}</title>
    </Helmet>
  );
}

export default HeaderHelmet;
