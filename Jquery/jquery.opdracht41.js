function valideer()
	{
		
		var naam = $("naam").val();
		var leeftijd = $("leeftijd").val();
		var email = $("email").val();
		var aantal = $("input[type=checkbox]:checked").length;
		var patroon = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

		if ($("naam").hasClass("verplicht")&& $('#naam').val() !="")
		{
			alert("hallo "+naam);
			$("#naam").parent('td').addClass('goed');
		}
		else
		{
			alert("veld is verplicht!");
			$("naam").parent("td").addClass("fout");
		}
		if (leeftijd == isNaN)
		{
			alert('uw leeftijd is geen nummer');
		}
		if (aantal > 2) 
		{
			alert("u mag niet meer dan 2 opties kiezen!");
		}
		if (patroon.test(email)) 
		{
			alert("u heeft een goed email ingevuld");
		}
		else
		{
			event.preventDefault;
		}
	}
