import React, { useState } from 'react';
import { range } from '@app/utils/array';
import cn from 'classnames';
import { noop } from '@app/utils/object';
import styles from './Star.scss';

interface IProps {
	label: string;
	maxStars?: number;
	value?: number;
	onChange?: (event, { value }: { value: number }) => void;
	error: string;
}

const StarComponent: React.FC<IProps> = ({ maxStars = 5, value = 0, label, onChange = noop, error }) => {
	const [currentStars, setCurrentStar] = useState(value);
	return (
		<>
			<div
				className={cn({
					error: !!error,
				})}
			>
				{label}
			</div>
			<div className={styles.starContainer} onMouseLeave={() => onMouseLeave()}>
				{range(0, maxStars).map((star, index) => {
					return (
						<span
							key={star}
							className={cn(styles.star, {
								[styles.starChecked]: index + 1 <= currentStars,
								[styles.starHalf]: index + 1 > currentStars && index < currentStars,
							})}
							onMouseMove={e => onMouseMove(e, index)}
							onClick={event => onMouseClick(event)}
						>
							☆
						</span>
					);
				})}
			</div>
			{error && <span className={'error-text'}>{error}</span>}
		</>
	);

	function onMouseMove(e: React.MouseEvent, index) {
		if (isWithinFirstHalf(e)) {
			setCurrentStar(index + 1 - 0.5);
		} else {
			setCurrentStar(index + 1);
		}
	}

	function onMouseLeave() {
		setCurrentStar(value);
	}

	function onMouseClick(e) {
		onChange(e, { value: currentStars });
	}

	function isWithinFirstHalf(event: React.MouseEvent) {
		return event.nativeEvent.offsetX <= (event.currentTarget as any).offsetWidth / 2;
	}
};

export const Star = StarComponent;
