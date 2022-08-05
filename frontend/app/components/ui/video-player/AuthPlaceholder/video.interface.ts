export interface IVedeoPlayer {
    videoSources: string
    slug: string
}

export interface IVideoElement extends HTMLVideoElement {
    msRequestFullscreen?: () => void
    mozRequestFullscreen?: () => void
    webkitRequestFullscreen?: () => void
}