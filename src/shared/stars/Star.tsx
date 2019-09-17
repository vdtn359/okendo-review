import React, { useState } from 'react';
import { range } from '@app/utils/array';
import cn from 'classnames';
import { noop } from '@app/utils/object';
import styles from './Star.scss';

interface IProps {
	maxStars?: number;
	value?: number;
	onChange?: (value: number) => void;
}

const StarComponent: React.FC<IProps> = ({ maxStars = 5, value = 0, onChange = noop }) => {
	const [currentStars, setCurrentStar] = useState(value);
	return (
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
						onClick={() => onMouseClick()}
					>
						☆
					</span>
				);
			})}
		</div>
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

	function onMouseClick() {
		onChange(currentStars);
	}

	function isWithinFirstHalf(event: React.MouseEvent) {
		return event.nativeEvent.offsetX <= (event.currentTarget as any).offsetWidth / 2;
	}
};

export const Star = StarComponent;
