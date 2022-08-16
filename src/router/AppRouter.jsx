import { Navigate } from 'react-router-dom';
import { AdminRoutes } from '../admin/routes/AdminRoutes';
import { useAuth } from '../context/AuthContext';

export const AppRouter = ({children}) => {
   const auth = useAuth();
  //  if(auth.role === 'USER_ROLE') {
  //   return children
  //  }else if(auth.role ==='ADMIN_ROLE'){
  //   return <Navigate to='/users' />
  //  }else {
  //   <Navigate to='/login' replace />
  //  }
    
   
   return (
     auth.user ? children : <Navigate to='/login' replace />
  )
}
