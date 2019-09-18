import { combineReducers, createStore } from 'redux';
import { reviewFormReducer } from '@app/reducers/review-form.reducer';

export function createAppStore() {
	return createStore(
		combineReducers({
			reviewForm: reviewFormReducer,
		})
	);
}
