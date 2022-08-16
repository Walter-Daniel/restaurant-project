import React from 'react'
import { useAuth } from '../../context/AuthContext';

export const AdminRoutes = ({user}) => {
    const auth = useAuth();

    if(user === 'ADMIN_ROLE') {
        return children
       }else {<Navigate to='/login' replace />}
}
