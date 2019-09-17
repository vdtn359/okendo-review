import React from 'react';
import { Star } from '@app/shared/stars/Star';
import { FormField } from '@app/shared/forms/FormField';
import { Formik } from 'formik';
import { Input } from '@app/shared/forms/InputField';
import { TextArea } from '@app/shared/forms/TextAreaField';
import { noop } from '@app/utils/object';

const ReviewStepComponent: React.FC<any> = () => {
	return (
		<div className={'container container--white pad-20'}>
			<Formik onSubmit={noop} initialValues={{}}>
				{props => (
					<form onSubmit={props.handleSubmit}>
						<div className={'form-group'}>
							<FormField name={'rating'} component={Star} componentProps={{ label: 'Your ratings' }} />
						</div>
						<div className={'form-group'}>
							<FormField
								name={'reviewTitle'}
								component={Input}
								componentProps={{ label: 'Review Title' }}
							/>
						</div>
						<div className={'form-group'}>
							<FormField
								name={'reviewBody'}
								component={TextArea}
								componentProps={{ label: 'Your Review' }}
							/>
						</div>
					</form>
				)}
			</Formik>
		</div>
	);
};

export const ReviewStep = ReviewStepComponent;
