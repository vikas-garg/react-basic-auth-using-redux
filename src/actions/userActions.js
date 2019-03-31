import * as userSyncAction from "./sync/userActions";
import userServices from "../api/userServices";

const auth = _data => {
	return (dispatch, getState) => {
		dispatch(userSyncAction.startUSERFetch());
		return userServices
			.auth(_data)
			.then(response => {
				dispatch(userSyncAction.updateUSERFetch(response.token));
			})
			.catch(err => {
				dispatch(userSyncAction.errorUSERFetch(err));
			});
	};
};

const userActions = {
	auth
};

export default userActions;
