import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../reducers';

import User from '../User';
import { Ul, Li } from '../../elements';

const Users = props => {
    const { users } = props;
    if (!users.length) return '';

    return (
        <Ul>
            {
                users.map(user =>
                    <Li key={user.id}><User data={user} /></Li>
                )
            }
        </Ul>
    )
}

export default connect(state => ({
    users: getUsers(state)
}))(Users);