import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import 'chartjs-adapter-date-fns';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
        },
    ],
};

const Dashboard = () => {
    return (
        <motion.div 
            className="p-6 bg-gray-100 min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
            <p className="text-lg mb-8">Welcome to the Dashboard!</p>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <Line data={data} />
            </div>
        </motion.div>
    );
};
export default Dashboard