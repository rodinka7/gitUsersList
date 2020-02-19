import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getUsersThunk } from '../../reducers';
import { Input, Div } from '../../elements';

class Auth extends PureComponent {
    state = {
        token: ''
    };

    handleInputChange = e => {
        const token = e.target.value;
        this.setState(state => ({
            token
        }));
    };

    handleKeyDown = e => {
        if (e.key !== 'Enter') return;
        this.props.getUsersThunk(this.state.token);
    }

    render() {
        return (
            <div onKeyDown={this.handleKeyDown}>
                <Div>Enter your GitHub personal key token to get 10 most popular GitHub users in your city.</Div>
                <Div>Press ENTER after</Div>
                <Input
                    value={this.state.city}
                    onChange={this.handleInputChange}
                />
            </div>
        )
    }
}

export default connect(
    undefined,
    { getUsersThunk }
)(Auth);

