import { createContext, ReactNode, useEffect, useState } from "react";


interface NavigationContextType {
    currentPath: string;
    navigate: (to: string) => void;
}

// Create context with a default value
const NavigationContext = createContext<NavigationContextType>({
    currentPath: "/",
    navigate: () => {}, // No-op function as a fallback
});

interface NavigationProviderProps {
    children: ReactNode;
}

function NavigationProvider ({ children } : NavigationProviderProps) {

    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(()=> {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        }

        document.addEventListener('popstate', handler);

        return () => {
            document.removeEventListener('popstate', handler);
        }
        
    }, [])

    const navigate = (to: string) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    }

    return ( <NavigationContext.Provider value={{currentPath, navigate}}>
        {children}
    </NavigationContext.Provider> )
};

export { NavigationProvider };
export default NavigationContext;