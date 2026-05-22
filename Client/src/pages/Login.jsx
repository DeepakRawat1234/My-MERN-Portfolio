import { useState } from "react";
import { Lock, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


export default function AdminLogin() {
  const location = useLocation();

  

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const ADMIN_PASSWORD = location.state.slice(0,-2);

  const handleLogin = (e) => {

    e.preventDefault();

    if (password == ADMIN_PASSWORD) {

      

      navigate("/admin-dashboard");

    } else {

      setError("Incorrect password");

      setPassword("");
    }
  };

  return (

    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background Blur Effects */}

      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-[120px] animate-pulse"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/30 rounded-full blur-[120px] animate-pulse"></div>

      {/* Login Card */}

      <div className="w-full max-w-md relative z-10">

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">

          {/* Icon */}

          <div className="flex justify-center mb-6">

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">

              <Lock className="w-8 h-8 text-white" />

            </div>

          </div>

          {/* Heading */}

          <div className="text-center mb-8">

            <h1 className="text-3xl font-bold text-white mb-2">
              Admin Login
            </h1>

            <p className="text-gray-400">
              Enter password to access admin panel
            </p>

          </div>

          {/* Form */}

          <form onSubmit={handleLogin} className="space-y-6">

            <div>

              <label className="block text-sm text-gray-300 mb-2">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-purple-500 transition-all"
                required
              />

              {error && (
                <p className="text-red-400 text-sm mt-2">
                  {error}
                </p>
              )}

            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 hover:scale-105 transition-all duration-300 text-white font-semibold flex items-center justify-center gap-2"
            >

              Login to Admin Panel

              <LogIn className="w-5 h-5" />

            </button>

          </form>

          {/* Demo Password */}

          <div className="mt-6 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30">

            <p className="text-yellow-400 text-sm text-center">

              <strong>Use Admin Passowrd For Login</strong> 

            </p>

          </div>

        </div>

        {/* Back Button */}

        <div className="text-center mt-6">

          <button
            onClick={() => navigate("/")}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ← Back to Portfolio
          </button>

        </div>

      </div>

    </div>
  );
}