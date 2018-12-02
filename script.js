$(document).ready(function () {
    $(document).click(function () {
        $('#color-overlay').css("visibility", "visible");
        $('#color-overlay').css("opacity", "1");
    });
    $('.frame').click(function () {
        let frames = document.getElementsByClassName('frame')
        if (this.classList.contains('active')) {
            this.classList.remove('active')
            for (let i = 0; i < frames.length; i++) {
                frames[i].classList.remove('active')
                frames[i].style.opacity = '1'
            }
            $('#color-overlay').css('background', 'white')
        } else {
            for (let i = 0; i < frames.length; i++) {
                frames[i].classList.remove('active')
                frames[i].style.opacity = '0.4'
            }

            var t = this;
            setTimeout(function () {
                $(t).addClass('active')
                // $('#color-overlay').css('background', t.dataset.complementary)    
            }, 150);
        }
    });
})

