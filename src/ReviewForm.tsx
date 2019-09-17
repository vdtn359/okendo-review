import React from 'react';
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
	return (
		<StepHeader steps={steps} current={1}>
			{title}
		</StepHeader>
	);
};

export const ReviewForm = ReviewFormComponent;
