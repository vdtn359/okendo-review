import React from 'react';
import cn from 'classnames';
import styles from './TagField.scss';

interface IProps {
	value: string[];
	tags: string[];
	multiple: boolean;
	label?: string;
	sublabel?: any;
	maxSelection?: number;
	onChange: (e: any, { value }: { value: string[] }) => void;
}

const TagFieldComponent: React.FC<IProps> = ({
	value: selectedValues,
	tags,
	multiple,
	label,
	sublabel,
	onChange,
	maxSelection = Number.MAX_VALUE,
}) => {
	if (!selectedValues) {
		selectedValues = [];
	}
	return (
		<div className={styles.tagField}>
			<div className={styles.tagFieldLabel}>{label}</div>
			<div className={styles.tagFieldSubLabel}>{sublabel}</div>
			<div className={styles.tagFieldTagList}>
				{tags.map(value => (
					<div
						className={cn(styles.tagFieldTag, {
							[styles.tagFieldTagSelected]: selectedValues.includes(value),
							[styles.tagFieldTagDisabled]:
								!selectedValues.includes(value) && selectedValues.length >= maxSelection,
						})}
						key={value}
						onClick={e => onOptionClick(e, value)}
					>
						{value}
					</div>
				))}
			</div>
		</div>
	);

	function onOptionClick(e, value) {
		if (multiple) {
			if (selectedValues.includes(value)) {
				const newValues = selectedValues.filter(element => element !== value);
				onChange(e, { value: newValues });
			} else if (selectedValues.length < maxSelection) {
				const newValues = selectedValues.concat(value);
				onChange(e, { value: newValues });
			}
		} else {
			const newValues = [value];
			onChange(e, { value: newValues });
		}
	}
};

export const TagField = TagFieldComponent;
