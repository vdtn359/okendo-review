import React from "react";
import cn from "classnames";
import styles from "./SelectField.scss";

const SelectComponent: React.FC<any> = ({
	options = [],
	value: selectedValue,
	label,
	name,
	onChange,
	error,
	...props
}) => {
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
			<select
				value={selectedValue}
				id={name}
				name={name}
				className={`marg-top-5 ${styles.fieldSelect}`}
				onChange={e => onChange(e, { value: e.target.value })}
				{...props}
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
			{error && <span className={'error-text'}>{error}</span>}
		</div>
	);
};

export const Select = SelectComponent;
