// middleware/registrationMiddleware.js
 
// Middleware function to validate registration data
export function validateRegistrationData(req, res, next) {
    const { username, email, password } = req.body;
    // Perform validation checks (you need to implement this logic)
    if (!username || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    // Proceed to next middleware if validation passes
    next();
}
 