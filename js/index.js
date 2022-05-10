$(document).ready(function () {
    $("body").niceScroll({ background: '#333231', scrollspeed: 0, cursorborder: '0', cursorcolor: '#BF63C7', cursorwidth: '10px', autohidemode: false, zindex: 'auto' });
});

    //This function will be called when user click changing language
    function translate(lng, tagAttr){
      var translate = new Translate();
      translate.init(tagAttr, lng);
      translate.process();
      if(lng == 'br'){
        $("#brTranslator").css('border', '2px solid #dd3497',);
        $("#brTranslator").css('border-radius', '20px',);
        $("#brTranslator").css('display', 'flex',);
        $("#brTranslator").css('filter', 'grayscale(0%)');
        $("#enTranslator").css('filter', 'grayscale(0%)');
        $("#enTranslator").css('border', '2px solid #dd3497',);
        $("#enTranslator").css('border-radius', '20px',);
        $("#enTranslator").css('display', 'flex',);
      } 
      if(lng == 'en'){
        $("#enTranslator").css('border', '2px solid #dd3497',);
        $("#enTranslator").css('border-radius', '20px',);
        $("#enTranslator").css('display', 'flex',);
        $("#enTranslator").css('filter', 'grayscale(0%)');
        $("#brTranslator").css('filter', 'grayscale(0%)');
        $("#brTranslator").css('border', '2px solid #dd3497',);
        $("#brTranslator").css('border-radius', '20px',);
        $("#brTranslator").css('display', 'flex',);
      }
}
  
  $(document).ready(function(){
    //This is id of HTML element (Portuguese) with attribute lng-tag
    $("#brTranslator").click(function(){
      translate('br', 'lng-tag');
    });
    //This is id of HTML element (English) with attribute lng-tag
    $("#enTranslator").click(function(){
      translate('en', 'lng-tag');
    });
  });






