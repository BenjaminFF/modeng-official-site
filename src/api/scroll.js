export const smoothScroll = (end, el, duration, orientation) => {
    let flashTimes = duration / 1000 * 60;
    let pxPerTime, direction;
    if (orientation == 'vertical') {
        pxPerTime = Math.round(Math.abs(el.scrollTop - end) / flashTimes);
        direction = el.scrollTop > end ? 'up' : 'down';
    } else if (orientation == 'horizontal') {
        pxPerTime = Math.round(Math.abs(el.scrollLeft - end) / flashTimes);
        direction = el.scrollLeft > end ? 'left' : 'right';
    }
    let step = () => {
        if (orientation == 'vertical') {
            if (direction == 'down') {
                if (end - el.scrollTop <= 0) {
                    return;
                }
                el.scrollTop += pxPerTime;
            } else {
                if (end - el.scrollTop >= -pxPerTime) {
                    return;
                }
                el.scrollTop -= pxPerTime;
            }
        } else if (orientation == 'horizontal') {
            if (direction == 'left') {
                if (end - el.scrollLeft >= 0) {
                    return;
                }
                el.scrollLeft -= pxPerTime;
            } else {
                if (end - el.scrollLeft <= 0) {
                    return;
                }
                el.scrollLeft += pxPerTime;
            }
        }
        requestAnimationFrame(step);
    }
    step();
}

export const isElementInViewport=(el)=>{
    let rect = el.getBoundingClientRect();
    return (
        rect.top >= -el.offsetHeight/2 &&
        rect.bottom <= (window.innerHeight+el.offsetHeight/2 || document.documentElement.clientHeight+el.offsetHeight/2)
    );
}