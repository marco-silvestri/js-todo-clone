$(document).ready(function () {

    /* References */

    var buttonSubmit = $('.app__input-area i');
    var inputArea = $('.add-task');
    var list = $('.todo');
    var dateDay = $('.calendar__day');
    var dateName = $('.calendar__name');
    var dateMonth = $('.calendar__month');
    
    var now = new Date();
    var myDay;
    var myMonth;
    var myDate = now.getDate();

    //Populate the calendar
    getMonthAndDay(now);
    dateDay.append(myDate);
    dateName.append(myDay);
    dateMonth.append(myMonth);
    //var myFullDate = myDate + '-' + myDay + '-' + myMonth + '  -' ;


    //Add the note on the click of the + button
    $(buttonSubmit).click(addNewElement);

    // Add the new note on the hit of ENTER
    inputArea.keyup(function(e){
        if (e.which == 13 || e.keyCode == 13){//13 is ENTER
            addNewElement();
        }
    });

    //Remove a note when clicking on the - icon
    $('#app').on('click', '.todo li span', function(){
        $(this).parent().remove();
    });

    //Add a line-through on the click of the note
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
            cloneTemplate.prepend(/*myFullDate,*/ inputArea.val().trim());
            list.append(cloneTemplate);
            inputArea.val('');
        }
    }

    //Get a user friendly month and day
    function getMonthAndDay(actualDate){
        switch (actualDate.getDay()) {
            case 0:
                myDay = 'Sun';
                break;
            case 1:
                myDay = 'Mon';
                break;
            case 2:
                myDay = 'Tue';
                break;
            case 3:
                myDay = 'Wed';
                break;
            case 4:
                myDay = 'Thu';
                break;
            case 5:
                myDay = 'Fri';
                break;
            case 6:
                myDay = 'Sat';
                break;
        }
        
        switch (actualDate.getMonth()) {
            case 0:
                myMonth = 'January';
                break;
            case 1:
                myMonth = 'February';
                break;
            case 2:
                myMonth = 'March';
                break;
            case 3:
                myMonth = 'April';
                break;
            case 4:
                myMonth = 'May';
                break;
            case 5:
                myMonth = 'June';
                break;
            case 6:
                myMonth = 'July';
                break;
            case 7:
                myMonth = 'August';
                break;
            case 8:
                myMonth = 'September';
                break;
            case 9:
                myMonth = 'October';
                break;
            case 10:
                myMonth = 'November';;
                break;
            case 11:
                myMonth = 'December';
                break;
        }
};

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