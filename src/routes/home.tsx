import { HomeHeader, HomeSearchBar } from "@/components/app/home";
import { HOME_ROUTE } from "@/consts/routes";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(HOME_ROUTE)({
  component: Home,
})

function Home() {
  return (
    <div className='flex flex-col w-screen h-screen items-center justify-center'>
      <HomeHeader />
      <HomeSearchBar />
    </div>
  )
}