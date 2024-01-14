export interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: 'submit' | 'reset' | 'button' | undefined;
    disabled?: boolean;
}
