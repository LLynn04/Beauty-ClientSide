import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  onClick,
  className = "",
  type = "button",
  ...props
}) => {
  const baseClasses =
    "font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-violet-500/50 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95";

  const variants = {
    primary:
      "bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105",
    secondary:
      "bg-transparent border-2 border-violet-500 text-violet-400 hover:bg-violet-500 hover:text-white hover:scale-105",
    outline:
      "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black hover:scale-105",
    ghost:
      "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:scale-105",
    gradient:
      "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105",
    danger:
      "bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:scale-105",
    success:
      "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105",
    glow: "bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-500/50 hover:shadow-violet-500/75 hover:scale-105 animate-pulse",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

// Example usage component to showcase all variants
const ButtonShowcase = () => {
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Button Component Showcase
          </h1>
          <p className="text-gray-400">
            Violet-themed buttons for black background
          </p>
        </div>

        {/* Primary Variants */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-violet-400">
            Primary Variants
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary Button</Button>
            <Button variant="gradient">Gradient Button</Button>
            <Button variant="glow">Glowing Button</Button>
          </div>
        </div>

        {/* Secondary Variants */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-violet-400">
            Secondary Variants
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
          </div>
        </div>

        {/* Status Variants */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-violet-400">
            Status Variants
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="success">Success Button</Button>
            <Button variant="danger">Danger Button</Button>
          </div>
        </div>

        {/* Sizes */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-violet-400">
            Button Sizes
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="sm">
              Small
            </Button>
            <Button variant="primary" size="md">
              Medium
            </Button>
            <Button variant="primary" size="lg">
              Large
            </Button>
            <Button variant="primary" size="xl">
              Extra Large
            </Button>
          </div>
        </div>

        {/* States */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-violet-400">
            Button States
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Normal</Button>
            <Button variant="primary" loading>
              Loading Button
            </Button>
            <Button variant="primary" disabled>
              Disabled Button
            </Button>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-violet-400">
            Usage Examples
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="gradient" size="lg">
              Shop Now
            </Button>
            <Button variant="outline" size="lg">
              View Catalog
            </Button>
            <Button variant="secondary">Learn More</Button>
            <Button variant="ghost">Sign In</Button>
          </div>
        </div>

        {/* Code Example */}
        <div className="bg-gray-900 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-violet-400 mb-4">
            Usage Example:
          </h3>
          <pre className="text-gray-300 text-sm overflow-x-auto">
            <code>{`import Button from './Button';

// Basic usage
<Button variant="primary" size="lg" onClick={handleClick}>
  Click Me
</Button>

// With loading state
<Button variant="gradient" loading={isLoading} disabled={isLoading}>
  Submit Form
</Button>

// Custom styling
<Button variant="outline" className="w-full" size="xl">
  Full Width Button
</Button>`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Button;
