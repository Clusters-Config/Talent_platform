import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from 'chart.js/auto';
import Leaderboard from './../components/Leaderboard';

const Dashboard = () => {
  const [skillTestResults, setSkillTestResults] = useState([]);

  useEffect(() => {
    const fetchSkillTestResults = async () => {
      try {
        const response = await axios.get('http://localhost:3001/skilltestresults');
        setSkillTestResults(response.data.msg);
      } catch (error) {
        console.error('Error fetching skill test results:', error);
      }
    };

    fetchSkillTestResults();
  }, []);

  useEffect(() => {
    if (skillTestResults.length > 0) {
      // Analyze the skill test results
      const scores = skillTestResults.map(result => result.score);
      const averageScore = scores.reduce((a, b) => a + b, 0) / scores.length;

      // Create the chart
      const ctx = document.getElementById('skillTestChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: skillTestResults.map(result => result.username),
          datasets: [{
            label: 'Skill Test Scores',
            data: scores,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            hoverBackgroundColor: 'rgba(75, 192, 192, 1)',
            hoverBorderColor: 'rgba(75, 192, 192, 1)',
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Score',
                font: {
                  size: 16,
                  family: 'Arial, sans-serif',
                  weight: 'bold'
                }
              },
              ticks: {
                font: {
                  size: 14
                }
              }
            },
            x: {
              title: {
                display: true,
                text: 'Username',
                font: {
                  size: 16,
                  family: 'Arial, sans-serif',
                  weight: 'bold'
                }
              },
              ticks: {
                font: {
                  size: 14
                }
              }
            }
          },
          plugins: {
            legend: {
              display: true,
              position: 'top',
              labels: {
                font: {
                  size: 14,
                  family: 'Arial, sans-serif'
                }
              }
            },
            title: {
              display: true,
              text: 'Skill Test Results',
              font: {
                size: 20,
                family: 'Arial, sans-serif',
                weight: 'bold'
              }
            },
             tooltip: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              bodyFont: {
                size: 14
              },
              titleFont: {
                size: 16,
                weight: 'bold'
              },
              padding: 10
            }
          },
          elements: {
            bar: {
              borderRadius: 5,
              borderWidth: 1
            }
          },
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }
  }, [skillTestResults]);

  return (
    <div className="w-4/5 mx-auto font-sans">
      <h1 className="text-center text-2xl font-bold mb-4">Skill Test Dashboard</h1>
      <div className="flex justify-between">
        <canvas id="skillTestChart" className="h-96 w-3/5"></canvas>
        <Leaderboard skillTestResults={skillTestResults} className="w-2/5 ml-5" />
      </div>
    </div>
  );
};

export default Dashboard;
