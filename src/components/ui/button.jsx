import * as React from "react"
import "./button.css"

const Button = React.forwardRef(({ className = "", variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
  const baseClass = "shadcn-button"
  const variantClass = `shadcn-button--${variant}`
  const sizeClass = `shadcn-button--${size}`
  const combinedClass = `${baseClass} ${variantClass} ${sizeClass} ${className}`.trim()
  
  const Comp = asChild ? "span" : "button"
  return (
    <Comp
      className={combinedClass}
      ref={ref}
      data-as-child={asChild}
      {...props}
    >
      {children}
    </Comp>
  )
})
Button.displayName = "Button"

export { Button }
