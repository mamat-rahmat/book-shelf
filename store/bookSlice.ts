import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookState {
    books: string[];
}

const initialState: BookState = {
    books: [],
};

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<string>) => {
            state.books.push(action.payload);
        },
    },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
