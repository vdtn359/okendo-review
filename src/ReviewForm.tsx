import React, { useState } from 'react';
import { IStep, StepHeader } from './shared/step/StepHeader';
import { ReviewStep } from './review/ReviewStep';
import { RatingStep } from '@app/ratings/RatingStep';

const steps: IStep[] = [
	{
		title: 'Review',
		name: 'review',
	},
	{
		title: 'Ratings',
		name: 'ratings',
	},
	{
		title: 'Media',
		name: 'media',
	},
	{
		title: 'Confirm',
		name: 'confirm',
	},
];

interface IProps {
	title: string;
}

const ReviewFormComponent: React.FC<IProps> = ({ title }) => {
	const [step, setStep] = useState(0);
	return (
		<>
			<StepHeader steps={steps} current={step} onStepSelected={onStepSelected}>
				<span className={'color-grey text-big'}>{title}</span>
			</StepHeader>
			<div className={'marg-top-10'}>
				{step === 1 && <ReviewStep onSubmit={nextStep} />}
				{step === 0 && <RatingStep onSubmit={nextStep} />}
			</div>
		</>
	);

	function onStepSelected(selectedStep) {
		if (selectedStep < step) {
			setStep(selectedStep);
		}
	}

	function nextStep() {
		setStep(step + 1);
	}
};

export const ReviewForm = ReviewFormComponent;
