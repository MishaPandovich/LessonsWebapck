import $ from 'jquery'

$('<h1/>')
.text('Hello world from Jquery')
.css({
	textAlign: 'left'
})
.appendTo($('header'))