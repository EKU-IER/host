import createLoadRemoteModule from "@paciolan/remote-module-loader";

import { usePromise } from "./usePromise";

export const createModuleProvider = ({ Context, config, url }) => {
  const loadRemoteModule = createLoadRemoteModule(config);

  const promise = loadRemoteModule(url);

  const ModuleProvider = ({ children }) => {
    const module = usePromise(promise);

    const api = module && module.default;

    return <Context.Provider value={api}>{api && children}</Context.Provider>;
  };

  return ModuleProvider;
};
