'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '@/store/bookSlice';
import { AppDispatch } from '@/store';

export default function BookForm() {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim()) {
            dispatch(addBook(title));
            setTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="text"
                placeholder="Judul buku..."
                className="flex-1 px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
                Tambah
            </button>
        </form>
    );
}
