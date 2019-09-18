import { a, is, schema } from 'yup-decorator';

@schema()
export class ReviewModel {
	@is(
		a
			.number()
			.required('Please select a rating')
			.min(1)
			.max(5)
	)
	rating: number;

	@is(
		a
			.string()
			.trim()
			.required('Please enter a title')
	)
	reviewTitle: string;

	@is(
		a
			.string()
			.trim()
			.required('Please enter a review')
	)
	reviewBody: string;

	@is(a.boolean().required('Please enter a recommendation'))
	recommend: boolean;
}
