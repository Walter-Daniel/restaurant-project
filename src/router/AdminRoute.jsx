import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const AdminRoutes = ({children}) => {
   const auth = useAuth();
   
   if(!auth.user){
    return <Navigate to='/login' replace />
   }
   return (
     (auth.user.role === 'ADMIN_ROLE') ? children : <Navigate to='/' replace />
  )
}
