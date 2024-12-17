/**
 * src/lib/loadRemoteModule.js
 */

import createLoadRemoteModule, {
  createRequires,
} from "@paciolan/remote-module-loader";
import React from "react";

const dependencies = {
  react: React,
};

const requires = createRequires(dependencies);
export default createLoadRemoteModule({ requires });
