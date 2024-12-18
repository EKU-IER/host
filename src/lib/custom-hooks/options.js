import { createRequires } from "@paciolan/remote-module-loader";
import React from "react";

export default {
  url: "https://raw.githubusercontent.com/EKU-IER/remote/refs/heads/master/hooks/remote.cjs",
  config: { requires: createRequires({ react: React }) },
};
