import React from 'react';
import styles from '../styles/Global';
import android from '../assets/android.png';
import Button from './Button';

const SectionWrapper = ({ title, description, showBtn, mockupImg, banner }) => {
	return (
		<div
			className={`min-h-screen ${styles.section} ${styles.bgWhite} ${banner}`}
		>
			<div className={`flex items-center ${styles.boxClass}`}>
				<div className={`${styles.descDiv} fadeLeftMini`}>
					<h1 className={`${styles.h1Text}`}>{title}</h1>
					<p className={`${styles.descriptionText}`}>{description}</p>
					{showBtn && (
						<Button
							assetUrl={android}
							link='https://expo.dev/artifacts/89f11502-71db-4055-8cac-d19ab6e9205e'
						/>
					)}
				</div>
				<div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
					<img src={mockupImg} alt='' className={styles.sectionImg} />
				</div>
			</div>
		</div>
	);
};

export default SectionWrapper;
