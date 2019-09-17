import React from 'react';
import styles from './SelectField.scss';

const SelectComponent: React.FC<any> = ({ options = [], value, label, name, onChange, ...props }) => {
	return (
		<div className={styles.field}>
			<label className={styles.fieldLabel} htmlFor={name}>
				{label}
			</label>
			<select
				id={name}
				name={name}
				className={`marg-top-5 ${styles.fieldSelect}`}
				onChange={e => onChange(e, { value: e.target.value })}
			>
				<option value="" disabled={true}>
					Choose a value
				</option>
				{options.map(option => (
					<option value={option} key={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};

export const Select = SelectComponent;
