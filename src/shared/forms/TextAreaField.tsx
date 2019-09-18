import React from 'react';
import styles from './TextAreaField.scss';
import cn from 'classnames';

const TextAreaComponent: React.FC<any> = ({ label, name, onChange, error, ...props }) => {
	return (
		<div className={styles.field}>
			{label && (
				<label
					className={cn(styles.fieldLabel, {
						error: !!error,
					})}
					htmlFor={name}
				>
					{label}
				</label>
			)}
			<textarea
				className={cn('marg-top-5', styles.fieldInput, {
					[styles.fieldInputError]: error,
				})}
				onChange={e => onChange(e, { value: e.target.value })}
				{...props}
			/>
			{error && <span className={'error-text'}>{error}</span>}
		</div>
	);
};

export const TextArea = TextAreaComponent;
