import React from 'react';
import { Star } from '@app/shared/stars/Star';
import { FormField } from '@app/shared/forms/FormField';
import { Formik } from 'formik';
import { Input } from '@app/shared/forms/InputField';
import { TextArea } from '@app/shared/forms/TextAreaField';
import { YesNoButton } from '@app/shared/buttons/YesNoButton';
import { NumberRange } from '@app/shared/number/NumberRangeField';

interface IProps {
	onSubmit: () => void;
}
const RatingStepComponent: React.FC<IProps> = ({ onSubmit }) => {
	return (
		<Formik onSubmit={onSubmit} initialValues={{}}>
			{props => (
				<form onSubmit={props.handleSubmit}>
					<div className={'container container--white pad-20'}>
						<div className={'form-group'}>
							<FormField
								name={'quality'}
								component={NumberRange}
								componentProps={{
									label: 'Quality',
									minLabel: 'Poor',
									maxLabel: 'Excellent',
								}}
							/>
						</div>
						<div className={'form-group'}>
							<FormField
								name={'design'}
								component={NumberRange}
								componentProps={{
									label: 'Design',
									minLabel: 'Poor',
									maxLabel: 'Excellent',
								}}
							/>
						</div>
						<div className={'form-group'}>
							<FormField
								name={'experience'}
								component={NumberRange}
								componentProps={{
									label: 'Experience',
									minLabel: 'Poor',
									maxLabel: 'Excellent',
								}}
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
						<button type={'submit'} className={'btn-cta marg-top-20'}>
							Next
						</button>
					</div>
				</form>
			)}
		</Formik>
	);
};

export const RatingStep = RatingStepComponent;
