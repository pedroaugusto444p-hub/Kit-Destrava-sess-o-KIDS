import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, Layers, Sparkles, Zap } from "lucide-react";

interface InteractiveResourcePreviewProps {
  scrollToOffer: () => void;
}

const CAROUSEL_SLIDES = [
  {
    id: "slide-3",
    title: "Cartas das Emoções Kids",
    tag: "PSICOEDUCAÇÃO INFANTIL 🃏",
    subtitle: "Identificação de Sentimentos Lúdica",
    description: "Cartas terapêuticas coloridas e ilustrativas para ajudar a criança a identificar e expressar sentimentos complexos, vencendo a timidez ou a barreira verbal inicial.",
    type: "image",
    imageUrl: "https://i.ibb.co/RGR48K2M/Captura-de-Tela-3.png",
    bullets: [
      "Design lúdico com expressões faciais simples e diretas",
      "Instruções fáceis para brincar e falar de sentimentos na sessão",
      "Facilita o rapport com crianças de diferentes faixas etárias"
    ]
  },
  {
    id: "slide-4",
    title: "Termômetro da Raiva",
    tag: "REGULAÇÃO EMOCIONAL 🌡️",
    subtitle: "Mapeamento Visual de Frustração e Impulsividade",
    description: "Uma escala visual didática para ajudar a criança a mapear o nível de agitação física ou frustração, facilitando a identificação precoce de crises e comportamentos impulsivos.",
    type: "image",
    imageUrl: "https://i.ibb.co/S7Vphxbr/Captura-de-Tela-4.png",
    bullets: [
      "Metáfora visual de fácil compreensão para crianças e responsáveis",
      "Estratégias lúdicas passo a passo para se acalmar (respirar, contar, afastar)",
      "Material ideal para psicoeducação sobre regulação de raiva e ansiedade"
    ]
  },
  {
    id: "slide-5",
    title: "Diário de Pensamentos Kids",
    tag: "TERAPIA COGNITIVO-COMPORTAMENTAL 🧠",
    subtitle: "Identificação de Pensamentos e Medos",
    description: "Um diário lúdico e ilustrativo desenvolvido para guiar a criança na identificação de pensamentos automáticos e sentimentos de medo, promovendo a reestruturação cognitiva de forma leve.",
    type: "image",
    imageUrl: "https://i.ibb.co/8LrGxFLj/Captura-de-Tela-5.png",
    bullets: [
      "Layout com balões de fala e ilustrações divertidas",
      "Espaço dedicado para desenhar e escrever o que está pensando",
      "Perfeito para uso em consultório ou como tarefa divertida para casa"
    ]
  },
  {
    id: "slide-6",
    title: "Combinados de Comportamento",
    tag: "ROTINA E COMPORTAMENTO 📅",
    subtitle: "Acordos e Rotinas Visuais para Casa",
    description: "Quadros de combinados visuais interativos para ajudar a estabelecer rotinas saudáveis e limites claros de comportamento junto às crianças e seus pais de forma estimulante.",
    type: "image",
    imageUrl: "https://i.ibb.co/r2JphYV9/Captura-de-Tela-6.png",
    bullets: [
      "Aumenta a colaboração da criança nas tarefas diárias",
      "Facilita o engajamento dos pais na aplicação dos combinados clínicos",
      "Layout adaptável para diferentes idades e demandas familiares"
    ]
  },
  {
    id: "slide-7",
    title: "Anamnese Infantil Completa",
    tag: "PRODUTIVIDADE CLÍNICA 📋",
    subtitle: "Entrevista Estruturada com Responsáveis",
    description: "Um roteiro refinado para conduzir as primeiras sessões de anamnese com os pais de forma tranquila, colhendo o histórico de desenvolvimento da criança de maneira estruturada.",
    type: "image",
    imageUrl: "https://i.ibb.co/D2zwMBj/Captura-de-Tela-7.png",
    bullets: [
      "Perguntas cirúrgicas para investigar desenvolvimento físico, social e escolar",
      "Roteiro acolhedor que facilita o estabelecimento do rapport inicial com os pais",
      "Garante mais segurança para a profissional organizar o plano terapêutico"
    ]
  },
  {
    id: "slide-8",
    title: "Metas Terapêuticas Lúdicas",
    tag: "PLANEJAMENTO ESTRATÉGICO 🎯",
    subtitle: "Definição de Objetivos com a Criança",
    description: "Ferramenta lúdica (como mapa do tesouro ou caminho de conquistas) para co-criar metas terapêuticas simples junto à criança, incentivando a percepção de evolução e progresso.",
    type: "image",
    imageUrl: "https://i.ibb.co/8DNfqGP5/Captura-de-Tela-8.png",
    bullets: [
      "Metodologia leve para transformar objetivos clínicos em desafios divertidos",
      "Aumenta a motivação e o engajamento ativo da criança no processo",
      "Auxilia a profissional a monitorar e documentar a evolução clínica"
    ]
  },
  {
    id: "slide-9",
    title: "Guia para Crianças Silenciosas",
    tag: "MANEJO DE RESISTÊNCIA 📕",
    subtitle: "Dinâmicas para Desbloquear a Fala",
    description: "Estratégias de comunicação e dinâmicas lúdicas validadas para contornar silêncios difíceis, respostas curtas ou resistência, fortalecendo a aliança terapêutica sem pressão.",
    type: "image",
    imageUrl: "https://i.ibb.co/gZ9GHTCP/Captura-de-Tela-9.png",
    bullets: [
      "Intervenções passo a passo baseadas em jogos para quebrar a barreira do silêncio",
      "Estratégias lúdicas que de imediato trazem leveza e segurança para a sessão",
      "Fortalece o vínculo sem causar atritos ou desconforto para a criança"
    ]
  }
];

export default function InteractiveResourcePreview({ scrollToOffer }: InteractiveResourcePreviewProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 3500); // Faster autoplay (3.5 seconds)
    return () => clearInterval(timer);
  }, []);

  const currentSlide = CAROUSEL_SLIDES[activeIndex];

  return (
    <section id="interactive-preview-section" className="bg-neutral-50/55 py-20 px-4 border-t border-b border-neutral-200/60">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 id="preview-section-title" className="font-sans font-black text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight">
            Veja o kit por dentro
          </h2>
          <p id="preview-section-subtitle" className="text-gray-500 mt-3 text-sm md:text-base max-w-xl mx-auto font-medium">
            Explore abaixo o carrossel de materiais do Kit Destrava Sessão Kids. Veja exemplos reais de como os arquivos são estruturados para tornar suas sessões lúdicas e estruturadas.
          </p>
        </div>

        {/* Main Showcase Grid */}
        <div id="preview-interactive-box" className="bg-white rounded-3xl border border-neutral-200/75 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[480px] max-w-5xl mx-auto">
          
          {/* Visual Sandbox/Image Display Panel (Left 7 Columns) */}
          <div className="lg:col-span-7 bg-neutral-50 text-gray-800 p-6 md:p-8 flex flex-col justify-between relative min-h-[400px] border-b lg:border-b-0 lg:border-r border-neutral-200/60">
            
            {/* Top Indicator */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-[10px] uppercase font-black tracking-widest text-[#1ca296] bg-[#1ca296]/10 px-2.5 py-1 rounded-full border border-[#1ca296]/20">
                {currentSlide.tag}
              </span>
              <span className="text-[11px] text-neutral-500 font-mono font-semibold">
                Slide {activeIndex + 1} de {CAROUSEL_SLIDES.length}
              </span>
            </div>

            {/* Slider Content Area */}
            <div className="my-auto flex flex-col items-center justify-center py-6 w-full h-full min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex justify-center items-center h-full"
                >
                  {currentSlide.imageUrl && (
                    <div className="relative max-w-full lg:max-w-md w-full flex justify-center items-center">
                      <img
                        src={currentSlide.imageUrl}
                        alt={currentSlide.title}
                        referrerPolicy="no-referrer"
                        className="w-full max-h-[380px] md:max-h-[460px] object-contain rounded-xl shadow-2xl border border-neutral-200"
                      />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Copy description panel (Right 5 Columns) */}
          <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between bg-white text-left">
            
            <div className="space-y-4">
              <span className="text-amber-600 text-xs font-extrabold uppercase tracking-widest block flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                {currentSlide.tag}
              </span>
              <h3 className="font-sans font-black text-2xl text-gray-950 leading-tight">
                {currentSlide.title}
              </h3>
              <p className="text-[#1ca296] text-xs font-bold uppercase tracking-wider">
                {currentSlide.subtitle}
              </p>
              
              <hr className="border-neutral-100 my-4" />

              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                {currentSlide.description}
              </p>

              <div className="space-y-2.5 pt-4">
                {currentSlide.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-gray-700 font-semibold leading-snug">
                    <CheckCircle className="w-4 h-4 text-[#1ca296] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA panel */}
            <div className="pt-8 space-y-3">
              <button
                onClick={scrollToOffer}
                className="w-full bg-[#1ca296] hover:bg-[#128a7f] text-white py-4 rounded-xl font-bold tracking-wide transition shadow-lg shadow-teal-700/10 cursor-pointer flex items-center justify-center gap-2 uppercase text-sm"
              >
                <Layers className="w-4 h-4" />
                Acessar o acervo completo
              </button>
              <p className="text-[10px] text-gray-400 text-center uppercase tracking-wider font-bold flex items-center justify-center gap-1">
                <Zap className="w-3 h-3 text-amber-500" />
                Acesso Vitalício • PDFs Prontos
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
