import React from 'react';
import { asyncConnect } from 'redux-connect';

import { isLoaded as isAuthLoaded } from 'store/modules/auth';
import { load as loadUser,
         isLoaded as isUserLoaded,
         updatePassword,
         deleteUser } from 'store/modules/user';

import { UserSettingsUI } from 'components/siteComponents';


const preloadData = [
  {
    promise: ({ store: { dispatch, getState } }) => {
      const state = getState();

      if (isAuthLoaded(state) && !isUserLoaded(state)) {
        return dispatch(loadUser(state.app.getIn(['auth', 'user', 'username'])));
      }

      return undefined;
    }
  }
];

const mapStateToProps = ({ app }) => {
  return {
    deleting: app.getIn(['user', 'deleting']),
    deleteError: app.getIn(['user', 'deleteError']),
    user: app.get('user')
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    updatePass: (currPass, newPass, newPass2) => dispatch(updatePassword(currPass, newPass, newPass2)),
    deleteUser: (user) => {
      // TODO: add Tests
      return dispatch(deleteUser(user)).then(() => props.history.push('/_logout'));
    }
  };
};

export default asyncConnect(
  preloadData,
  mapStateToProps,
  mapDispatchToProps
)(UserSettingsUI);
