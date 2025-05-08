import {Navbar} from "widgets/Navbar";
import './styles/index.scss'
import {RouteProvider} from "app/providers/RouteProvider";

export const App = () => {
    return (
        <div>
            <Navbar/>
            <RouteProvider/>
        </div>
    )
}