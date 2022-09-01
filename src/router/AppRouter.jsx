import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const AppRouter = ({children}) => {
  const auth = useAuth();
  
  if(!auth.user){
    return <Navigate to='/login' replace />
  }
  return (auth.user.role === 'USER_ROLE') ? children : <Navigate to='/users' />;
  
}
