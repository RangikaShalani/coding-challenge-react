import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import UserProfile from './UserProfile';

jest.mock('axios');

describe('UserProfile Component', () => {
    test('displays loading state while fetching data', () => {
        render(
            <MemoryRouter initialEntries={['/user/1']}>
                <Routes>
                    <Route path="/user/:userId" element={<UserProfile />} />
                </Routes>
            </MemoryRouter>
        );
        expect(screen.getByText(/Loading user details.../i)).toBeInTheDocument();
    });

    test('renders user details after successful API call', async () => {
        const mockUserData = {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            username: 'johndoe',
            email: 'john.doe@example.com',
            phone: '123456789',
            image: 'https://via.placeholder.com/300',
            address: { address: '123 Main St' },
            gender: 'Male',
            age: 30,
            company: { name: 'Example Corp', department: 'IT', title: 'Developer', address: { address: 'Tech Park' } },
            weight: 70,
            height: 180,
            bloodGroup: 'O+',
            eyeColor: 'Blue',
            hair: { color: 'Brown', type: 'Curly' },
        };

        axios.get.mockResolvedValueOnce({ data: mockUserData });

        render(
            <MemoryRouter initialEntries={['/user/1']}>
                <Routes>
                    <Route path="/user/:userId" element={<UserProfile />} />
                </Routes>
            </MemoryRouter>
        );

        // Wait for the user details to load
        await waitFor(() => {
            expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
        });

        expect(screen.getByText(/johndoe/i)).toBeInTheDocument();
        expect(screen.getByText(/john.doe@example.com/i)).toBeInTheDocument();
        expect(screen.getByText(/123456789/i)).toBeInTheDocument();
    });

    test('displays error message if API call fails', async () => {
        axios.get.mockRejectedValueOnce(new Error('Failed to fetch user data'));

        render(
            <MemoryRouter initialEntries={['/user/1']}>
                <Routes>
                    <Route path="/user/:userId" element={<UserProfile />} />
                </Routes>
            </MemoryRouter>
        );

        // Wait for the error message
        await waitFor(() => {
            expect(screen.getByText(/User not found.../i)).toBeInTheDocument();
        });
    });
});
