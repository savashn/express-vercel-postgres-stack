import { z } from 'zod';

export const registerSchema = z.object({
	name: z.string().min(2, 'Name is required'),
	email: z.string().email('Invalid email format').min(5, 'Email is required'),
	username: z.string().min(5, 'Username is required'),
	password: z.string().min(8, 'Password must be at least 8 characters')
});

export const loginSchema = z.object({
	user: z.string().min(2, 'Username or email is required'),
	password: z.string().min(6, 'Password is required')
});
