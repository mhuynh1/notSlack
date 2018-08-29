import React from 'react';
import UserInfo from './UserInfo';
import RoomList from './RoomList';

const Sidebar = ({ user, signOut, rooms, users }) => {

    return (
        <aside className="Sidebar" style={styles.sidebar}>
            <UserInfo
                signOut={signOut}
                user={user} />
            <h1 style={styles.h1}>babble </h1>
            <RoomList rooms={rooms} users={users}/>
        </aside>
    )
}

const styles = {
    sidebar: {
        backgroundColor: '#333344',
        color: 'rgba(255, 255, 255, 0.8)',
        width: '12rem',
        padding: '1rem 0',
        display: 'flex',
        flexDirection: 'column'
    },

    h1: {
        color: 'white',
        fontSize: '1.2rem',
        marginTop: 0,
        padding: '0 1rem'
    }

}


export default Sidebar;