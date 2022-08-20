import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const AppRouter = ({children}) => {
   const auth = useAuth();
   return (
     (auth.role === 'USER_ROLE') ? children : <Navigate to='/login' replace />
  )
}