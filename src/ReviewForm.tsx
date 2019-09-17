import React, { useState } from 'react';
import { IStep, StepHeader } from './shared/StepHeader';

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
		<StepHeader steps={steps} current={step} onStepSelected={onStepSelected}>
			<span className={'color-grey text-big'}>{title}</span>
		</StepHeader>
	);

	function onStepSelected(selectedStep) {
		if (selectedStep < step) {
			setStep(selectedStep);
		}
	}
};

export const ReviewForm = ReviewFormComponent;
