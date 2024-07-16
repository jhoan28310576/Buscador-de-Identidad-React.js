import React from "react";
import { Bar } from 'react-chartjs-2';
import { Chart,registerables } from "chart.js";

Chart.register(...registerables);

const MyChart = ({ filteredPersonas }) => { // Cambiado a filteredPersonas
    const chartData = {
        labels: filteredPersonas.map(persona => persona.nombre), // Cambiado a filteredPersonas
        datasets: [
            {
                label: 'Salario', // Cambiado a label
                data: filteredPersonas.map(persona => parseFloat(persona.salario.replace('$', ''))),
                backgroundColor: 'rgba(75,192,192, 0.2)',
                borderColor: 'rgba(75,192,192, 1)',
                borderWidth: 1, // Cambiado a borderWidth
            },
        ],
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: false,
            },
        },
    };
    return <Bar data={chartData} options={chartOptions} />;
};

export default MyChart;