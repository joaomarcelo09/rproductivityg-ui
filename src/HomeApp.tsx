import { Outlet } from "react-router-dom";
import Input from "./components/Input";

export function App() {

  return (
    <div>
    <Outlet/>
    <Input labels="Teste" value='teste'/>
    </div>
  )
}
