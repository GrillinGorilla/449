//$.getScript("https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js", function({});

function c9ColorLoop()
{
	$.post("https://449.duckdns.org/api/webhook/-OsI_5KynODhu32-mdAbPwJrs", 
		  function(data,status){$.toast({
				text: "The house should be flashing colors now.",
				heading: status,
				position: 'top-right',
				bgColor: '#2ecc71',
				textColor: '#fff',
			  });
			$("#changeTheLightsHeader").css('color', '#E83B3B');
		});
}