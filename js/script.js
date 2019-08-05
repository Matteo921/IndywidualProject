var ctx = document.getElementById('myChart').getContext('2d');
				var myChart = new Chart(ctx, {
				// 1
				    type: 'bar',
				    data: {
				        // 2
				        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
				        // 3
				        datasets: [{
				            // 4
				            label: "Signups",
				            // 5
				            backgroundColor: '#8DBEC8',
				            borderColor: '#8DBEC8',
				            // 6
				            data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
				        },
				        {
				            label: "FTD",
				            backgroundColor: '#F29E4E',
				            borderColor: '#F29E4E',
				            data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
				        },
				        {
				            
				        }]
				        
				    },
				});

document.querySelector('form').addEventListener('submit', function(event) {
  var isFormValidate = true;

  var emailAddressInput = event.target.querySelector('input[name="email_address"]')
  if(emailAddressInput.value.indexOf('@') < 0) {
    isFormValidate = false;
    emailAddressInput.parentElement.querySelector('.error').innerHTML = 'Błędny adres e-mail';
  }

  return !isFormValidate ? event.preventDefault() : true;
})