import {Navbar} from "widgets/Navbar";
import './styles/index.scss'
import {RouteProvider} from "app/providers/RouteProvider";
import {SideBar} from "widgets/Sidebar";

export const App = () => {
    return (
        <div>
            <Navbar/>
            <RouteProvider/>
            <SideBar/>
        </div>
    )
}