$(document).ready(function () {
    $(document).click(function () {
        $('#color-overlay').css("visibility", "visible");
        $('#color-overlay').css("opacity", "1");
    });
    $('.frame').click(function () {
        let frames = document.getElementsByClassName('frame')
        let subs = document.getElementsByClassName('sub')

        if (this.classList.contains('active')) {
            this.classList.remove('active')
            for (let i = 0; i < frames.length; i++) {
                frames[i].classList.remove('active')
                frames[i].style.opacity = '1'
                subs[i].classList.remove('active')
            }
            $('#color-overlay').css('background', 'white')
        } else {
            for (let i = 0; i < frames.length; i++) {
                frames[i].classList.remove('active')
                frames[i].style.opacity = '0.4'
                subs[i].classList.remove('active')
            }
            var t = this;
            setTimeout(function () {
                $(t).addClass('active')
                $(t).children().addClass('active')
                $(t).siblings().addClass('active')
                // $('#color-overlay').css('background', t.dataset.complementary)    
            }, 150);
        }
    });
})

