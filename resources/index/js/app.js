let c3El = document.querySelector('.content-3');
let c99El = document.querySelector('.c99');

c99El.style['height'] = 'calc(460vh + ' + c3El.offsetHeight + 'px)';

window.addEventListener("resize", () => {
    c99El.style['height'] = 'calc(460vh + ' + c3El.offsetHeight + 'px)';
});

window.addEventListener("scroll", () => {
    var offsetScrollY = window.scrollY;
    var coverEl = document.querySelector('.cover');
    var offsetScaleCover = (offsetScrollY * 1.4 + 100) / 100;

    coverEl.style['transform'] = 'scale(' + offsetScaleCover + ')';
    coverEl.style['pointer-events'] = offsetScaleCover > 2 ? 'none' : 'all';

    document.querySelector('.cover .branding.b1').style['margin-left'] = '-' + (offsetScaleCover * 30 - 30) + 'vw';
    document.querySelector('.cover .branding.b2').style['margin-left'] = '-' + (offsetScaleCover * 30 - 30) + 'vw';

    document.querySelector('.cover .hero').style['margin-right'] = '-' + (offsetScaleCover * 30 - 30) + 'vw';

    var inScrollNext = coverEl.offsetHeight / 5;
    var c1El = document.querySelector('.content-1');
    var c2El = document.querySelector('.content-2');
    var c3El = document.querySelector('.content-3');
    var offsetScaleC1 = (offsetScrollY - 20) / 100;
    var offsetMarginC1 = (200 - offsetScrollY);
    var c2Height = c2El.offsetHeight;
    var c2Margin = 0;

    c1El.style['margin-top'] = (offsetMarginC1 < 0 ? 0 : offsetMarginC1) + 'px';
    c1El.style['transform'] = 'translate(-50%, -50%) scale(' + (offsetScaleC1 > 1 ? 1 : offsetScaleC1) + ')';
    c1El.style['opacity'] = offsetScaleC1 > 1 ? 1 : offsetScaleC1;
    c2El.style['margin-top'] = '0';

    var bgToWhite = document.querySelector('.bg-wrap .toWhite');
    var bgToGold = document.querySelector('.bg-wrap .toGold');
    var bgair = document.querySelector('.bg-air');

    bgToGold.style['opacity'] = 0;

    if (offsetScrollY < (inScrollNext * 2.2)) {
        bgToWhite.style['opacity'] = '0';
        bgair.style['margin-top'] = '200vh';
    }

    if (offsetScrollY > (inScrollNext * 2.2)) {
        var offsetBgMargin = 200 - (offsetScrollY - (inScrollNext * 2.3));
        offsetBgMargin = offsetBgMargin > 200 ? 200 : offsetBgMargin;

        var offsetOpacityBgG0 = (offsetScrollY - (inScrollNext * 2.3)) / 100;
        offsetOpacityBgG0 = offsetOpacityBgG0 < 0 ? 0 : offsetOpacityBgG0;

        bgToWhite.style['opacity'] = offsetOpacityBgG0 > 1 ? 1 : offsetOpacityBgG0;
        bgair.style['margin-top'] = (offsetBgMargin < -100 ? '-100' : offsetBgMargin) + 'vh';
    }

    if (offsetScrollY > (inScrollNext * 4.2)) {
        var offsetMargin2C1 = offsetScrollY - (inScrollNext * 4.2) - 100;
        c2Margin = offsetMargin2C1 < 0 ? 0 : offsetMargin2C1;

        bgToGold.style['opacity'] = 1;
        c1El.style['margin-top'] = '-' + c2Margin + 'px';
        c1El.style['transform'] = 'translate(-50%, -50%) scale(' + (offsetScaleC1 > 1 ? 1 : offsetScaleC1) + ')';
        c1El.style['opacity'] = offsetScaleC1 > 1 ? 1 : offsetScaleC1;
        c2El.style['margin-top'] = '-' + (c2Margin > c2Height ? '100vh' : c2Margin + 'px');
        bgToWhite.style['margin-top'] = 0;
    }

    var bgToRedMargin = 0;
    var calcC2Height = c2Height + (c2Height / 2);
    var calcC2Margin = (c2Margin - c2Height);
    var calcC2Final = c2Height * 2.5 + 100;

    if (c2Margin > c2Height) {
        bgToWhite.style['margin-top'] = '-' + (c2Margin - c2Height) + 'px';

        bgToGold.style['border-radius'] = '0';
        bgToGold.style['transform'] = 'scale(1)';
        c2El.style['transform'] = 'scale(1)';
        bgToRedMargin = calcC2Margin > calcC2Height ? calcC2Height : 0;
    }

    var scaleBgRed = 1 - (((calcC2Margin - calcC2Height) / 2) / 100);
    scaleBgRed = scaleBgRed < 0.5 ? '0.5' : scaleBgRed;

    if (bgToRedMargin !== 0) {
        bgToGold.style['border-radius'] = '2em';
        bgToGold.style['transform'] = 'scale(' + scaleBgRed + ')';
        c2El.style['transform'] = 'scale(' + scaleBgRed + ')';
    }

    if (c2Margin > calcC2Final) {
        var dkmdk = c2Margin - calcC2Final;

        bgToGold.style['margin-top'] = '-' + (c2Margin - calcC2Final) + 'px';

        c2El.style['margin-top'] = 'calc(-100vh - ' + (c2Margin - calcC2Final) + 'px)';

        c3El.style['margin-top'] = '-' + (dkmdk > c3El.offsetHeight ? c3El.offsetHeight : dkmdk) + 'px';
    } else {
        bgToGold.style['margin-top'] = '0';

        c2El.style['margin-top'] = '-' + (c2Margin > c2Height ? '100vh' : c2Margin + 'px');

        c3El.style['margin-top'] = '0';
    }
});
