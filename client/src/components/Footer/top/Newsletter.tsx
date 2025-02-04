import styles from './newsletter.module.scss'

export default function Newsletter() {
	return (
		<div className={styles.container}>
			<div className={styles.newsletterTop}>
				<div className={styles.newsletterImageBlock}>
					<img src='/postoffice.png' alt='promo image' loading='lazy' width='335' />
					{/* <img
                            src=""
                            alt="leaf graphic"
                            loading="lazy"
                            className={`${styles.newsletterShapeBottom} ${styles.aNLShapeUp}`}
                        /> */}
				</div>

				<div className={styles.newsletterBot}>
					<div className={styles.newsletterCont}>
						<h2 className={styles.newsletterTitle}>Запиши се за бюлетина ни</h2>
					</div>
					<div className={styles.newsletterBlock}>
						<form
							className={`${styles.newsletterForm} ${styles.jsNewsletterForm} ${styles.subscribe}`}
							action=''
							method='post'
							id='newsletter-validate-detail'
						>
							<div className={styles.newsletterFormBlock}>
								<div className={styles.newsletterInputCont}>
									<input
										type='email'
										className={`${styles.newsletterControl} ${styles.jsNewsletterInputs}`}
										name='email'
										placeholder='Твоят имейл адрес'
										id='newsletter-input'
										data-validate="{required:true, 'validate-email':true}"
									/>
									<button
										className={`${styles.button} ${styles.buttonLargeText} ${styles.jsNewsletterBtn}`}
									>
										Запиши ме <span className={styles.spinner}></span>
									</button>
								</div>
							</div>
							<div className={styles.newsletterFormBlock}>
								<input
									type='checkbox'
									name='newsletter-terms-agree'
									id='newsletter-terms-agree'
									value='1'
									className={`${styles.checkRadioInput} ${styles.jsNewsletterInputs}`}
									data-validate='{required:true}'
								/>
								<label
									className={`${styles.checkRadio} ${styles.termsLabel}`}
									htmlFor='newsletter-terms-agree'
								>
									<span className={styles.checkRadioElement}>
										<span className={styles.checkRadioCheck}></span>
										<span className={styles.checkRadioRipple}></span>
										Съгласен съм с{' '}
									</span>
									<a href='/privacy-policy' className={styles.privacyPolicy}>
										Политика за обработка на лични данни.
									</a>
								</label>
							</div>
							<input
								type='hidden'
								name='am-gdpr-checkboxes-from'
								value='subscription'
							/>
						</form>
						<div
							className={`${styles.newsletterMessage} ${styles.jsNewsletterMessage}`}
						>
							<h6 className={styles.newsletterMessageLabel}>
								Благодарим Ви, че се записахте за бюлетина ни.
							</h6>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
