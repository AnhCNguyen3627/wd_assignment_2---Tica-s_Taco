function validate () {var deli = $("#deli").prop("checked");
				var pick = $("#pick").prop("checked");
				var address = $("#address").val();
				var billadd = $("#billadd").val();
				var number = $("#number").val();
				var email = $("#email").val();
				var payonpick = $("#payonpick").prop("checked");
				var payonline = $("#payonline").prop("checked");
				var card = $("#card").val();
				var errMsg = "";
				var result = true;
				if ((!deli)&&(!pick)) {errMsg += "<li>A receiving method must be selected.</li>";}
				if ($('#deli').is(':checked')&&(address == "")) {errMsg += "<li>Please enter your delivery address.</li>";}
				if (billadd == "") {errMsg += "<li>Please enter your billing address.</li>";}
				if (number == "") {errMsg += "<li>Please enter your contact number.</li>";}
				if (email == "") {errMsg += "<li>Please enter your email address for receipt.</li>";}
				if (email.indexOf('@') == 0 ) {errMsg += "<li>Email address cannot start with an @ symbol.</li>";}
				if (email.indexOf('@') < 0 ) {errMsg += "<li>Email address must contain an @ symbol.</li>";}
				if ((!payonpick)&&(!payonline)) {errMsg += "<li>A paying method must be selected.</li>";}
				if ($('#payonline').is(':checked')&&(card == "")) {errMsg += "<li>Please enter your credit card number.</li>"}
				if (errMsg != "") {errMsg = "<div id='scrnOverlay'></div>"
					+ "<section id='errWin' class='window'><ul>"
					+ errMsg
					+ "</ul><a href='#' id='errBtn' class='button'>Close</a></section>";
					var numOfItems = ((errMsg.match(/<li>/g)).length) + 6;
					$("body").after(errMsg);
					$("#scrnOverlay").css('visibility', 'visible');
					$("#errWin").css('height', numOfItems.toString() + 'em');
					$("#errWin").css('margin-top', (numOfItems/-2).toString() + 'em');
					$("#errWin").show();
					$("#errBtn").click (function () {$("#scrnOverlay").remove();
													$("#errWin").remove();} );
					result = false;}
					return result;}
function init () {$("#regform").submit(validate);}
$(document).ready(init);