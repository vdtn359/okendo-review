import React from "react";

import cn from "classnames";
import styles from "./ButtonList.scss";

interface IProps {
	buttons: IButton[];
}

interface IButton {
	content: any;
	key: string;
	icon?: string;
	onClick?: (e: React.MouseEvent) => void;
}

const ButtonListComponent: React.FC<IProps> = ({ buttons }) => {
	return (
		<div className={styles.buttonList}>
			{buttons.map((button, index) => {
				return (
					<div
						className={cn(styles.buttonListButton, {
							[styles.buttonListButtonActive]: !index,
						})}
						key={button.key}
						onClick={button.onClick}
					>
						<i className={`fas ${button.icon} marg-right-10`} />
						{button.content}
					</div>
				);
			})}
		</div>
	);
};

export const ButtonList = ButtonListComponent;
