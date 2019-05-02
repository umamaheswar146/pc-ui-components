// $('.widget-navigation li>ul, .widget-pages li>ul').parent().addClass('has-child');
//   $('.widget-navigation li>a, .widget-pages li>a').on( 'click', function(e) {
//     e.stopPropagation();
//   })
//   $('.widget-navigation li, .widget-pages li').on( 'click', function(e) {
//     e.stopPropagation();

//     if( $(this).children('ul').length ) {
//       $(this).children('ul').slideToggle(500);   
//       $(this).toggleClass('active');
//       $(this).children('ul').toggleClass('active')
     
//     } 
//   });

//   var widget_hover = $('.widget-navigation a')

//   jQuery(widget_hover).each(function (){
//     $(this).mouseout(function(e) {
//       $(this).parent().removeClass('hover');
//     });
//     $(this).mousemove(function(e) {
//       $(this).parent().addClass('hover');
//     });
//   });




 var eventTest = document.querySelectorAll('li');

 eventTest=Array.prototype.slice.call(eventTest);
console.log(eventTest);


 eventTest.forEach(function(l,l_index){
     l.addEventListener('click',function(){
        var t = document.getElementById('first');
        t.style.display='block'
console.log(t.className);

        // if(t.className ==  null)
        // {
            t.className='active-click';

        // }
        // else{
        //     t.className=''
        // }
    
    
     },false)
 })






//   .widget-navigation ul{
// 	overflow: hidden;
// }
// .widget-navigation h4 {
// 	float: none;
// }
// .widget-navigation>ul {
// 	border: 1px solid #e1e1e1;
// }
// .widget-navigation li,
// .widget-pages li {
// 	padding-left: 0;
// 	overflow: hidden;
// 	border-bottom: 1px solid #e1e1e1;
// }
// .widget-pages>ul>li li:first-child,
// .widget-navigation>ul>li li:first-child {
// 	border-top: 1px solid #e1e1e1;
// }
// .widget-pages li:last-child,
// .widget-navigation li:last-child {
// 	border-bottom: 0;
// }
// .widget-navigation a,
// .widget-pages a {
// 	display: block;
// 	padding: 6px 0 6px 0;
// }
// .widget-navigation li:before,
// .widget-pages li:before{
// 	display: none;
// }
// .widget-navigation li.has-child:before,
// .widget-pages li.has-child:before{
// 	display: block;
// 	content: "+";
// 	font-size: 20px;
// 	top: 0;
// 	width: 40px;
// 	height: 46px;
// 	line-height: 46px;
// 	text-align: center;
// 	cursor: pointer;
// 	transition: all 0.3s;
// 	-ms-transition: all 0.3s;
// 	-moz-transition: all 0.3s;
// 	-webkit-transition: all 0.3s;
// }
// .widget-navigation li.active:before,
// .widget-pages li.active:before{
// 	content: "-"
// }
// .widget-navigation>ul>li>a,
// .widget-pages>ul>li>a{
// 	padding-left: 40px;
// }
// .widget-navigation>ul>li>ul>li>a,
// .widget-pages>ul>li>ul>li>a{
// 	padding-left: 60px;
// }
// .widget-navigation>ul>li>ul>li>ul>li>a,
// .widget-pages>ul>li>ul>li>ul>li>a{
// 	padding-left: 70px;
// }
// .widget-pages>ul{
// 	border-bottom: 1px solid #e1e1e1;
// }
// .widget-pages ul a:hover{
// 	color: #f27c66;
// }
// .widget-navigation>ul>li.hover>a,
// .widget-navigation>ul>li:hover>a,
// .widget-navigation>ul>li.active{
// 	background-color: #f27c66;
// 	color: #ffffff;
// }
// .widget-navigation>ul>li.hover>:before,
// .widget-navigation>ul>li.active:before,
// .widget-navigation>ul>li:hover:before,
// .widget-navigation>ul>li>ul>li:before{
// 	color: #ffffff
// }
// .widget-navigation>ul>li>ul>li.hover:before,
// .widget-navigation>ul>li>ul>li:hover:before,
// .widget-navigation>ul>li>ul>li.active:before{
// 	color: #f27c66;
// }
// .widget-navigation>ul>li>ul {
// 	background-color: #f27c66;
// }

// .widget-navigation>ul>li>ul>li{
// 	color: #ffffff;
// }
// .widget-navigation>ul>li>ul>li.hover>a,
// .widget-navigation>ul>li>ul>li:hover>a,
// .widget-navigation>ul>li>ul>li.active{
// 	background-color: #eaeaea;
// 	color: #f27c66;
// }
// .widget-navigation>ul>li>ul>li>ul{
// 	background-color: #eaeaea;
// }
// .widget-navigation>ul>li>ul>li>ul>li.hover>a{
// 	color: #f27c66;
// }
// .widget-navigation>ul>li ul,
// .widget-pages>ul>li ul{
// 	display: none;
// }
// .widget-pages>ul>li.active>ul{
// 	display: block;
// }