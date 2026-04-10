// Video preview for the app (May or may not be needed)
// import { video } from "react";

const videoSrc = "random"; 

export function PreviewPlayer() {
	return (
		<section className="mx-auto">
			<div className="">
				<video src={videoSrc}></video>
			</div>
		</section>
	)	
}