import { createContext, ReactNode, useEffect, useState } from "react";


interface NavigationContextType {
    currentPath: string;
    navigate: (to: string) => void;
}

// Create context with a default value
const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

interface NavigationProviderProps {
    children: ReactNode;
  }

function NavigationProvider ({ children } : NavigationProviderProps) {

    const [currentPath, setCurrentPath] = useState(window.location.pathname)


    useEffect(()=> {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        }

        document.addEventListener('popstate', handler)

        return () => {
            document.removeEventListener('popstate', handler);
        }
        
    }, [])

    const navigate = (to: string) => {
        window.history.pushState({}, '', to);
    }

    console.log(currentPath)

    return ( <NavigationContext.Provider value={{currentPath, navigate}}>
        {children}
        {currentPath}
    </NavigationContext.Provider> )
};

export { NavigationProvider };
export default NavigationContext;