$(document).ready(function () {
    //form creation
    $("<form>").appendTo('body')
    let toDos = $("<input type=text>").appendTo('form')
    $("<input type=submit>").appendTo('form')
    let listSpace = $("<ol></ol>").appendTo('body')


    //when i click the submit button a the value appends to the ul
    $('form').submit(function () {
        event.preventDefault()
        let addItem = toDos.val();
        $("<li>" + addItem + "</li>").appendTo(listSpace)
        toDos.val(" ");


    })
    //when I click on a list item a line goes through it
    $('ol').on('click', 'li', function () {
        $(this).css('text-decoration', 'line-through')
    })



})