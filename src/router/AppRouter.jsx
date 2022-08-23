import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const AppRouter = ({children}) => {
   const auth = useAuth();
   return (
     (auth.user.role === 'USER_ROLE') ? children :
                                                  (auth.user.role === 'ADMIN_ROLE') ? <Navigate to='/users' /> : <Navigate to='/login' replace />
  )
}
