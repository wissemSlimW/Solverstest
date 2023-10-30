'use client'

import YouTube from "react-youtube"

export const VideoCard = () =>
    <YouTube
        className="w-full h-full "
        videoId={"6wBapLca_eU"}
        iframeClassName="h-full w-full"
        onError={(error) => {
            console.error('YouTube Player Error:', error);
        }}
    />