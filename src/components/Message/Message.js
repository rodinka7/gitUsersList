import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getError, clearError } from '../../reducers';
import { MessageDiv } from '../../elements';

class Message extends PureComponent {
    componentDidUpdate(){
        const { error, clearError } = this.props;
        if (error){
            let timer = setTimeout(() => {
                clearError();
                clearInterval(timer);
            }, 3000);
        }
    }

    render() {
        const { error } = this.props;
        if (!error) return '';

        return (
            error &&
                (
                    <MessageDiv>
                        {error}
                    </MessageDiv>
                )
        );
    }
}

export default connect(state => ({
    error: getError(state)
}), { clearError })(Message);
