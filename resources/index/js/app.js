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
    var c1El = document.querySelector('.c1');
    var offsetScaleC1 = (offsetScrollY - 20) / 100;
    var offsetMarginC1 = (200 - offsetScrollY);

    c1El.style['transition'] = '0.3s';
    c1El.style['margin-top'] = (offsetMarginC1 < 0 ? 0 : offsetMarginC1) + 'px';
    c1El.style['transform'] = 'translate(-50%, -50%) scale(' + (offsetScaleC1 > 1 ? 1 : offsetScaleC1) + ')';
    c1El.style['opacity'] = offsetScaleC1 > 1 ? 1 : offsetScaleC1;

    var bgToBlue = document.querySelector('.bg-wrap .g0');
    var bgair = document.querySelector('.bg-air');

    if (offsetScrollY < (inScrollNext * 2.2)) {
        bgToBlue.style['opacity'] = '0';
        bgair.style['margin-top'] = '200vh';
    }

    if (offsetScrollY > (inScrollNext * 2.2)) {
        var offsetBgMargin = 200 - (offsetScrollY - (inScrollNext * 2.3));
        offsetBgMargin = offsetBgMargin > 200 ? 200 : offsetBgMargin;

        var offsetOpacityBgG0 = (offsetScrollY - (inScrollNext * 2.3)) / 100;
        offsetOpacityBgG0 = offsetOpacityBgG0 < 0 ? 0 : offsetOpacityBgG0;

        bgToBlue.style['opacity'] = offsetOpacityBgG0 > 1 ? 1 : offsetOpacityBgG0;
        bgair.style['margin-top'] = (offsetBgMargin < -100 ? '-100' : offsetBgMargin) + 'vh';
    }

    if (offsetScrollY > (inScrollNext * 4.2)) {
        var offsetMargin2C1 = offsetScrollY - (inScrollNext * 4.2) - 100;

        c1El.style['transition'] = 'none';
        c1El.style['margin-top'] = '-' + (offsetMargin2C1 < 0 ? 0 : offsetMargin2C1) + 'px';
        c1El.style['transform'] = 'translate(-50%, -50%) scale(' + (offsetScaleC1 > 1 ? 1 : offsetScaleC1) + ')';
        c1El.style['opacity'] = offsetScaleC1 > 1 ? 1 : offsetScaleC1;
    }
});

let galleryList = [
    {
        imageUrl: '/resources/@static/img/001.png',
        caption: '0001',
    },
    {
        imageUrl: '/resources/@static/img/001.png',
        caption: '0002',
    },
    {
        imageUrl: '/resources/@static/img/001.png',
        caption: '0003',
    },
    {
        imageUrl: '/resources/@static/img/001.png',
        caption: '0004',
    },
    {
        imageUrl: '/resources/@static/img/001.png',
        caption: '0005',
    },
    {
        imageUrl: '/resources/@static/img/001.png',
        caption: '0006',
    },
    {
        imageUrl: '/resources/@static/img/001.png',
        caption: '0007',
    }
];

let galleryItem = {...galleryList};

let makeElementGallery = (key, imageUrl, caption) => {
    return '<div class="g-box" style="grid-area: g' + key + ';"><div class="image"><img src="' + imageUrl + '" /></div><div class="unImage"></div><div class="inf">' + caption + '</div></div>';
};
