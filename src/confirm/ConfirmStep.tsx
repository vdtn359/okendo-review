import React, { useState } from "react";
import cn from "classnames";
import { Formik } from "formik";
import { FormField } from "@app/shared/forms/FormField";
import { Input } from "@app/shared/forms/InputField";
import { getSchemaByType } from "yup-decorator";
import { GuessLoginModel } from "@app/confirm/confirm.model";
import styles from "./ConfirmStep.scss";

interface IProps {
	onSubmit: () => void;
}

const ConfirmStepComponent: React.FC<IProps> = ({ onSubmit }) => {
	const [guestLogin, setGuestLogin] = useState(false);
	return (
		<div className={'container container--white pad-20'}>
			<h3 className={'marg-bottom-5'}>Add your profile picture to your review!</h3>
			<div>This helps other shoppers by adding authenticity to your review</div>
			<button className={cn(styles.btnSignin, styles.btnSigninGoogle)}>Connect with Google +</button>
			<button className={cn(styles.btnSignin, styles.btnSigninFacebook)}>Connect with Facebook</button>

			<div className={'separator marg-vert-20'}>OR</div>
			{!guestLogin && (
				<button className={cn(styles.btnSignin, styles.btnSigninGuest)} onClick={() => setGuestLogin(true)}>
					Continue as Guest
				</button>
			)}
			{guestLogin && (
				<Formik onSubmit={loginGuest} initialValues={{}} validationSchema={getSchemaByType(GuessLoginModel)}>
					{props => (
						<form className={styles.guestForm} onSubmit={props.handleSubmit}>
							<div>Continue as Guest</div>
							<div className={'form-group'}>
								<FormField name={'name'} component={Input} componentProps={{ placeholder: 'Name' }} />
							</div>
							<div className={'form-group'}>
								<FormField
									name={'email'}
									component={Input}
									componentProps={{ placeholder: 'Email Address' }}
								/>
							</div>
							<button type={'submit'} className={'btn-cta btn-cta--small marg-top-10'}>
								Continue
							</button>
							<div className={'marg-top-10 text-align-center'}>
								Your email address will not be published
							</div>
						</form>
					)}
				</Formik>
			)}
		</div>
	);
	function loginGuest() {
		//TODO: do something
		onSubmit();
	}
};

export const ConfirmStep = ConfirmStepComponent;
