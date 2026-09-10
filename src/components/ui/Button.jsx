import React from "react";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  className = "",
  href,
  target,
  rel,
  download,
  onClick,
  type = "button",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-5 py-2.5 text-base gap-2.5"
  };

  const variantStyles = {
    primary:
      "bg-accent hover:bg-accent-light text-background font-semibold shadow-glow-sm hover:shadow-glow-md",
    secondary:
      "bg-surface hover:bg-card border border-border hover:border-accent/40 text-primary hover:text-white",
    outline:
      "bg-transparent hover:bg-surface border border-border hover:border-accent/50 text-secondary hover:text-primary",
    ghost:
      "bg-transparent hover:bg-surface/60 text-secondary hover:text-primary",
    terminal:
      "bg-card/90 hover:bg-card border border-border hover:border-accent text-accent font-mono text-xs"
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : rel}
        download={download}
        className={combinedClass}
        {...props}
      >
        {Icon && iconPosition === "left" && <Icon size={size === "sm" ? 14 : size === "lg" ? 18 : 16} />}
        <span>{children}</span>
        {Icon && iconPosition === "right" && <Icon size={size === "sm" ? 14 : size === "lg" ? 18 : 16} />}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClass} {...props}>
      {Icon && iconPosition === "left" && <Icon size={size === "sm" ? 14 : size === "lg" ? 18 : 16} />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon size={size === "sm" ? 14 : size === "lg" ? 18 : 16} />}
    </button>
  );
}
