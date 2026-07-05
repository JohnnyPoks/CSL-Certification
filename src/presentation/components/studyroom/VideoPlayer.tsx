import { useState, useRef } from "react";
import ReactPlayer from "react-player";
import {
  PlayCircle,
  Volume2,
  PauseCircle,
  VolumeX,
  Minimize,
  Settings,
  Maximize,
} from "lucide-react";

interface VideoPlayerProps {
  videoUrl: string;
  onComplete: () => void;
}

export default function VideoPlayer({
  videoUrl,
  onComplete,
}: VideoPlayerProps) {
  const playerRef = useRef<ReactPlayer>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const handleProgress = (state: { played: number }) => {
    setProgress(state.played * 100);
    if (state.played > 0.95) {
      onComplete();
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      playerRef.current?.getInternalPlayer()?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (!videoUrl) {
    return (
      <div className="relative w-full aspect-video bg-black flex items-center justify-center">
        <p className="text-white">No video available</p>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video bg-black group">
      <ReactPlayer
        ref={playerRef}
        url={videoUrl}
        width="100%"
        height="100%"
        playing={isPlaying}
        volume={volume}
        muted={isMuted}
        onProgress={handleProgress}
        onDuration={setDuration}
        controls={false}
        config={{
          youtube: {
            playerVars: { 
              showinfo: 0, 
              controls: 0, 
              modestbranding: 1,
              origin: window.location.origin 
            }
          }
        }}
      />

      {/* Custom Controls */}
      <div 
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <div className="flex flex-col gap-2">
          {/* Progress Bar */}
          <div className="w-full h-1 bg-white/30 rounded-full cursor-pointer">
            <div
              className="h-full bg-green-pea rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Controls Row */}
          <div className="flex items-center gap-4">
            <button
              onClick={togglePlay}
              className="text-white hover:text-green-pea transition-colors"
            >
              {isPlaying ? (
                <PauseCircle className="w-8 h-8" />
              ) : (
                <PlayCircle className="w-8 h-8" />
              )}
            </button>

            {/* Time Display */}
            <div className="text-white text-sm">
              {formatTime(duration * (progress / 100))} / {formatTime(duration)}
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-white hover:text-green-pea transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6" />
                ) : (
                  <Volume2 className="w-6 h-6" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20"
              />
            </div>

            <div className="flex-1" />

            {/* Settings */}
            <button className="text-white hover:text-green-pea transition-colors">
              <Settings className="w-6 h-6" />
            </button>

            {/* Fullscreen Toggle */}
            <button
              onClick={toggleFullscreen}
              className="text-white hover:text-green-pea transition-colors"
            >
              {isFullscreen ? (
                <Minimize className="w-6 h-6" />
              ) : (
                <Maximize className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
