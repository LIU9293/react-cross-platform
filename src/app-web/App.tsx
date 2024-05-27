import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { Homepage } from "@/containers/homepage"
import { AuthContainer } from '@/containers/auth-container'
import { Dialog, DialogContent } from "@/components/ui/dialog"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/room-detail/:id",
    element: <div>Room Detail</div>,
  }
])

export default function App() {
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false)
  
  const onShowLoginDialog = () => {
    setIsLoginDialogOpen(true)
  }

  return (
    <div className="p-2 flex flex-col items-center">
      <RouterProvider router={router} />
      <Dialog open={isLoginDialogOpen} onOpenChange={value => {
        setIsLoginDialogOpen(value)
      }}>
        <DialogContent>
          <AuthContainer />
        </DialogContent>
      </Dialog>
    </div>
  )
}