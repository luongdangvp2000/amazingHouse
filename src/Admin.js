import React from 'react'
import { Admin, Resource } from 'react-admin'
import users from './components/users'
import restProvider from 'ra-data-simple-rest';
import { PostList, PostEdit, PostCreate, PostIcon } from './components/posts'

function AdminPage() {
    return (
        <Admin dataProvider={restProvider('http://localhost:3000')}>
            <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        </Admin>
    );
}

export default AdminPage;