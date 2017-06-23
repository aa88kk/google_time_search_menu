var s = `
  <style>
    #search-filter{
        height:100px;
        width:130px;
        top:0px;
        padding-left:0px;
        position:absolute;
    }

    #search-filter ul li a{
        color:#777;
        text-decoration: none;
        padding: 6px 10px 6px 30px;
        line-height: 17px;
        display: block;
    }

    #search-filter .hdtbSel {
        padding: 6px 10px 6px 30px;
    }
    
  </style>
  <div id="search-filter"><ul></ul></div>
`

$('#rcnt').append(s);

var url = '';
var running = false;

function copyMenu() {
    if (running === true)
        return;

    if ($('#hdtbMenus li.hdtbItm[id^="qdr_"]').length > 0) {
        //console.log('clone');
        $('#search-filter ul').empty();
        $('#hdtbMenus li.hdtbItm[id^="qdr_"]').clone().appendTo($('#search-filter ul'));
        running = false;
    } else {
        setTimeout(copyMenu, 250);
    }
}

copyMenu();

var observer = new MutationObserver(function(mutations) {
    if (url !== document.location.href) {
        url = document.location.href;
        copyMenu();
    } else {//console.log("url same.")
    }

}
);

var target1 = $('#search')[0];
var config = {
    attributes: true,
    childList: false,
    characterData: false
};

observer.observe(target1, config);
