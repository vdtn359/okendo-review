import { SAVE_RATING_FORM, SAVE_REVIEW_FORM } from "@app/action/action.constants";

const initialState = {
	review: {},
	rating: {},
};

export function reviewFormReducer(state = initialState, action) {
	switch (action.type) {
		case SAVE_REVIEW_FORM:
			return {
				...state,
				review: action.payload,
			};
		case SAVE_RATING_FORM:
			return {
				...state,
				rating: action.payload,
			};
	}
	return state;
}
