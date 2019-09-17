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
								text: 'Add a video review',
								key: 'add_video',
								icon: 'fa-video',
								onClick: addVideo,
							},
							{
								text: 'Record a new video',
								key: 'record_video',
								icon: 'fa-microphone',
								onClick: recordVideo,
							},
							{
								text: 'Upload an existing video',
								key: 'upload_video',
								icon: 'fa-upload',
								onClick: uploadVideos,
							},
						]}
					/>
				</div>

				<div className={'marg-top-30'}>
					<ButtonList
						buttons={[
							{
								text: 'Add photos',
								key: 'add_photos',
								icon: 'fa-image',
								onClick: addPhotos,
							},
							{
								text: 'Upload photos',
								key: 'upload_photos',
								icon: 'fa-upload',
								onClick: uploadPhotos,
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
