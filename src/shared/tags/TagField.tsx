import React from "react";
import cn from "classnames";
import styles from "./TagField.scss";

interface IProps {
	value: string[];
	tags: string[];
	multiple: boolean;
	error: string;
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
	error,
	onChange,
	maxSelection = Number.MAX_VALUE,
}) => {
	if (!selectedValues) {
		selectedValues = [];
	}
	return (
		<div className={styles.tagField}>
			{label && (
				<div
					className={cn(styles.tagFieldLabel, {
						error: !!error,
					})}
				>
					{label}
				</div>
			)}
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
			{error && <span className={'error-text'}>{error}</span>}
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
