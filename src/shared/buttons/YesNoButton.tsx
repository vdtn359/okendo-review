import React from 'react';
import cn from 'classnames';
import styles from './YesNoButton.scss';

interface IProps {
	label: string;
	checked?: boolean;
	onChange: (e: any, { checked: boolean }) => void;
}

const YesNoButtonComponent: React.FC<IProps> = ({ label, checked, onChange }) => {
	return (
		<>
			<label>{label}</label>
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
		</>
	);
};

export const YesNoButton = YesNoButtonComponent;
