import { createRequires } from "@paciolan/remote-module-loader";
import React from "react";

export default {
  config: { requires: createRequires({ react: React }) },
  url: "http://localhost:5000/remote.cjs",
};
