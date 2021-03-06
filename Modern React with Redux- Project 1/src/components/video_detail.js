import React from 'react';

const VideoDetail = ({video}) => {
if(!video) {
	return <div> loading...</div>
}
	
	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

return (
	<div className="video-detail col-md-8">
    <div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src={url}>
  </iframe>
</div>
</div>
	);

};

export default VideoDetail;