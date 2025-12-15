'use client'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ReactPlayer from "react-player";
import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlaybackRateButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaFullscreenButton,
} from "media-chrome/react";

export default function VideoCardYouTube({ videoId = "", title = "Mi Video" }) {
  // const youtubeUrl = `https://www.youtube.com/embed/${videoId}?controls=0&modestbranding=1&rel=0`;

  return (
    <Card
			className="h-fit w-96 lg:w-[32rem] p-0 border-black border-2 shadow-xl rounded-none flex flex-col"
		>
      <MediaController
        className="bg-[#f48fb1] p-3 overflow-visible relative"
          style={{
            width: "100%",
            aspectRatio: "16/9",
          }}
        >
          <ReactPlayer
            slot="media"
            src="https://youtu.be/L8vrVObbZz8"
            controls={false}
            style={{
              width: "100%",
              height: "100%",
              // "--controls": "none",
            }}
          ></ReactPlayer>
          <MediaControlBar className="-bottom-[47px] w-96 lg:w-[32rem] -left-[2px] absolute border-black border-2">
            <MediaPlayButton />
            <MediaTimeRange />
            <MediaTimeDisplay showDuration />
            <MediaMuteButton />
            <MediaVolumeRange mediaVolume={10} />
            <MediaFullscreenButton />
          </MediaControlBar>
        </MediaController>

    </Card>
  );
}
