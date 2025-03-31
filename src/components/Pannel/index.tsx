import classNames from "classnames";

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
  }

function Pannel({ children, className, ...rest} : PanelProps) {
    const finalClassName = classNames(
        'border rounded p-3 shadow bg-white w-full', //default
        className
    )
    return (
        <div {...rest} className={finalClassName}>
            {children}
        </div>
    )
}

export default Pannel;