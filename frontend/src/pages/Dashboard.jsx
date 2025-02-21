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
                  weight: 'bold',
                  color: 'white'
                }
              },
              ticks: {
                font: {
                  size: 14,
                  color: 'white'
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
                  weight: 'bold',
                  color: 'white'
                }
              },
              ticks: {
                font: {
                  size: 14,
                  color: 'white'
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
                  family: 'Arial, sans-serif',
                  color: 'white'
                }
              }
            },
            title: {
              display: true,
              text: 'Skill Test Results',
              font: {
                size: 20,
                family: 'Arial, sans-serif',
                weight: 'bold',
                color: 'white'
              }
            },
            tooltip: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              bodyFont: {
                size: 14,
                color: 'white'
              },
              titleFont: {
                size: 16,
                weight: 'bold',
                color: 'white'
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
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900">
      <header className="py-4 flex justify-between items-center bg-gray-100 dark:bg-gray-800">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Skill Test Dashboard</h1>
      </header>
      <main className="flex-1 bg-white dark:bg-gray-900">
        <div className="flex justify-between items-center h-full bg-white dark:bg-gray-900">
          <div className="ml-[1rem] w-7/12 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800">
            <canvas id="skillTestChart" className="h-[26rem] w-[26rem] bg-white dark:bg-gray-900"></canvas>
          </div>
          <div className="w-1/3 mr-[3rem] rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800">
            <Leaderboard skillTestResults={skillTestResults} className="p-4 bg-white dark:bg-gray-900" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;