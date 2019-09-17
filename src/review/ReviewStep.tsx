import React from 'react';
import { Star } from '@app/shared/stars/Star';
import { FormField } from '@app/shared/forms/FormField';
import { Formik } from 'formik';
import { Input } from '@app/shared/forms/InputField';
import { TextArea } from '@app/shared/forms/TextAreaField';
import { noop } from '@app/utils/object';
import { YesNoButton } from '@app/shared/buttons/YesNoButton';

const ReviewStepComponent: React.FC<any> = () => {
	return (
		<Formik onSubmit={noop} initialValues={{}}>
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
				</form>
			)}
		</Formik>
	);
};

export const ReviewStep = ReviewStepComponent;
