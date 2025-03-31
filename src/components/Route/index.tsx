import { ReactNode } from "react";
import useNavigation from "../../hooks/use-navigation";

interface RouteInterface {
    path: string;
    children: ReactNode;
}

function Route({ path, children }: RouteInterface) {
    
    const { currentPath } = useNavigation();
    if(path === currentPath) {
        return children;
    }

    return null;
}

export default Route;