function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100">

      <div className="bg-white p-10 rounded-2xl shadow-lg w-80 text-center">

        <h1 className="text-pink-500 text-3xl font-bold mb-2">
          Sugar Bloom Bakery
        </h1>

        <h2 className="text-gray-700 mb-6">
          Login
        </h2>

        <form className="flex flex-col">

          <input
            type="email"
            placeholder="Email"
            className="mb-3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
          />

          <input
            type="password"
            placeholder="Password"
            className="mb-5 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
          />

          <button
            type="submit"
            className="bg-pink-400 hover:bg-pink-500 text-white py-2 rounded font-bold transition"
          >
            Login
          </button>

        </form>

        <p className="mt-4 text-sm text-gray-500">
          Don’t have an account? <span className="text-pink-500">Sign up</span>
        </p>

      </div>

    </div>
  );
}

export default Login;``