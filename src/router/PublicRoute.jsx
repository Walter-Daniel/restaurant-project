import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const PublicRoute = ({children}) => {
  const auth = useAuth();
  
  if(!auth.user){
    return <Navigate to='/login' replace />
  };

  if(auth.user.role === 'USER_ROLE') {
    return children
  };

  if(auth.user.role === 'ADMIN_ROLE') {
    return <Navigate to='/users' />
  };
 
}
