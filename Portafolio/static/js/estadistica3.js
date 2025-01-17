document.addEventListener('DOMContentLoaded', function () {
    // Escuchar el evento de apertura del modal
    const modalEstadisticas = document.getElementById('modalEstadisticas3');
    modalEstadisticas.addEventListener('shown.bs.modal', function () {
        fetch('/queries/estadisticas3/') // Cambia esta URL si es necesario
            .then(response => response.json())
            .then(data => {

                // Obtener el contexto del lienzo
                const ctx = document.getElementById('graficaVentas3').getContext('2d');

                // Limpiar cualquier gráfico previo
                if (window.myChart) {
                    window.myChart.destroy();
                }

                // Crear el gráfico
                window.myChart = new Chart(ctx, {
                    type: 'pie', // Cambiar aquí a 'pie'
                    data: {
                        labels: data.labels,
                        datasets: data.datasets
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top', // Posición de la leyenda
                            },
                            tooltip: {
                                enabled: true // Tooltip para el gráfico
                            }
                        }
                    }
                });

            })
            .catch(error => {
                console.error('Error al obtener las estadísticas:', error);
                Swal.fire('Error', 'No se pudieron cargar las estadísticas.', 'error');
            });
    });
});