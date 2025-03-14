
import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-logo-blue group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          success: 
            "group-[.toast]:bg-green-50 group-[.toast]:text-green-700 group-[.toast]:border-green-200",
          error: 
            "group-[.toast]:bg-logo-red-50 group-[.toast]:text-logo-red-700 group-[.toast]:border-logo-red-200",
          info: 
            "group-[.toast]:bg-logo-blue-50 group-[.toast]:text-logo-blue-700 group-[.toast]:border-logo-blue-200",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
