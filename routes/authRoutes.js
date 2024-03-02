

import { Router } from 'express';
import { authenticate as userAdminauthenticate,register } from '../controllers/AuthenticationControllers/userAuthController.js';
import { authenticate as Adminauthenticate} from '../controllers/AuthenticationControllers/adminAuthController.js';
import {validateRegistrationData} from '../middleware/registrationMiddleware.js';

const router = Router();

// // User route
router.post('/user/login', userAdminauthenticate);
router.post('/user/register',validateRegistrationData, register);

// Admin route
router.post('/admin/login', Adminauthenticate);

export default router;

