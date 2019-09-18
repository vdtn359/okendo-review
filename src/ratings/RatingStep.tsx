import React from 'react';
import { FormField } from '@app/shared/forms/FormField';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { NumberRange } from '@app/shared/number/NumberRangeField';
import { TagField } from '@app/shared/tags/TagField';
import { Select } from '@app/shared/forms/SelectField';
import { COUNTRIES } from '@app/shared/countries';
import { getSchemaByType } from 'yup-decorator';
import { RatingModel } from '@app/ratings/rating.model';
import { saveRatingForm } from '@app/action';

interface IProps {
	onSubmit: () => void;
	rating: RatingModel;
	saveRatingForm: (formData: RatingModel) => void;
}

const PRODUCT_STANDOUT = [
	'Accurate Timekeeping',
	'High Quality',
	'Durable',
	'Elegant',
	'Good Weight',
	'Versatile',
	'Looks Expensive',
	'Attracts Compliments',
	'Unique',
	'Great Gift',
	'Great Value',
];

const AGE_RANGES = ['Under 18', '18 - 24', '25 - 34', '35 - 44', '45 - 54', '55 - 64', '65+'];
const BOUGHT_FOR = ['Personal Use', 'Gift'];

const RatingStepComponent: React.FC<IProps> = ({ onSubmit, rating, saveRatingForm }) => {
	return (
		<Formik
			onSubmit={values => {
				saveRatingForm(values);
				onSubmit();
			}}
			initialValues={{
				productStandout: [],
				country: 'Australia',
				...rating,
			}}
			validationSchema={getSchemaByType(RatingModel)}
		>
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
						<div className={'form-group pad-top-20'}>
							<FormField
								name={'productStandout'}
								component={TagField}
								componentProps={{
									tags: PRODUCT_STANDOUT,
									label: 'Product Standouts',
									sublabel: 'Choose up to 5 that best apply (optional)',
									multiple: true,
									maxSelection: 5,
								}}
							/>
						</div>
						<h4 className={'marg-top-20'}>About you</h4>
						<div className={'form-group'}>
							<FormField
								name={'ageGroup'}
								component={TagField}
								componentProps={{
									label: 'Age range',
									sublabel: (
										<span>
											Choose <b>one</b>
										</span>
									),
									tags: AGE_RANGES,
								}}
							/>
						</div>
						<div className={'form-group pad-top-20'}>
							<FormField
								name={'boughtFor'}
								component={TagField}
								componentProps={{
									label: 'Bought For',
									sublabel: (
										<span>
											Choose <b>one</b>
										</span>
									),
									tags: BOUGHT_FOR,
								}}
							/>
						</div>
						<div className={'form-group pad-top-20'}>
							<FormField
								name={'country'}
								component={Select}
								componentProps={{
									label: 'Country',
									options: COUNTRIES,
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

export const RatingStep = connect(
	(state, ownProps) => ({ ...ownProps, rating: state.reviewForm.rating }),
	{
		saveRatingForm,
	}
)(RatingStepComponent);
