import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const AdminRoutes = ({children}) => {
   const auth = useAuth();
   return (
     (auth.role === 'ADMIN_ROLE') ? children : <Navigate to='/' replace />
  )
}
