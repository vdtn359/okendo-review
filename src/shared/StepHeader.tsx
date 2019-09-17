import React from 'react';
import styles from './StepHeader.scss';

interface IProps {
	steps: IStep[];
	current: number;
}

const StepHeaderComponent: React.FC<IProps> = ({ steps, current, children }) => {
	return (
		<div className={styles.stepHeader}>
			{children}
			{steps.map(step => {
				return <div key={step.name}>{step.title}</div>;
			})}
		</div>
	);
};

export interface IStep {
	title: string;
	name: string;
}

export const StepHeader = StepHeaderComponent;
