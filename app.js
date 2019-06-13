const yLabel = [];
const xLabel = [];


const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: xLabel,
        datasets: [{
            label: 'Family age chart',
            data: yLabel,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(227,72,55 0.2)',
                'rgba(13,118,136, 0.2)',
                'rgba(90,0,19, 0.2)',
                'rgba(84,24,123, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(227,72,55, 1)',
                'rgba(13,118,136, 1)',
                'rgba(90,0,19, 1)',
                'rgba(84,24,123, 1)'
            ],
            borderWidth: 1
        }]
    }
});


getData().catch(error => {
    console.error(error);
});

async function getData(){
    const res = await fetch('data.csv');
    const data = await res.text();

    const rows = data.split('\n');
    rows.forEach(element => {
        const row = element.split(',');
        const firstName = row[0];
        xLabel.push(firstName);
        const Age = row[1];
        yLabel.push(Age);

        console.log(firstName, Age);
    })
}