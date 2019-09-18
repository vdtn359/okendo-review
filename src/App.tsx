import React from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import './styles.scss';
import { createAppStore } from '@app/store';
import { ReviewForm } from './ReviewForm';

const store = createAppStore();

export const App: React.FC<any> = function() {
	const title = '1815 Rose Gold Chronograph Watch - Brown Croco Strap';
	return (
		<div className={'background'}>
			<Helmet>
				<title>{`Reviewing ${title}`}</title>
			</Helmet>
			<Provider store={store}>
				<ReviewForm title={title} />
			</Provider>
		</div>
	);
};
