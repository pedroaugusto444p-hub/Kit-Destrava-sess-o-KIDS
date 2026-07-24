import { FAQItem, ResourceItem, Testimonial, KitOption } from "./types";

export const RESOURCE_ITEMS: ResourceItem[] = [
  {
    id: "ativ-1",
    title: "Atividade terapêutica 1",
    subtitle: "Identificação e Aceitação de Emoções",
    description: "Um material visual e dinâmico que ajuda o paciente adulto a identificar, nomear e aceitar estados emocionais complexos, superando a barreira do silêncio ou da racionalização excessiva.",
    color: "from-rose-500 to-orange-500",
    imageEmoji: "🎡",
    previewType: "wheel"
  },
  {
    id: "ativ-2",
    title: "Atividade terapêutica 2",
    subtitle: "Termômetro de Regulação da Ansiedade",
    description: "Ajuda o paciente a mapear os gatilhos físicos e cognitivos da ansiedade de 1 a 5, facilitando a aplicação imediata de técnicas de ancoragem de acordo com o nível detectado.",
    color: "from-amber-500 to-red-600",
    imageEmoji: "🌡️",
    previewType: "thermometer"
  },
  {
    id: "ativ-3",
    title: "Atividade terapêutica 3",
    subtitle: "Rastreador de Pensamentos Ansiosos e Repetitivos",
    description: "Exercício sensorial para desacelerar o fluxo de pensamentos obsessivos (ruminação mental), estimulando foco no momento presente e regulação respiratória.",
    color: "from-teal-500 to-emerald-600",
    imageEmoji: "🌀",
    previewType: "maze"
  },
  {
    id: "ativ-4",
    title: "Atividade terapêutica 4",
    subtitle: "Pote da Autocompaixão e Autoestima",
    description: "Estratégia prática para atenuar a autocrítica severa e a culpa exagerada, auxiliando o paciente adulto a documentar, reconhecer e internalizar conquistas e aspectos positivos.",
    color: "from-indigo-500 to-purple-600",
    imageEmoji: "🏺",
    previewType: "jar"
  },
  {
    id: "ativ-5",
    title: "Atividade terapêutica 5",
    subtitle: "Cartas de Crenças Limitantes e Autoimagem",
    description: "Baralho terapêutico interativo para identificar e reestruturar pensamentos disfuncionais e esquemas que travam o desenvolvimento pessoal e profissional do adulto.",
    color: "from-sky-500 to-blue-600",
    imageEmoji: "🃏",
    previewType: "cards"
  },
  {
    id: "rec-1",
    title: "Cartas terapêuticas",
    subtitle: "Perguntas de Conexão e Autoexploração",
    description: "Cartas com perguntas estratégicas para quebrar o gelo e abrir espaço para o paciente falar sobre o que sente, superando respostas automáticas.",
    color: "from-cyan-500 to-blue-700",
    imageEmoji: "🃏",
    previewType: "cards"
  },
  {
    id: "rec-2",
    title: "Exercícios de reflexão",
    subtitle: "Mapeamento Somático e Sensações Corporais",
    description: "Mapeamento anatômico de reações corporais do estresse, ansiedade e raiva. Excelente para pacientes com alexitimia ou forte bloqueio corporal.",
    color: "from-violet-500 to-fuchsia-600",
    imageEmoji: "🧍",
    previewType: "behavior"
  },
  {
    id: "rec-3",
    title: "Fichas de emoções",
    subtitle: "Expressão e Diferenciação de Sentimentos",
    description: "Fichas visuais para facilitar a diferenciação de sentimentos secundários (como frustração, mágoa, rejeição) e promover insights profundos.",
    color: "from-amber-600 to-orange-700",
    imageEmoji: "🎭",
    previewType: "expressions"
  },
  {
    id: "rec-4",
    title: "Atividades de autoconhecimento",
    subtitle: "Identificação de Valores e Propósito",
    description: "Exercício de seleção e priorização de valores fundamentais para tomada de decisões importantes, transições de carreira e reconstrução pós-crise.",
    color: "from-emerald-500 to-teal-600",
    imageEmoji: "🏺",
    previewType: "jar"
  },
  {
    id: "ativ-6",
    title: "Atividade terapêutica 6",
    subtitle: "Definição de Limites nos Relacionamentos",
    description: "Roteiro interativo e visual para exercitar a assertividade, estabelecer limites saudáveis com familiares ou cônjuges e combater a codependência.",
    color: "from-blue-500 to-indigo-600",
    imageEmoji: "🧱",
    previewType: "maze"
  },
  {
    id: "ativ-7",
    title: "Atividade terapêutica 7",
    subtitle: "Ciclo de Devolutiva de Autossabotagem",
    description: "Roda interativa que ajuda a mapear comportamentos autossabotadores, identificando o gatilho, a resposta protetiva e a consequência negativa.",
    color: "from-indigo-600 to-pink-600",
    imageEmoji: "🔄",
    previewType: "wheel"
  },
  {
    id: "ativ-8",
    title: "Atividade terapêutica 8",
    subtitle: "Matriz de Resolução e Tomada de Decisão",
    description: "Estrutura lógica para organizar escolhas complexas de vida, ponderando valores e riscos de forma equilibrada e sem estresse.",
    color: "from-purple-600 to-rose-600",
    imageEmoji: "⚖️",
    previewType: "cards"
  },
  {
    id: "ativ-9",
    title: "Atividade terapêutica 9",
    subtitle: "Termômetro da Procrastinação e Inércia",
    description: "Gráfico de gradação para rastrear o nível de resistência interna a tarefas importantes e definir micropassos para sair da inércia.",
    color: "from-orange-500 to-red-600",
    imageEmoji: "⏳",
    previewType: "thermometer"
  },
  {
    id: "ativ-10",
    title: "Atividade terapêutica 10",
    subtitle: "Pote da Resiliência e Recursos Pessoais",
    description: "Estratégia visual de resgate de enfrentamentos bem-sucedidos anteriores para fortalecer a autoeficácia de pacientes em momentos de extrema sobrecarga.",
    color: "from-rose-500 to-pink-600",
    imageEmoji: "🏺",
    previewType: "jar"
  },
  {
    id: "rec-5",
    title: "Recursos para ansiedade",
    subtitle: "Mapeamento de Diálogo Interno Crítico",
    description: "Fichas visuais para identificar os pensamentos automáticos destrutivos e substituí-los por respostas mais gentis e racionais durante crises.",
    color: "from-teal-600 to-cyan-600",
    imageEmoji: "📈",
    previewType: "thermometer"
  },
  {
    id: "rec-6",
    title: "Recursos para autoestima",
    subtitle: "Cartas de Enfrentamento Psicológico",
    description: "Frases de apoio cognitivo e lembretes realistas prontos para carregar na carteira ou celular para combater pensamentos catastróficos.",
    color: "from-blue-600 to-purple-700",
    imageEmoji: "🎯",
    previewType: "behavior"
  },
  {
    id: "rec-7",
    title: "Recursos para relacionamentos",
    subtitle: "Grade de Autogestão e Diário de Limites",
    description: "Checklist de rituais de autocuidado diário e hábitos de higiene mental projetados para monitorar a evolução e o bem-estar semanal do paciente.",
    color: "from-emerald-600 to-green-700",
    imageEmoji: "✅",
    previewType: "expressions"
  },
  {
    id: "rec-8",
    title: "Recursos para regulação emocional",
    subtitle: "Manejo Lúdico de Emoções e Crises",
    description: "Recursos visuais para ajudar a criança a reconhecer emoções, identificar a intensidade do que sente e experimentar estratégias lúdicas de autorregulação.",
    color: "from-violet-600 to-purple-600",
    imageEmoji: "🧘‍♀️",
    previewType: "behavior"
  }
];

export const CHALLENGE_ITEMS = [
  {
    id: "not-knowing",
    emoji: "😶",
    text: "A criança que diz que não sabe o que está sentindo"
  },
  {
    id: "all-good",
    emoji: "🙂",
    text: "A criança que responde apenas “está tudo bem”"
  },
  {
    id: "changing-topic",
    emoji: "🏃‍♂️",
    text: "A criança que muda de assunto ou pede outra atividade quando a conversa fica mais profunda"
  },
  {
    id: "rationalization",
    emoji: "🧠",
    text: "A criança que repete o que ouviu dos adultos, mas não consegue nomear as próprias emoções"
  },
  {
    id: "anxious-thoughts",
    emoji: "💭",
    text: "A criança ansiosa que fica presa nos mesmas preocupações"
  },
  {
    id: "self-blame",
    emoji: "😔",
    text: "A criança que se culpa por tudo, teme errar ou se cobra excessivamente"
  },
  {
    id: "boundary-issue",
    emoji: "🧱",
    text: "A criança que apresenta dificuldade para respeitar limites, regras ou turnos"
  },
  {
    id: "procrastination",
    emoji: "⏳",
    text: "A criança que se distrai, abandona a atividade ou age sem pensar"
  },
  {
    id: "silent-patient",
    emoji: "🤫",
    text: "A criança que permanece em silêncio e espera que você conduza toda a sessão"
  },
  {
    id: "knowing-no-change",
    emoji: "🔄",
    text: "A criança que entende o combinado durante a sessão, mas continua repetindo o comportamento em casa ou na escola"
  }
];

export const BENEFIT_ITEMS = [
  {
    id: "directed",
    emoji: "🎯",
    title: "Sessões mais direcionadas",
    description: "Você entra sabendo quais caminhos pode explorar, sem depender apenas de perguntas improvisadas ou perder tempo procurando uma atividade de última hora."
  },
  {
    id: "participative",
    emoji: "👥",
    title: "Criança mais participativa",
    description: "Cartas, jogos, exercícios e recursos visuais ajudam a criança a se envolver, organizar pensamentos, identificar emoções e participar mais ativamente da sessão."
  },
  {
    id: "depth",
    emoji: "💬",
    title: "Mais possibilidades de expressão",
    description: "Os recursos ajudam a sair das respostas automáticas e oferecem formas lúdicas para a criança comunicar experiências, emoções e dificuldades."
  },
  {
    id: "confident",
    emoji: "🛡️",
    title: "Mais confiança na condução",
    description: "Ter diferentes possibilidades em mãos ajuda você a selecionar o recurso mais adequado para a idade, a demanda e o momento de cada sessão."
  },
  {
    id: "alternative",
    emoji: "💳",
    title: "Alternativa aos materiais caros",
    description: "Tenha acesso a dezenas de cartas, jogos, fichas, exercícios e atividades por uma fração do valor que gastaria comprando materiais separadamente."
  }
];

export const BONUS_ITEMS = [
  {
    id: "1",
    title: "Fichas de Anamnese Infantil e Entrevista com Responsáveis",
    description: "Modelos estruturados para organizar o primeiro atendimento, compreender a história da criança e reunir informações importantes sobre desenvolvimento, rotina, família, escola, comportamento e emoções. Chegue à primeira sessão com um roteiro claro e profissional.",
    originalPrice: 27,
    free: true
  },
  {
    id: "2",
    title: "Roteiro de Devolutiva para Pais e Responsáveis",
    description: "Estruturas prontas para organizar percepções, avanços e pontos importantes do processo de maneira clara, ética e acolhedora. Tenha mais segurança para comunicar o que está sendo observado e quais aspectos podem continuar sendo trabalhados.",
    originalPrice: 19,
    free: true
  },
  {
    id: "3",
    title: "Checklist de Planejamento de Sessão Infantil",
    description: "Um passo a passo para definir objetivos, selecionar recursos, adaptar a atividade à faixa etária e organizar cada atendimento antes de começar. Menos improviso e mais intencionalidade.",
    originalPrice: 17,
    free: true
  },
  {
    id: "4",
    title: "Guia para Crianças Resistentes, Silenciosas ou com Baixo Engajamento",
    description: "Estratégias práticas, estímulos lúdicos e perguntas adaptadas para atendimentos em que a criança responde pouco, evita assuntos importantes, perde o interesse ou apresenta dificuldade para se expressar.",
    originalPrice: 17,
    free: true
  },
  {
    id: "5",
    title: "Kit de Psicoeducação Visual Infantil",
    description: "Materiais visuais para explicar ansiedade, emoções, pensamentos, autocontrole, autoestima, limites, comportamento e atenção de forma simples e compreensível. Ajude a criança a entender melhor o que está acontecendo e participar mais ativamente do processo.",
    originalPrice: 17,
    free: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Nome da profissional (Psicóloga Infantil)",
    avatar: "PI",
    messages: [
      { sender: "parent", text: "Passando para compartilhar que as cartas infantis e jogos ajudaram muito a criança a participar!", time: "10:14" },
      { sender: "parent", text: "[INSIRA AQUI UM DEPOIMENTO REAL SOBRE UMA CRIANÇA QUE PASSOU A PARTICIPAR MAIS DAS SESSÕES COM O APOIO DOS RECURSOS.]", time: "10:15" },
      { sender: "therapist", text: "Que alegria ler isso! Os recursos lúdicos facilitam a expressão da criança de forma muito natural e divertida.", time: "10:20" }
    ]
  },
  {
    id: "test-2",
    name: "Nome da profissional (Psicóloga Clínica)",
    avatar: "PC",
    messages: [
      { sender: "parent", text: "Adorei a organização por demanda infantil no Kit Destrava Sessão Kids!", time: "14:22" },
      { sender: "parent", text: "[INSIRA AQUI UM DEPOIMENTO REAL SOBRE A ORGANIZAÇÃO POR DEMANDA E A REDUÇÃO DO TEMPO GASTO CRIANDO OU PROCURANDO ATIVIDADES.]", time: "14:23" },
      { sender: "therapist", text: "Excelente! Economizar tempo na preparação das sessões dá mais fôlego para o que realmente importa no consultório.", time: "14:28" }
    ]
  },
  {
    id: "test-3",
    name: "Nome da profissional (Psicóloga)",
    avatar: "PS",
    messages: [
      { sender: "parent", text: "Os recursos visuais de regulação ajudaram muito a criança a falar de seus sentimentos.", time: "16:45" },
      { sender: "parent", text: "[INSIRA AQUI UM DEPOIMENTO REAL SOBRE CARTAS, JOGOS OU RECURSOS VISUAIS QUE AJUDARAM UMA CRIANÇA A NOMEAR EMOÇÕES OU FALAR SOBRE UMA SITUAÇÃO.]", time: "16:47" },
      { sender: "therapist", text: "Maravilhoso! Ter diferentes vias lúdicas enriquece demais o raciocínio clínico no atendimento infantil.", time: "16:52" }
    ]
  }
];

export const KIT_OPTIONS: KitOption[] = [
  {
    id: "basic",
    name: "Kit Básico",
    tagline: "+80 Recursos Essenciais",
    price: 10.00,
    originalPrice: 47.90,
    ctaText: "Quero o kit básico agora",
    features: [
      "+80 recursos terapêuticos para crianças",
      "Organizados por demanda clínica",
      "Cartas, fichas, jogos e exercícios prontos para usar",
      "Materiais em formato PDF",
      "Acesso imediato após a compra",
      "Funciona em atendimentos presenciais e online",
      "Suporte por e-mail",
      "Garantia incondicional de 15 dias"
    ]
  },
  {
    id: "complete",
    name: "Kit Completo",
    tagline: "+160 Recursos + 5 Bônus Exclusivos",
    price: 29.90,
    originalPrice: 114.90,
    installments: "6x de R$ 5,88",
    savings: 84.10,
    popular: true,
    ctaText: "Quero o kit completo",
    features: [
      "+160 recursos terapêuticos para crianças",
      "Organizados por demanda clínica",
      "Cartas, fichas, jogos, exercícios e atividades",
      "Materiais prontos para imprimir",
      "Funciona em atendimentos online e presenciais",
      "Acesso imediato em PDF",
      "Fichas de Anamnese Infantil e Entrevista com Responsáveis (R$27,00)",
      "Roteiro de Devolutiva para Pais e Responsáveis (R$19,00)",
      "Checklist de Planejamento de Sessão Infantil (R$17,00)",
      "Guia para Crianças Resistentes, Silenciosas ou com Baixo Engajamento (R$17,00)",
      "Kit de Psicoeducação Visual Infantil (R$17,00)",
      "Suporte prioritário por e-mail",
      "Garantia incondicional de 15 dias"
    ]
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Como acesso o material depois da compra?",
    answer: "Após a confirmação do pagamento, você receberá as instruções de acesso no e-mail informado durante a compra. O acesso é digital e liberado automaticamente."
  },
  {
    id: "faq-2",
    question: "Em qual formato vem o kit?",
    answer: "Os recursos são entregues em formato PDF, prontos para imprimir ou utilizar digitalmente durante os atendimentos online."
  },
  {
    id: "faq-3",
    question: "Posso imprimir os materiais quantas vezes quiser?",
    answer: "Sim. Você poderá imprimir os recursos sempre que precisar para uso nos seus próprios atendimentos profissionais. A revenda, distribuição ou compartilhamento dos arquivos não é permitida."
  },
  {
    id: "faq-4",
    question: "Preciso ter experiência no atendimento infantil para utilizar?",
    answer: "Os materiais possuem uma estrutura simples, lúdica e intuitiva, mas devem ser utilizados por profissionais ou estudantes da área, respeitando seus limites de atuação, formação e supervisão."
  },
  {
    id: "faq-5",
    question: "Os recursos servem para qualquer abordagem terapêutica?",
    answer: "Sim, os materiais podem complementar diferentes formas de condução clínica e abordagens (como TCC, Psicanálise, etc.). Cada profissional deve selecionar e adaptar os recursos de acordo com sua abordagem, avaliação, objetivos terapêuticos e necessidades de cada criança."
  },
  {
    id: "faq-6",
    question: "Funciona com crianças que respondem apenas “não sei”?",
    answer: "Sim. Os recursos lúdicos, cartas e dinâmicas visuais foram desenvolvidos exatamente para contornar essa resposta automática, estimulando a projeção e a expressão de sentimentos de forma descontraída."
  },
  {
    id: "faq-7",
    question: "Funciona com crianças silenciosas, resistentes ou com baixo engajamento?",
    answer: "Sim. O kit conta com materiais interativos, jogos e guias de quebra-gelo desenhados especificamente para diminuir a resistência inicial, estabelecer vínculo seguro (rapport) e facilitar a comunicação de forma espontânea."
  },
  {
    id: "faq-8",
    question: "Serve para atendimento online?",
    answer: "Sim. Os recursos podem ser compartilhados na tela, enviados para os responsáveis imprimirem em casa ou utilizados interativamente de forma digital."
  },
  {
    id: "faq-9",
    question: "Posso enviar atividades para a criança ou para os responsáveis?",
    answer: "Sim, você pode enviar atividades específicas para que os responsáveis realizem com a criança em casa, como parte do processo terapêutico. O compartilhamento do acervo completo, revenda ou distribuição comercial não é permitido."
  },
  {
    id: "faq-10",
    question: "Os materiais são indicados para quais faixas etárias?",
    answer: "O kit foi desenvolvido focado principalmente na infância, atendendo crianças de aproximadamente 4 a 12 anos de idade, podendo ser adaptado de acordo com o nível de desenvolvimento de cada criança."
  },
  {
    id: "faq-11",
    question: "Como funciona a garantia?",
    answer: "Você terá 15 dias após a compra para conhecer o material. Caso decida que o kit não atende às suas necessidades, poderá solicitar o reembolso integral dentro do prazo de garantia."
  },
  {
    id: "faq-12",
    question: "O pagamento é seguro?",
    answer: "Sim. O pagamento é processado por uma plataforma de pagamentos criptografada e totalmente segura, protegendo todos os seus dados."
  }
];
