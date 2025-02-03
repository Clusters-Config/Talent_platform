import { Register } from '../exports.js';
import User from '../models/network.model.js';


const connection = async (req, res) => {
    try {
        const { networkData } = req.body; 
        const conn = Register;
        const newConn = new conn({ ...networkData });

        // Save connection to database
        await newConn.save();

        // Update user model with connection data
        await User.updateOne(
            { _id: req.user._id },
            { $push: { connections: newConn._id, networkData: networkData } }
        );

        res.status(200).json({
            message: 'Connection successful',
            data: newConn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Connection failed' });
    }
}


export default connection;