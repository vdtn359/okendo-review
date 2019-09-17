import React from 'react';
import { Star } from '@app/shared/stars/Star';

const ReviewStepComponent: React.FC<any> = () => {
	return (
		<div className={'container container--white pad-20'}>
			<div>Your ratings</div>
			<Star value={2} />
		</div>
	);
};

export const ReviewStep = ReviewStepComponent;
