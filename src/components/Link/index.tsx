import { ReactNode } from "react";
import classNames from "classnames";
import useNavigation from "../../hooks/use-navigation";

interface LinkProps {
    to: string;
    children: ReactNode;
    className?: string;
    activeClassName?: string;
}

function Link({ to, children, className, activeClassName } : LinkProps) {

    const { navigate, currentPath } = useNavigation();

    const classes = classNames(
        'text-blue-500', 
        className,
        currentPath === to && activeClassName
    );

    const clickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if(event.ctrlKey || event.metaKey) {
            return;
        }
        event.preventDefault();
        navigate(to);
    }

    return (
        <div className={classes}>
            <a  href={to} onClick={clickHandler}>{children}</a>
        </div>
    )
}

export default Link;