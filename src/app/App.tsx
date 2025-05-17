import {Navbar} from "widgets/Navbar";
import './styles/index.scss'
import {RouteProvider} from "app/providers/RouteProvider";
import {SideBar} from "widgets/Sidebar";
import {Footer} from "widgets/Footer/ui/Footer.tsx";

export const App = () => {
    return (
        <div>
            <Navbar/>
            <RouteProvider/>
            <SideBar/>
            <Footer/>
        </div>
    )
}