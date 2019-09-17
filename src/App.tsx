import React from 'react';
import { Helmet } from 'react-helmet';
import './styles.scss';
import { ReviewForm } from './ReviewForm';

export const App: React.FC<any> = function() {
	const title = '1815 Rose Gold Chronograph Watc - Brown Croco Strap';
	return (
		<div className={'container'}>
			<Helmet>
				<title>{`Reviewing ${title}`}</title>
			</Helmet>
			<ReviewForm title={title} />
		</div>
	);
};
