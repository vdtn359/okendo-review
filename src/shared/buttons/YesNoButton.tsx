import React from 'react';
import cn from 'classnames';
import styles from './YesNoButton.scss';

interface IProps {
	label: string;
	checked?: boolean;
	onChange: (e: any, { checked: boolean }) => void;
	error: string;
}

const YesNoButtonComponent: React.FC<IProps> = ({ label, checked, onChange, error }) => {
	return (
		<>
			<label
				className={cn(styles.fieldLabel, {
					error: !!error,
				})}
			>
				{label}
			</label>
			<div className={styles.btnContainer}>
				<div
					className={cn(`${styles.btnToggle}`, {
						[styles.btnToggleSelected]: checked === true,
					})}
					onClick={e => onChange(e, { checked: true })}
				>
					YES
				</div>
				<div
					className={cn(`${styles.btnToggle}`, {
						[styles.btnToggleSelected]: checked === false,
					})}
					onClick={e => onChange(e, { checked: false })}
				>
					NO
				</div>
			</div>
			{error && <span className={'error-text'}>{error}</span>}
		</>
	);
};

export const YesNoButton = YesNoButtonComponent;
