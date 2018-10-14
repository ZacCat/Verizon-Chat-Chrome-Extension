function resize_load()
{
    var listWrap = document.getElementById('convListWrapper');
    var h = window.innerHeight - 55;
    listWrap.style.height = h + 'px';
    wrapWidth = listWrap.offsetWidth;
    var w = window.innerWidth - wrapWidth;
    document.getElementById('conversation-box').style.width = w + 'px';
    h -= document.getElementById('composer-buttons').offsetHeight;
    document.getElementById('vma-composerContent').style.height = h + 'px';
    h -= document.getElementById('vma-sendControls3').offsetHeight;
    h -= document.getElementById('sendMessageForm').offsetHeight;
    document.getElementsByClassName('new-message-inputs')[0].style.height = h + 'px';
    document.getElementById('vma-chatContent').style.height = h + 'px';
}

window.onload = function()
{

    document.getElementsByClassName('contentNav')[0].classList.add('hide');
    var onNavLoad = function(cb)
    {
        if(document.getElementById('convListWrapper').offsetWidth)
        {
            cb();
        } else
        {
            setTimeout(function()
            {
                onNavLoad(cb);
            }, 100);
        }
    };
    onNavLoad(function()
    {
        var full_page_button = document.getElementById('main-menu-full-page');
        if(!document.body.classList.contains('fullscreen'))
            full_page_button.click();
        resize_load();
    });

};

window.onresize = resize_load;