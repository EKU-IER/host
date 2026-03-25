import useCustomHooks from "./lib/custom-hooks/assets/useModule";
import useHelpers from "./lib/helpers/assets/useModule";
import Remote from "./Remote";

export default function App() {
  const { Dropdown } = useCustomHooks();

  const helpers = useHelpers();

  console.log(helpers);

  return (
    <Remote heading="Host">
      <Dropdown>Chance</Dropdown>
    </Remote>
  );
}
