import { createModuleProvider } from "../../createModuleProvider";
import { Context } from "./Context";
import options from "../options";

const Provider = createModuleProvider({ Context, ...options });

export default Provider;
