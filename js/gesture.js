document.addEventListener('gest', function(gesture) {
    //handle gesture .direction .up .down .left .right .error
    if (gesture.left) {
    	nextBtn.click();
    }
    if (gesture.right) {
    	preBtn.click();
    }
    if (gesture.up) {
    	playBtn.click();   
    }
    if (gesture.down) {
    	pauseBtn.click();
    }
}, false);

gest.start();

