$('document').ready(function(){
    $('.answer').hide()
    $('.question').first().addClass('first-item');
    $('.section6 .question').first().addClass('first-item');
    $('.right-accordion .question').first().addClass('first-item');
        
    $('.question').click(function(){
        $(this).toggleClass("selected");
        $(this).next('.answer').slideToggle()       
    })    
});