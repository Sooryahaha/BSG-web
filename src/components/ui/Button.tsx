import React from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonBaseProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
}

interface ButtonAsButton extends ButtonBaseProps {
  to?: never;
}

interface ButtonAsLink extends ButtonBaseProps {
  to: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
};

export function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    className = '',
    type = 'button',
    disabled,
    onClick,
  } = props;
  const classes = `${variantClasses[variant]} ${className}`.trim();

  if ('to' in props && props.to) {
    return <Link to={props.to} className={classes}>{children}</Link>;
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
