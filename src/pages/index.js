import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-shadow-lg rounded-lg p-8 w-full max-w-sm">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Caixa Geral Depositos
        </h1>
        <p>Login</p>

        {/* Campo de email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Campo de senha */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Botão de login */}
        <div className="text-center">
          <Link
            href="/produtos"
            className="block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
