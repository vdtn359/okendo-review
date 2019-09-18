import { a, is, schema } from "yup-decorator";

@schema()
export class GuessLoginModel {
	@is(a.string().required('Please enter your name'))
	name: string;

	@is(
		a
			.string()
			.required('Please enter your email')
			.email('Please enter a valid email')
	)
	email: string;
}
