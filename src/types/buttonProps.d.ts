export interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string | string[];
    type?: 'submit' | 'reset' | 'button' | undefined;
    disabled?: boolean;
}
