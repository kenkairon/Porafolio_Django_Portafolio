document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('ventasChart').getContext('2d');

    // Obtener datos del servidor
    fetch("/queries/estadisticas/")
        .then(response => response.json())
        .then(data => {
            // Crear el gráfico con los datos obtenidos
            new Chart(ctx, {
                type: 'bar', // Cambia a 'line', 'pie', etc. si deseas otro tipo de gráfico
                data: {
                    labels: data.labels,
                    datasets: data.datasets
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        tooltip: {
                            enabled: true,
                        },
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        })
        .catch(error => {
            console.error('Error al cargar los datos del gráfico:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudieron cargar los datos del gráfico.',
            });
        });
});
