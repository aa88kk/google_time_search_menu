
var s = `
  <style>
    #time-sch-menu{
        height:100px;
        width:150px;
        top:0px;
        padding-left:10px;
        position:absolute;
    }

    #time-sch-menu ul li a{
        color:#777;
        text-decoration: none;
        padding: 6px 10px 6px 30px;
        line-height: 17px;
        display: block;
    }

    #time-sch-menu .hdtbSel {
        padding: 6px 10px 6px 30px;
    }
    
  </style>
  <div id="time-sch-menu"><ul></ul></div>
`


$('#rcnt').append(s);



var target1 = $('#hdtbMenus').get(0);
var target2 = $('#hdtb').get(0);

if($('#qdr_h').length) {

    console.log('haha');
    $('#time-sch-menu ul').empty();
    $('li[id^="qdr_"').clone().appendTo('#time-sch-menu ul');
} else {

    // create an observer instance
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {

        console.log(mutation); 
        if(mutation.target.id != "hdtbMenus")
              return;

        //console.log($('#qdr_h').children()[0].href);
        console.log(mutation); 
        $('#time-sch-menu ul').empty();
        $('ul.hdtbU.hdtb-mn-c li[id^="qdr_"').clone().appendTo('#time-sch-menu ul');
      });
    });

    var config = { attributes: false, childList: true, characterData: false , subtree: true};
    observer.observe(target1, config);
    //observer.observe(target2, config);

    //observer.disconnect();
}

