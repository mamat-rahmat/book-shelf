'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export default function BookList() {
    const books = useSelector((state: RootState) => state.book.books);

    if (books.length === 0) {
        return <p className="text-gray-500 text-center">Belum ada buku ditambahkan.</p>;
    }

    return (
        <ul className="space-y-2">
            {books.map((book, i) => (
                <li
                    key={i}
                    className="px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg text-blue-900"
                >
                    {book}
                </li>
            ))}
        </ul>
    );
}
