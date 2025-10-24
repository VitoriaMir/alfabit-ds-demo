"use client";
import { Typography } from "alfabit-ds-vick";
import { useEffect, useState, ChangeEvent } from "react";
import Link from "next/link";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  useEffect(() => {
    setMounted(true);
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-blue-600">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/Background2.png')] bg-cover bg-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full flex">
        {/* Logo da Alfabit */}
        <div className="LogoAlfabit w-1/2 bg-linear-to-br from-blue-600 to-purple-700 p-12 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pexels-canva-studio-3153201.png')] bg-cover bg-center opacity-30"></div>

          {/* Conteúdo da Alfabit */}
          <div className="relative z-10 text-center text-white bg-opacity-5 backdrop-blur-sm border-2 border-white border-opacity-60 rounded-3xl p-12 mx-8 max-w-sm">
            {/* Logo Alfabit */}
            <div className="mb-6">
              <Typography
                element="h1"
                size="title1"
                className="text-white font-bold text-5xl tracking-wide"
              >
                ΔIfabit
              </Typography>
            </div>

            {/* Mensagem de boas-vindas */}
            <div className="space-y-3">
              <Typography
                element="h2"
                size="title3"
                className="text-white font-medium text-lg leading-relaxed"
              >
                Boas-vindas de volta!
              </Typography>
              <Typography
                element="p"
                size="md"
                className="text-white opacity-90 leading-relaxed"
              >
                Em que você vai inovar hoje?
              </Typography>
            </div>
          </div>
        </div>

        {/* Formulário de Login */}
        <div className="w-1/2 p-12 Formulario de Login">
          <div className="max-w-sm mx-auto">
            {/* Header */}
            <div className="mb-8">
              <Typography
                element="h1"
                size="title2"
                className="text-gray-900 font-bold text-3xl mb-3"
              >
                Login
              </Typography>
            </div>

            {/* Inputs com Ícones */}
            <div className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Email ou usuário
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="usuario@alfabit.com.br"
                />
              </div>

              {/* Senha */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Senha
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="w-full px-4 py-3 pr-12 bg-gray-50 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="••••••"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Lembrar-me e Esqueci a senha */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">Lembrar-me</span>
                </label>
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Esqueci a senha
                </a>
              </div>

              {/* Botão Login */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                <span>Login</span>
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>

              {/* Separador */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    ou entre com seu email
                  </span>
                </div>
              </div>

              {/* Botão Google */}
              <button className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              </button>

              {/* Link para cadastro */}
              <div className="text-center">
                <span className="text-sm text-gray-600">
                  Ainda não tem conta?{" "}
                </span>
                <Link
                  href="/cadastro"
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center"
                >
                  Crie seu cadastro
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
