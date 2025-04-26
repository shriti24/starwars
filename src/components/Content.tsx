import { Outlet} from "react-router-dom";
import Header from "./Header";

const Content = () => {
  return (
    <div className="app">
      <Header />
      <main>
      <Outlet /></main>
    </div>
  )
}

export default  Content