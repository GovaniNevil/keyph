import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

function SolarCostChart() {
    const data = {
        labels: ['01', '03', '05', '07', '09', '11', '13', '15', '17', '19', '21', '23', '25'],
        datasets: [
            {
                label: 'Solar',
                data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                borderColor: '#00bfff',
                backgroundColor: 'rgba(0, 191, 255, 0.5)',
                tension: 0.3,
                fill: true,
            },
            {
                label: 'Grid Electricity',
                data: [0, 2, 3.2, 4, 5, 6, 7.5, 9, 10.5, 12, 13.5, 15, 16],
                borderColor: '#A9A9A9',
                backgroundColor: 'rgba(169,169,169,0.5)',
                tension: 0.3,
                fill: true,
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Amount Paid Cumulatively Over 25 Years (in ₹ Lakhs)',
                    font: {
                        size: 20,  // Increase font size for Y-axis title
                    }
                },
                ticks: {
                    font: {
                        size: 16,  // Increase font size for Y-axis labels
                    }
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Number of Years',
                    font: {
                        size: 20,  // Increase font size for X-axis title
                    }
                },
                ticks: {
                    font: {
                        size: 16,  // Increase font size for X-axis labels
                    }
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 16  // Increase font size for legend labels
                    }
                },
                position: 'top'
            },
            tooltip: {
                titleFont: { size: 16 }, // Font size for tooltip title
                bodyFont: { size: 14 },  // Font size for tooltip body
                enabled: true,
                mode: 'index',
                intersect: false,
            }
        }
    };

    return (
        <section className="my-[70px] ">
            <div className="container">
                <div className="title mb-4">
                    <h3 className='xl:text-[60px] md:text-[50px] text-[35px] font-bold text-[#0A6ED1] relative  text-center'>Solar vs grid electricity - Cost over years</h3>
                </div>
                <div style={{ width: '100%', height: '600px' }}>
                    <Line data={data} options={options} />
                </div>
            </div>
        </section>
    );
}

export default SolarCostChart;
