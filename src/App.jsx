import useCustomHooks from "./lib/custom-hooks/assets/useModule";
import useHelpers from "./lib/helpers/assets/useModule";
import Remote from "./Remote";

export default function App() {
  const customHooks = useCustomHooks();

  const helpers = useHelpers();

  console.log(customHooks);

  console.log(helpers);

  return <Remote heading="Host"></Remote>;
}
