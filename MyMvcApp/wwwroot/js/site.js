const track = document.getElementById("img-wrapper");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
    if(track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
    
    const percentage = (mouseDelta / maxDelta) * -100;
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.percentage = nextPercentage;

    track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1200, fill: "forwards" });

    for(const image of track.getElementsByClassName("image")) {
        image.animate({
            objectPosition: `${100 + nextPercentage}% center`
        }, {duration: 1200, fill: "forwards" });
    }
}

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);

document.addEventListener('DOMContentLoaded', function() {
    const photos = document.querySelectorAll('.photo-link');
    const overlay = document.createElement('div');
    overlay.classList.add('photo-overlay');
    const img = document.createElement('img');
    const closeBtn = document.createElement('span');
    const leftBtn = document.createElement('span');
    const rightBtn = document.createElement('span');

    photos.forEach((photo, index) => {
        photo.addEventListener('click', () => {
            img.src = photo.querySelector('.photo').src;
            document.body.appendChild(overlay);
            overlay.appendChild(img);
            overlay.appendChild(closeBtn);
            overlay.appendChild(leftBtn);
            overlay.appendChild(rightBtn);
            leftBtn.addEventListener('click', () => {
                index = (index === 0) ? photos.length - 1 : index - 1;
                img.src = photos[index].querySelector('.photo').src;
            });
            rightBtn.addEventListener('click', () => {
                index = (index === photos.length - 1) ? 0 : index + 1;
                img.src = photos[index].querySelector('.photo').src;
            });
        });
    });

    closeBtn.classList.add('close-btn');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', () => {
        overlay.remove();
    });

    leftBtn.classList.add('nav-btn', 'left');
    leftBtn.innerHTML = '&#10094;';

    rightBtn.classList.add('nav-btn', 'right');
    rightBtn.innerHTML = '&#10095;';
});
document.addEventListener('DOMContentLoaded', function() {
    const videoLinks = document.querySelectorAll('.video-link');

    videoLinks.forEach((videoLink, index) => {
        videoLink.addEventListener('click', () => {
            const overlay = document.createElement('div');
            overlay.classList.add('video-overlay');
            const video = document.createElement('video');
            video.src = videoLink.querySelector('video').src;
            video.autoplay = true;
            video.muted = true;
            video.loop = true;

            const closeBtn = document.createElement('span');
            closeBtn.classList.add('close-btn');
            closeBtn.innerHTML = '&times;';
            closeBtn.addEventListener('click', () => {
                overlay.remove();
            });

            const leftBtn = document.createElement('span');
            leftBtn.classList.add('nav-btn', 'left');
            leftBtn.innerHTML = '&#10094;';
            leftBtn.addEventListener('click', () => {
                index = (index === 0) ? videoLinks.length - 1 : index - 1;
                video.src = videoLinks[index].querySelector('video').src;
            });

            const rightBtn = document.createElement('span');
            rightBtn.classList.add('nav-btn', 'right');
            rightBtn.innerHTML = '&#10095;';
            rightBtn.addEventListener('click', () => {
                index = (index === videoLinks.length - 1) ? 0 : index + 1;
                video.src = videoLinks[index].querySelector('video').src;
            });

            overlay.appendChild(video);
            overlay.appendChild(closeBtn);
            overlay.appendChild(leftBtn);
            overlay.appendChild(rightBtn);
            document.body.appendChild(overlay);
        });
    });
});
$(document).ready(function(){
    // Carousel 1 için Owl Carousel başlatma
    $('#carousel1').owlCarousel({
        loop: true,
        margin: 5,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

    // Carousel 2 için Owl Carousel başlatma
    $('#carousel2').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

    // Carousel 2 için prev butonu
 
});
