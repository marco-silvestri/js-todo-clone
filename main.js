$(document).ready(function () {

    /* References */

    var buttonSubmit = $('.app__input-area i');
    var inputArea = $('.add-task');
    var list = $('.todo');

    $(buttonSubmit).click(addNewElement);

    inputArea.keyup(function(e){
        if (e.which == 13 || e.keyCode == 13){
            addNewElement();
        }
    });

    $('#app').on('click', '.todo li i', function(){
        $(this).parent().remove();
    });

    $('#app').on('click', '.todo li', function(){
        $(this).toggleClass('stroked');
    });

    /****************
    *  Functions
    *****************/

    // Add a new non-empty element
    function addNewElement(){
        if (inputArea.val() == null || inputArea.val().trim() == '') {
            alert('I cannot add an empty note')
        }
        else {
            var cloneTemplate = $('.ul-template li').clone();
            cloneTemplate.prepend(inputArea.val().trim());
            list.append(cloneTemplate);
            inputArea.val('');
        }
    }

    /****************
    *  Debug AREA
    *****************/
    
    /* Data Source */
/*
    var dummyItems = [
        'i am a dummy element',
        'another dummy task',
        'i am awesome, but still a dummy',
        'click on this dummy',
        'guy.brush dummy task'
    ];
*/
    /* Populate */
/*
    for (let i = 0 ; i < dummyItems.length ; i++) {
        var cloneTemplate = $('.ul-template li').clone();

        cloneTemplate.prepend(dummyItems[i]);

        list.append(cloneTemplate);
        
    };
*/    
});