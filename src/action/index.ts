import { SAVE_RATING_FORM, SAVE_REVIEW_FORM } from '@app/action/action.constants';

export const saveReviewForm = formData => ({
	type: SAVE_REVIEW_FORM,
	payload: formData,
});

export const saveRatingForm = formData => ({
	type: SAVE_RATING_FORM,
	payload: formData,
});
