import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { Homepage } from "@/containers/homepage"
import { Profile } from "@/containers/profile"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  }
])

export default function App() {
  return (
    <div className="p-2 flex flex-col items-center">
      <RouterProvider router={router} />
    </div>
  )
}