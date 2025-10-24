"use client";
import { Typography } from "alfabit-ds-vick";
import { useEffect, useState, ChangeEvent } from "react";
import Link from "next/link";

export default function Cadastro() {
  const [mounted, setMounted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    razaoSocial: "",
    email: "",
    senha: "",
    areaAtuacao: "",
    website: "",
    desejaContato: true,
    aceitoTermos: false,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
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
          <div className="relative z-10 text-center text-white bg-opacity-10 backdrop-blur-sm border-2 border-white border-opacity-60 rounded-3xl p-12 mx-8 max-w-sm">
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
                Boas-vindas ao universo de softwares sob medida para a gestão de
                negócios de tecnologia!
              </Typography>
            </div>
          </div>
        </div>

        {/* Formulário de Cadastro */}
        <div className="w-1/2 p-12">
          <div className="max-w-sm mx-auto">
            {/* Steps */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-4">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        currentStep >= step
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {step}
                    </div>
                    {step < 3 && (
                      <div className="w-8 h-0.5 bg-gray-200 ml-2"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Header */}
            {currentStep === 1 && (
              <div className="mb-8 text-center">
                <Typography
                  element="h1"
                  size="title2"
                  className="text-gray-900 font-bold text-2xl mb-2"
                >
                  Crie sua conta
                </Typography>
              </div>
            )}

            {/* Form Fields */}
            <div className="space-y-6">
              {currentStep === 1 && (
                <>
                  {/* Razão Social */}
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Razão Social
                    </label>
                    <input
                      type="text"
                      value={formData.razaoSocial}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setFormData({
                          ...formData,
                          razaoSocial: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Insira seu nome e sobrenome"
                    />
                    <div className="text-xs text-gray-400 mt-1">
                      Exemplo: Tech Company S.A.
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder=""
                    />
                    <div className="text-xs text-gray-400 mt-1">
                      Exemplo: adm@techcompany.com
                    </div>
                  </div>

                  {/* Senha */}
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Senha
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={formData.senha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setFormData({ ...formData, senha: e.target.value })
                        }
                        className="w-full px-4 py-3 pr-12 bg-gray-50 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder=""
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
                    <div className="text-xs text-gray-400 mt-1">
                      Exemplo: adm@techcompany.com
                    </div>
                  </div>
                </>
              )}

              {currentStep === 2 && (
                <>
                  {/* Área de Atuação */}
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Qual a área de atuação da instituição?
                    </label>
                    <select
                      value={formData.areaAtuacao}
                      onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                        setFormData({
                          ...formData,
                          areaAtuacao: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none"
                    >
                      <option value="">
                        Selecione a opção que mais se aproxima
                      </option>
                      <option value="tecnologia">Tecnologia</option>
                      <option value="educacao">Educação</option>
                      <option value="saude">Saúde</option>
                      <option value="financeiro">Financeiro</option>
                      <option value="comercio">Comércio</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>

                  {/* Website */}
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setFormData({ ...formData, website: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Cole a URL do website da empresa"
                    />
                    <div className="text-xs text-gray-400 mt-1">
                      Exemplo: http://techcompany.com
                    </div>
                    <button className="text-blue-600 text-sm mt-2">
                      + Adicionar
                    </button>
                  </div>

                  {/* Toggle Contato */}
                  <div>
                    <label className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Desejo receber contato para consultoria
                      </span>
                      <div className="relative">
                        <div
                          onClick={() =>
                            setFormData({
                              ...formData,
                              desejaContato: !formData.desejaContato,
                            })
                          }
                          className={`w-11 h-6 rounded-full cursor-pointer transition-colors ${
                            formData.desejaContato
                              ? "bg-blue-600"
                              : "bg-gray-300"
                          }`}
                        >
                          <div
                            className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                              formData.desejaContato
                                ? "translate-x-6"
                                : "translate-x-1"
                            } mt-1`}
                          ></div>
                        </div>
                      </div>
                    </label>
                    <span className="text-xs text-blue-600 block mt-1">
                      Sim
                    </span>
                  </div>

                  {/* Termos */}
                  <div>
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        checked={formData.aceitoTermos}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            aceitoTermos: e.target.checked,
                          })
                        }
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        Aceito os termos e condições deste cadastro.
                      </span>
                    </label>
                  </div>
                </>
              )}

              {currentStep === 3 && (
                <>
                  {/* Sucesso */}
                  <div className="text-center py-8">
                    <Typography
                      element="h2"
                      size="title2"
                      className="text-gray-900 font-bold text-2xl mb-4"
                    >
                      Conta criada com sucesso!
                    </Typography>
                    <Typography
                      element="p"
                      size="md"
                      className="text-gray-600 mb-8"
                    >
                      Agora é só voltar para a plataforma e impulsionar seu
                      negócio com tecnologia!
                    </Typography>

                    {/* Ilustração de sucesso */}
                    <div className="flex justify-center mb-8">
                      <div className="relative">
                        <svg
                          className="w-64 h-64"
                          viewBox="0 0 300 300"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* Fundo circular */}
                          <circle
                            cx="150"
                            cy="150"
                            r="140"
                            fill="#E6F3FF"
                            opacity="0.5"
                          />

                          {/* Prédios no fundo */}
                          <rect
                            x="50"
                            y="100"
                            width="20"
                            height="80"
                            fill="#BFDBFE"
                            rx="2"
                          />
                          <rect
                            x="75"
                            y="80"
                            width="25"
                            height="100"
                            fill="#93C5FD"
                            rx="2"
                          />
                          <rect
                            x="205"
                            y="90"
                            width="22"
                            height="90"
                            fill="#BFDBFE"
                            rx="2"
                          />
                          <rect
                            x="230"
                            y="70"
                            width="28"
                            height="110"
                            fill="#93C5FD"
                            rx="2"
                          />

                          {/* Detalhes dos prédios */}
                          <rect
                            x="53"
                            y="110"
                            width="3"
                            height="3"
                            fill="#60A5FA"
                          />
                          <rect
                            x="58"
                            y="110"
                            width="3"
                            height="3"
                            fill="#60A5FA"
                          />
                          <rect
                            x="63"
                            y="110"
                            width="3"
                            height="3"
                            fill="#60A5FA"
                          />
                          <rect
                            x="53"
                            y="125"
                            width="3"
                            height="3"
                            fill="#60A5FA"
                          />
                          <rect
                            x="58"
                            y="125"
                            width="3"
                            height="3"
                            fill="#60A5FA"
                          />
                          <rect
                            x="63"
                            y="125"
                            width="3"
                            height="3"
                            fill="#60A5FA"
                          />

                          {/* Nuvens */}
                          <ellipse
                            cx="80"
                            cy="40"
                            rx="15"
                            ry="8"
                            fill="#DBEAFE"
                          />
                          <ellipse
                            cx="90"
                            cy="35"
                            rx="12"
                            ry="6"
                            fill="#DBEAFE"
                          />
                          <ellipse
                            cx="200"
                            cy="30"
                            rx="18"
                            ry="9"
                            fill="#DBEAFE"
                          />

                          {/* Avião */}
                          <path
                            d="M220 45 L245 40 L240 43 L250 42 L245 45 L220 50 Z"
                            fill="#3B82F6"
                          />
                          <line
                            x1="250"
                            y1="42"
                            x2="260"
                            y2="40"
                            stroke="#3B82F6"
                            strokeWidth="2"
                          />

                          {/* Personagem principal */}
                          <g transform="translate(150, 120)">
                            {/* Corpo */}
                            <ellipse
                              cx="0"
                              cy="30"
                              rx="25"
                              ry="35"
                              fill="#3B82F6"
                            />

                            {/* Cabeça */}
                            <circle cx="0" cy="-10" r="18" fill="#FEF3C7" />

                            {/* Cabelo */}
                            <path
                              d="M-15 -20 Q0 -30 15 -20 Q10 -25 0 -25 Q-10 -25 -15 -20"
                              fill="#92400E"
                            />

                            {/* Olhos */}
                            <circle cx="-6" cy="-12" r="2" fill="#1F2937" />
                            <circle cx="6" cy="-12" r="2" fill="#1F2937" />

                            {/* Sorriso */}
                            <path
                              d="M-8 -5 Q0 2 8 -5"
                              stroke="#1F2937"
                              strokeWidth="2"
                              fill="none"
                            />

                            {/* Braços */}
                            <ellipse
                              cx="-30"
                              cy="15"
                              rx="8"
                              ry="20"
                              fill="#FEF3C7"
                              transform="rotate(-20)"
                            />
                            <ellipse
                              cx="30"
                              cy="15"
                              rx="8"
                              ry="20"
                              fill="#FEF3C7"
                              transform="rotate(20)"
                            />

                            {/* Pernas */}
                            <ellipse
                              cx="-12"
                              cy="65"
                              rx="8"
                              ry="25"
                              fill="#1D4ED8"
                            />
                            <ellipse
                              cx="12"
                              cy="65"
                              rx="8"
                              ry="25"
                              fill="#1D4ED8"
                            />

                            {/* Pés */}
                            <ellipse
                              cx="-15"
                              cy="90"
                              rx="12"
                              ry="6"
                              fill="#374151"
                            />
                            <ellipse
                              cx="15"
                              cy="90"
                              rx="12"
                              ry="6"
                              fill="#374151"
                            />
                          </g>

                          {/* Laptop/Notebook */}
                          <g transform="translate(120, 200)">
                            <rect
                              x="0"
                              y="0"
                              width="60"
                              height="35"
                              fill="#374151"
                              rx="3"
                            />
                            <rect
                              x="3"
                              y="3"
                              width="54"
                              height="29"
                              fill="#1F2937"
                              rx="2"
                            />
                            <rect
                              x="8"
                              y="8"
                              width="44"
                              height="24"
                              fill="#3B82F6"
                              rx="1"
                            />
                            <line
                              x1="15"
                              y1="15"
                              x2="45"
                              y2="15"
                              stroke="#FFFFFF"
                              strokeWidth="1"
                            />
                            <line
                              x1="15"
                              y1="20"
                              x2="35"
                              y2="20"
                              stroke="#FFFFFF"
                              strokeWidth="1"
                            />
                          </g>

                          {/* Elementos decorativos flutuantes */}
                          <circle
                            cx="70"
                            cy="60"
                            r="3"
                            fill="#60A5FA"
                            opacity="0.6"
                          />
                          <circle
                            cx="240"
                            cy="110"
                            r="4"
                            fill="#3B82F6"
                            opacity="0.4"
                          />
                          <circle
                            cx="80"
                            cy="200"
                            r="2"
                            fill="#93C5FD"
                            opacity="0.8"
                          />

                          {/* Planeta */}
                          <g transform="translate(260, 80)">
                            <circle cx="0" cy="0" r="15" fill="#8B5CF6" />
                            <ellipse
                              cx="0"
                              cy="0"
                              rx="20"
                              ry="3"
                              fill="none"
                              stroke="#A78BFA"
                              strokeWidth="2"
                            />
                          </g>

                          {/* Base/Sombra */}
                          <ellipse
                            cx="150"
                            cy="240"
                            rx="50"
                            ry="8"
                            fill="#BFDBFE"
                            opacity="0.3"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Botão Voltar */}
                    <Link
                      href="/"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      Voltar para a home
                    </Link>
                  </div>
                </>
              )}

              {/* Botões de Navegação */}
              {currentStep < 3 && (
                <>
                  <button
                    onClick={handleNext}
                    disabled={currentStep === 2 && !formData.aceitoTermos}
                    className={`w-full py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center ${
                      currentStep === 2 && !formData.aceitoTermos
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                  >
                    <span>
                      {currentStep === 2 ? "Crie minha conta!" : "Próxima"}
                    </span>
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

                  {/* Link para login */}
                  <div className="text-center">
                    <span className="text-sm text-gray-600">
                      Já tem conta?{" "}
                    </span>
                    <Link
                      href="/"
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Faça seu login!
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
