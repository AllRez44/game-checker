import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";

type SearchBarProps = Omit<React.ComponentProps<"div">, "children">

function SearchBar({ className, ...props }: SearchBarProps) {
  return (
    <div
      className={cn("w-full max-w-lg", className)}
      {...props}
    >
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupButton>Search</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export { SearchBar as HomeSearchBar, type SearchBarProps as HomeSearchBarProps }