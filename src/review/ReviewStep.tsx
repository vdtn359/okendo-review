import React from 'react';
import { Star } from '@app/shared/stars/Star';
import { FormField } from '@app/shared/forms/FormField';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { Input } from '@app/shared/forms/InputField';
import { TextArea } from '@app/shared/forms/TextAreaField';
import { YesNoButton } from '@app/shared/buttons/YesNoButton';
import { getSchemaByType } from 'yup-decorator';
import { ReviewModel } from '@app/review/review.model';
import { saveReviewForm } from '@app/action';

interface IProps {
	onSubmit: () => void;
	review: ReviewModel;
	saveReviewForm: (form: ReviewModel) => void;
}
const ReviewStepComponent: React.FC<IProps> = ({ onSubmit, review, saveReviewForm }) => {
	return (
		<Formik
			onSubmit={values => {
				saveReviewForm(values);
				onSubmit();
			}}
			initialValues={review}
			validationSchema={getSchemaByType(ReviewModel)}
		>
			{props => (
				<form onSubmit={props.handleSubmit}>
					<div className={'container container--white pad-20'}>
						<div className={'form-group'}>
							<FormField name={'rating'} component={Star} componentProps={{ label: 'Your ratings' }} />
						</div>
						<div className={'form-group'}>
							<FormField
								name={'reviewTitle'}
								component={Input}
								componentProps={{ label: 'Review Title', id: 'reviewTitle' }}
							/>
						</div>
						<div className={'form-group'}>
							<FormField
								name={'reviewBody'}
								component={TextArea}
								componentProps={{ label: 'Your Review', id: 'reviewBody' }}
							/>
						</div>
						<div className={'form-group'}>
							<FormField
								name={'recommend'}
								component={YesNoButton}
								componentProps={{
									label: 'Would you recommend this product?',
								}}
							/>
						</div>
					</div>
					<div className={'container text-align-center marg-top-30 pad-bottom-20'}>
						<div>
							By continuing you agree to our{' '}
							<a className={'link'} href={'https://www.okendo.io/end-user-terms/'}>
								Terms and Conditions
								<i className="fas fa-external-link-alt" />
							</a>
							, and{' '}
							<a className={'link'} href={'https://www.okendo.io/privacy-policy/'}>
								Privacy Policy
								<i className="fas fa-external-link-alt" />
							</a>{' '}
						</div>
						<button type={'submit'} className={'btn-cta marg-top-20'}>
							Agree & Continue
						</button>
					</div>
				</form>
			)}
		</Formik>
	);
};

export const ReviewStep = connect(
	(state, ownProps) => ({ ...ownProps, review: state.reviewForm.review }),
	{
		saveReviewForm,
	}
)(ReviewStepComponent);
