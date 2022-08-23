// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// export const PublicRoutes = ({children}) => {
//    const auth = useAuth();

//    // if(auth.user.role === 'ADMIN_ROLE') {
//    //  return <Navigate to='/users' /> 
//    // }else if (auth.user.role === 'USER_ROLE'){
//    //  return <Navigate to='/' />
//    // }else {
//    //  return children
//    // }
// // //    return (
// // //     //  (auth.role !== 'USER_ROLE' && auth.role !== 'ADMIN_ROLE' ) ? children : <Navigate to='/' replace />
// // //      !auth.user ? children : <Navigate to='/' replace />
//          return(
//             !auth.user ? children :
//                                     auth.user.role === 'ADMIN_ROLE' ? <Navigate to='/user'  /> :  <Navigate to='/' />
//          )
     
// // //   )
// }
