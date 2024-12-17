import { useRemoteHooks } from "./lib/useRemoteHooks";
import Remote from "./Remote";

export default function App() {
  const remoteHooks = useRemoteHooks();

  return <Remote heading="Host"></Remote>;
}
