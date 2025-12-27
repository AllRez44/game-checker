import { cn } from "@/lib/utils"

type HomeHeaderProps = Omit<React.ComponentProps<"header">, "children">

function HomeHeader({ className, ...props }: HomeHeaderProps) {
  return (
    <header
      className={cn(
        "flex flex-col items-center justify-center gap-4 px-4 py-6 sm:py-10",
        className
      )}
      {...props}
    >
      <h1 className="text-3xl font-bold sm:text-4xl capitalize">Do you own this game?</h1>
      <p className="text-center text-base text-muted-foreground sm:text-lg">
        Search your game library instantly. Find out if you already own a game across all platforms before making a purchase.
      </p>
    </header>
  )
}

export { HomeHeader, type HomeHeaderProps }