import cn from 'classnames'
import { useAuth } from 'hooks/useAuth'
import React, { FC } from 'react'

import { MaterialIcon } from '../MaterialIcon'

import { AuthPlaceholder } from './AuthPlaceholder/AuthPlaceholder'
import { IVedeoPlayer } from './AuthPlaceholder/video.interface'
import styles from './VideoPlayer.module.scss'
import { useVideo } from './useVideo'

const VideoPlayer: FC<IVedeoPlayer> = ({ slug, videoSources }) => {
	const { actions, video, videoRef } = useVideo()

	const { user } = useAuth()

	return (
		<div
			className={cn(styles.wrapper, {
				'h-96': !user, // если нет юзера
			})}
		>
			{user ? (
				<>
					<video
						ref={videoRef}
						className={styles.video}
						src={`${videoSources}#t=1`}
						preload="metadata"
					/>
					<div className={styles.progressBarContainer}>
						<div
							style={{ width: `${video.progress}%` }}
							className={styles.progressBar}
						/>
					</div>

					<div className={styles.controls}>
						<div>
							<button onClick={actions.revert}>
								<MaterialIcon name="MdHistory" />
							</button>
							<button onClick={actions.toogleVideo}>
								<MaterialIcon
									name={video.isPlaying ? 'MdPause' : 'MdPlayArrow'}
								/>
							</button>

							<button onClick={actions.forward}>
								<MaterialIcon name="MdUpdate" />
							</button>
							<div className={styles.timeControls}>
								<p className={styles.controlsTime}>
									{/* Math для того что бы перевести дату в нужный формат */}
									{Math.floor(video.currentTime / 60) +
										':' +
										('0' + Math.floor(video.currentTime % 60)).slice(-2)}
								</p>
								<p> / </p>
								<p className={styles.controlsTime}>
									{Math.floor(video.videoTime / 60) +
										':' +
										('0' + Math.floor(video.videoTime % 60)).slice(-2)}
								</p>
							</div>
						</div>
						<div>
							<button onClick={actions.fullScreen}>
								<MaterialIcon name="MdFullscreen" />
							</button>
						</div>
					</div>
				</>
			) : (
				<AuthPlaceholder slug={slug} />
			)}
		</div>
	)
}


export default VideoPlayer;
