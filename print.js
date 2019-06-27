/*
	jQuery Code v1.0.0  2013-05-30
	(c) 2013 Korori - korori-gaming.com
	license: http://www.opensource.org/licenses/mit-license.php
*/

(function($){
	

		/*
		Print Window
	*/
	$.fn.PrintWindow = function (printContainer) {
		var DocumentContainer = document.getElementById(printContainer);
		var WindowObject = window.open('', "PrintWindow", "width=800,height=800,top=200,left=200,toolbars=no,scrollbars=no,status=no,resizable=no");
		WindowObject.document.writeln(DocumentContainer.innerHTML);
		WindowObject.document.close();
		WindowObject.focus();
		WindowObject.print();
		WindowObject.close();
		
	};
		
	
}(jQuery));
