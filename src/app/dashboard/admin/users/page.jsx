import UsersAdminTable from '@/components/dashboard/UsersAdminTable';
import { getUsersList } from '@/lib/api/users';
import React from 'react';

const AdminUsersPage = async() => {
    const data = await getUsersList();
    const users = data?.users || [];

    return (
        <div>
            <h2>Users: {users.length}</h2>
            <UsersAdminTable users={users} />
        </div>
    );
};

export default AdminUsersPage;