import React, { useState } from 'react';
import { RatingStep } from '@app/ratings/RatingStep';
import { MediaStep } from '@app/media/MediaStep';
import { ConfirmStep } from '@app/confirm/ConfirmStep';
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
				{step === 0 && <ReviewStep onSubmit={nextStep} />}
				{step === 1 && <RatingStep onSubmit={nextStep} />}
				{step === 2 && <MediaStep onSubmit={nextStep} />}
				{step === 3 && <ConfirmStep onSubmit={submit} />}
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

	function submit() {
		//TODO dosomething
	}
};

export const ReviewForm = ReviewFormComponent;
