import { ReactNode } from "react"
import { Box } from "@mui/material"
import { useAuthContext } from "../../contexts";


interface ILoginProps {
  children: ReactNode;
}
export const Login: React.FC<ILoginProps> = ({ children }) => {
  const { isAuthenticated } = useAuthContext();


  if (isAuthenticated) return (
    <>{children}</>
  )

  return (
    <Box>
      Login
    </Box>
  )
}
