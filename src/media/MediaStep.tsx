import React from 'react';
import { ButtonList } from '@app/shared/buttons/ButtonList';

interface IProps {
	onSubmit: () => void;
}

const MediaStepComponent: React.FC<IProps> = ({ onSubmit }) => {
	return (
		<>
			<div className={'container'}>
				<div>
					<ButtonList
						buttons={[
							{
								content: 'Add a video review',
								key: 'add_video',
								icon: 'fa-video',
								onClick: addVideo,
							},
							{
								content: 'Record a new video',
								key: 'record_video',
								icon: 'fa-microphone',
								onClick: recordVideo,
							},
							{
								content: (
									<div className={'flex-grow'}>
										<label className={'full-width'} htmlFor={'upload-video'}>
											Upload an existing video
										</label>
										<input
											id={'upload-video'}
											type={'file'}
											className={'hidden'}
											accept="video/*"
											onChange={uploadVideos}
										/>
									</div>
								),
								key: 'upload_video',
								icon: 'fa-upload',
							},
						]}
					/>
				</div>

				<div className={'marg-top-30'}>
					<ButtonList
						buttons={[
							{
								content: 'Add photos',
								key: 'add_photos',
								icon: 'fa-image',
								onClick: addPhotos,
							},
							{
								content: (
									<div className={'flex-grow'}>
										<label className={'full-width'} htmlFor={'upload-image'}>
											Upload a photo
										</label>
										<input
											id={'upload-image'}
											type={'file'}
											className={'hidden'}
											accept="image/*"
											onChange={uploadPhotos}
										/>
									</div>
								),
								key: 'upload_photos',
								icon: 'fa-upload',
							},
						]}
					/>
				</div>
			</div>
			<div className={'container text-align-center marg-top-30 pad-bottom-20'}>
				<button onClick={onSubmit} className={'btn-cta marg-top-20'}>
					Next
				</button>
			</div>
		</>
	);

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	function uploadPhotos() {}
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	function addPhotos() {}
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	function recordVideo() {}
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	function uploadVideos() {}
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	function addVideo() {}
};

export const MediaStep = MediaStepComponent;
