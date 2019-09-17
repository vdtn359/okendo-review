import React from 'react';
import { range } from '@app/utils/array';
import cn from 'classnames';
import styles from './NumberRangeField.scss';

interface IProps {
	max?: number;
	minLabel: string;
	maxLabel: string;
	label: string;
	value: number;
	onChange: (e: any, { value }: { value: number }) => void;
}

const NumberRangeComponent: React.FC<IProps> = ({ max = 5, value, minLabel, maxLabel, onChange, label }) => {
	return (
		<div>
			<div>{label}</div>
			<div className={'marg-top-20'}>
				<div className={styles.sliderContainer}>
					<div className={styles.slider} />
					<div className={styles.sliderNums}>
						{range(0, max).map(num => {
							return (
								<span
									className={cn(styles.sliderNum, {
										[styles.sliderNumSelected]: value >= num + 1,
									})}
									key={num}
									onClick={e => onChange(e, { value: num + 1 })}
								>
									{num + 1}
								</span>
							);
						})}
					</div>
				</div>
				<div className={styles.sliderLabels}>
					<span className={styles.sliderLabel}>{minLabel}</span>
					<span className={styles.sliderLabel}>{maxLabel}</span>
				</div>
			</div>
		</div>
	);
};

export const NumberRange = NumberRangeComponent;
