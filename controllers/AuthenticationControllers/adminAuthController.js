// adminAuthController.js
import Admin from '../../models/Admin.js';

export async function authenticate(req, res) {
    const { email, password } = req.body;

    try {
        // Check if admin with the given email and password exists
        const admin = await Admin.findByEmailAndPassword(email, password);

        // Check if admin exists and compare passwords
        if (admin) {
            // Authentication successful
            // Set admin data in session or perform other actions
            res.status(200).json({ message: 'Authentication successful' });
        } else {
            // Authentication failed
            res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Error authenticating admin:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
