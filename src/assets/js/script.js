$(function(){

    function setActiveMenu () {
        var pageID = $('body').attr('data-pageid');
        var activeClassName = 'pageid-' + pageID;
        $('.header-menu .' + activeClassName).addClass('active');
    }

    function init () {
        setActiveMenu();
    }

    init();

});