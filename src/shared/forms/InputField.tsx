import React from 'react';
import styles from './InputField.scss';

const InputComponent: React.FC<any> = ({ label, name, onChange, ...props }) => {
	return (
		<div className={styles.field}>
			<label className={styles.fieldLabel} htmlFor={name}>
				{label}
			</label>
			<input
				className={`marg-top-5 ${styles.fieldInput}`}
				onChange={e => onChange(e, { value: e.target.value })}
				{...props}
			/>
		</div>
	);
};

export const Input = InputComponent;
