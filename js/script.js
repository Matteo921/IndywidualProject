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
/*
 type: 'bar',
					    data: {
					        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
					        datasets: [{
					            label: '# of Votes',
					            data: [12, 19, 3, 5, 2, 3],
					            backgroundColor: [
					                'rgba(255, 99, 132, 0.2)',
					                'rgba(54, 162, 235, 0.2)',
					                'rgba(255, 206, 86, 0.2)',
					                'rgba(75, 192, 192, 0.2)',
					                'rgba(153, 102, 255, 0.2)',
					                'rgba(255, 159, 64, 0.2)'
					            ],
					            borderColor: [
					                'rgba(255, 99, 132, 1)',
					                'rgba(54, 162, 235, 1)',
					                'rgba(255, 206, 86, 1)',
					                'rgba(75, 192, 192, 1)',
					                'rgba(153, 102, 255, 1)',
					                'rgba(255, 159, 64, 1)'
					            ],
					            borderWidth: 0
					        }]
					    },
					    options: {
					        scales: {
					            yAxes: [{
					                ticks: {
					                    beginAtZero: true
					                }
					            }]
					        }
					    }
					});