import { Request, Response } from 'express-serve-static-core';
import { createToken } from '../services/jwt';
const { validationResult } = require('express-validator');

import User from '../models/User';
import { registerUser } from '../services/user';

const bcrypt = require('bcrypt');

const register = async (req: Request, res: Response) => {
    const { email, password, role } = req.body;

    try {
        const validation = validationResult(req);

        if (validation.errors.length) {
            throw validation.errors;
        }
        const user = await registerUser(email, password, role);
        console.log(user);

        const token = createToken(user);

        res.status(201).json({ message: 'User registered successfully' });

        res.cookie('token', token, { httpOnly: true });
        if (role === 'admin') {
            res.redirect('/admin/dashboard');
        } else {
            res.redirect('/');
        }
    } catch (error) {
        res.status(500).json({ message: 'Registration failed', error });
    }
};

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        console.log(user);

        const token = createToken(user);

        res.cookie('token', token, { httpOnly: true });
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Login failed', error });
    }
};

const logout = (req: Request, res: Response) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'Logout successful' });
    res.redirect('/'); // TODO check redirect according to documentation
};

export { register, login, logout };
