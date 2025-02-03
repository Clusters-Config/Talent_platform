import { Register, Experience } from '../exports.js';
import { ObjectId } from 'mongodb';

const connect = async (req, res) => {
    try {
        const { id ,title } = req.query;

        console.log({ id, title }); 
        const networkData = await Experience.find({ title });
        console.log(networkData);

        const updatedUser = await Register.findOneAndUpdate(
            { _id: ObjectId.createFromHexString(id) },
            { $set: { connection: networkData } },
            { returnOriginal: false, runValidators: true }
        );
        console.log(updatedUser);   
       
        if (!updatedUser) {
            return res.status(404).json({ 
                message: 'User not found',
                data: networkData
            });
        }

        res.status(200).json({
            success: true,
            message: 'Connection successful',
            data: updatedUser
        });
    } catch (err) {
        console.error(err);
        // 5. Improved error response
        res.status(500).json({
            success: false,
            message: 'Connection failed',
        });
    }
}

export {connect};
