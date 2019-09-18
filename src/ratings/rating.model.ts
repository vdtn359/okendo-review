import { a, is, schema } from "yup-decorator";

@schema()
export class RatingModel {
	@is(
		a
			.number()
			.required('Please select a rating')
			.min(1)
			.max(5)
	)
	quality: number;

	@is(
		a
			.number()
			.required('Please select a rating')
			.min(1)
			.max(5)
	)
	design: number;

	@is(
		a
			.number()
			.required('Please select a rating')
			.min(1)
			.max(5)
	)
	experience: number;

	@is(
		a
			.array()
			.of(a.string())
			.min(0)
			.max(5)
	)
	productStandout: string[];

	@is(
		a
			.string()
			.trim()
			.required('Please select an answer')
	)
	ageGroup: string;

	@is(
		a
			.string()
			.trim()
			.required('Please select an answer')
	)
	boughtFor: string;

	@is(
		a
			.string()
			.trim()
			.required('Please select an answer')
	)
	country: string;
}
