import React from 'react';
import cn from 'classnames';
import { ucfirst } from '../utils/string';
import { noop } from '../utils/object';
import styles from './StepHeader.scss';

interface IProps {
	steps: IStep[];
	current: number;
	onStepSelected?: (stepIndex: number, step?: IStep) => void;
}

const StepHeaderComponent: React.FC<IProps> = ({ steps, current = 0, children, onStepSelected = noop }) => {
	return (
		<div className={styles.stepHeader}>
			<div className={styles.stepHeaderContainer}>
				{children}
				<div className={styles.stepHeaderTitle}>{ucfirst(steps[current].name)}</div>
			</div>
			<nav className={`container ${styles.stepHeaderSteps}`}>
				{steps.map((step, stepIndex) => {
					return (
						<div
							className={cn(styles.stepHeaderStep, {
								[styles.stepHeaderStepCompleted]: stepIndex < current,
								[styles.stepHeaderStepActive]: stepIndex === current,
							})}
							key={step.name}
							onClick={() => onStepSelected(stepIndex, step)}
						>
							{step.title}
						</div>
					);
				})}
			</nav>
		</div>
	);
};

export interface IStep {
	title: string;
	name: string;
}

export const StepHeader = StepHeaderComponent;
