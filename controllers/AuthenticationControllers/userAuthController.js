// userAuthController.js
import User from '../../models/User.js';


export async function register(req, res) {
    const { username, email, password } = req.body;

    try {
        const user = await User.register(username,email, password);
        // Example response
        res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export async function authenticate(req, res) {
    const { email, password } = req.body;

    try {
        // Check if user with the given email and password exists
        const user = await User.authenticate(email, password);
        console.log(user);
        // Check if user exists and compare passwords
        if (user) {
            // Authentication successful
            // Set user data in session or perform other actions
            res.status(200).json({ message: 'Authentication successful' });
        } else {
            // Authentication failed
            res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Error authenticating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
