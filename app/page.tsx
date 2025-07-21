import BookForm from '@/components/BookForm';
import BookList from '@/components/BookList';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">📚 BookShelf</h1>
        <BookForm />
        <hr className="my-6" />
        <BookList />
      </div>
    </main>
  );
}