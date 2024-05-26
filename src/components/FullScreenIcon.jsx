import React from 'react';

const fullScreenBtn = document.querySelector('.icon-fullscreen');

function toggleFullScreen() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      fullScreenBtn.classList.remove('icon-fullscreen');
      fullScreenBtn.classList.add('icon-resize-small');
  } else if (document.exitFullscreen) {
      document.exitFullscreen();
      fullScreenBtn.classList.remove('icon-resize-small');
      fullScreenBtn.classList.add('icon-fullscreen');
  }
}

const FullScreenIcon = () => {
  
  return (
        <div className="full__screen">
            <i className="icon-fullscreen icon-large" onClick={()=>toggleFullScreen()}></i>
        </div>
  )
}

export default FullScreenIcon;