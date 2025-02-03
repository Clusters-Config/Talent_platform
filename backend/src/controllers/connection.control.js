import { Profile , Network } from '../exports.js';



const connection = async (req, res) => {
    try {
        const networkData = await Network.find();
        console.log(networkData);
        
        const newConn = await Profile.updateOne(
            { _id: req.body.profileId },
            { $set: { network: networkData } }
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