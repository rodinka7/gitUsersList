import { combineReducers } from 'redux';
import { createActions, handleActions} from 'redux-actions';
import { createSelector } from 'reselect';
import { getUsersApi, getUserLocation } from '../api';
import * as R from 'ramda';

export const getError = state => state.error;

const usersSelector = state => state.users;
export const getUsers = createSelector(
    usersSelector,
    users => users
);

export const {
    fetchRequest,
    fetchSuccess,
    fetchFailed
} = createActions(
    'FETCH_REQUEST',
    'FETCH_SUCCESS',
    'FETCH_FAILED'
);

export const { clearError } = createActions('CLEAR_ERROR');

const users = handleActions({
    [fetchRequest]: () => [],
    [fetchSuccess]: (_, action) => action.payload,
    [fetchFailed]: () => []
}, []);

const error = handleActions({
    [fetchRequest]: () => false,
    [fetchSuccess]: () => false,
    [fetchFailed]: (_, action) => action.payload,
    [clearError]: () => false
}, false);

export const getUsersThunk = token => {
    return dispatch => {
        dispatch(fetchRequest());

        getUserLocation(token)
        .then(response => {
            if (response.message){
                dispatch(fetchFailed(response.message));
            } else {
                const location = R.path(['data', 'viewer', 'location'], response);

                if (!location){
                    dispatch(fetchFailed(`User doesn't have any mentioned location in GitHub profile! It's impossible to get GitHub users ...`));
                } else {
                    getUsersApi(location)
                    .then(response => {
                        if (response.message){
                            dispatch(fetchFailed(response.message));
                        } else {
                            const users = R.path(['data', 'search', 'nodes'], response);

                            if (!users)
                                dispatch(fetchFailed(`There are no users with ${location} location ...`));
                            else
                                dispatch(fetchSuccess(users));
                        }
                    })
                    .catch(err => {
                        dispatch(fetchFailed(err.message));
                    })
                }
            }
        })
        .catch(err => {
            dispatch(fetchFailed(err.message));
        })
    }
};

export default combineReducers({
    users,
    error
});