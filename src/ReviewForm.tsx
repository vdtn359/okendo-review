import React, { useState } from 'react';
import { RatingStep } from '@app/ratings/RatingStep';
import { MediaStep } from '@app/media/MediaStep';
import { IStep, StepHeader } from './shared/step/StepHeader';
import { ReviewStep } from './review/ReviewStep';

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
		title: 'Login',
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
				{step === 2 && <ReviewStep onSubmit={nextStep} />}
				{step === 1 && <RatingStep onSubmit={nextStep} />}
				{step === 0 && <MediaStep onSubmit={nextStep} />}
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
