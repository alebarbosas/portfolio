const images = {
  logoBlue: "assets/images/logoBlue.png",
  logoWine: "assets/images/logoWine.png",
  bBlue: "assets/images/bBlue.png",
  bWine: "assets/images/bWine.png",
  bWhite: "assets/images/bWhite.png",
  sBlue: "assets/images/sBlue.png",
  sWine: "assets/images/sWine.png",
  sWhite: "assets/images/sWhite.png",
  iandara1: "assets/images/iandara1.jpg",
  iandara2: "assets/images/iandara2.png",
  recontar1: "assets/images/recontar1.jpg",
  recontar2: "assets/images/recontar2.jpg",
  cordeal: "assets/images/cordeal.png",
  minas: "assets/images/minas.png",
  d_olho: "assets/images/d_olho.jpg",
  d_cachorro: "assets/images/d_cachorro.jpg",
  d_retrato1: "assets/images/d_retrato1.jpg",
  d_retrato2: "assets/images/d_retrato2.jpg",
  imats_rascunho: "assets/images/imats_rascunho.jpg",
  imats_pinguim: "assets/images/imats_pinguim.png",
  imats_logos: "assets/images/imats_logos.png",
  verso: "assets/images/verso.png",
  letrativa: "assets/images/letrativa.png",
  recriar: "assets/images/recriar.png",
  l_sketch: "assets/images/l_sketch.jpg",
  l_rascunhos: "assets/images/l_rascunhos.jpg",
  l_varias2: "assets/images/l_varias2.jpg",
  l_varias1: "assets/images/l_varias1.jpg",
  l_verdes: "assets/images/l_verdes.jpg",
  d_igreja: "assets/images/d_igreja.jpg",
  d_taipa: "assets/images/d_taipa.jpg",
  d_chronos: "assets/images/d_chronos.jpg",
  d_agente: "assets/images/d_agente.jpg",
  chronos: "assets/images/chronos.jpg",
};

const projects = [
  {
    id: "minhalogo",
    name: "Minha logo",
    color: "#95BBEA",
    textColor: "#820000",
    images: ["logoWine"],
    gallery: ["l_sketch", "l_rascunhos", "l_varias2", "l_varias1", "l_verdes"],
    category: "Identidade visual",
    description:
      "A criação da logo deste portfólio: do rascunho no papel à construção dos símbolos e aos testes de cores e versões.",
    problem: "",
    solution: [],
    skills: ["Identidade visual", "Logotipo", "Ilustração"],
    links: [],
  },
  {
    id: "iandara",
    name: "Iandara",
    color: "#F8F8F8",
    textColor: "#820000",
    images: ["iandara1", "iandara2"],
    category: "Segurança feminina",
    description: "Sistema voltado para a segurança da mulher.",
    problem:
      "Mulheres enfrentam situações de risco e precisam de acesso rápido a rede de apoio, informação e registros.",
    solution: [
      "Mapa colaborativo com locais sinalizados por outras mulheres, indicando situações de risco ou segurança",
      "Cadastro de uma pessoa de confiança para acionamento dentro do sistema",
      "Botão de emergência com acesso aos números 190 e 180",
      "Armazenamento de documentos e provas que possam auxiliar em situações de violência",
      "Chatbot para esclarecer dúvidas sobre segurança e recursos disponíveis",
    ],
    skills: ["UX/UI", "Desenvolvimento web", "Impacto social"],
    links: [
      {
        label: "Abrir o site",
        url: "https://iandara.vercel.app/home",
        embed: true,
      },
      {
        label: "Protótipo no Figma",
        url: "https://www.figma.com/proto/EZal2m2CeFjStmOP5HFM0Y/IANDARA?node-id=1-5&t=3Azdsb2jMi4ddW3Y-6&starting-point-node-id=1%3A2",
        embed: true,
      },
    ],
  },
  {
    id: "minas",
    name: "Somos Minas PE",
    color: "#95BBEA",
    textColor: "#820000",
    images: ["minas"],
    category: "Comunidade",
    description:
      "Landing page e site de uma comunidade voltada para mulheres em Pernambuco.",
    problem: "",
    solution: [
      "Um espaço digital de comunidade, conexão, representatividade e fortalecimento feminino",
    ],
    skills: ["UX/UI", "Prototipação", "Identidade visual"],
    links: [
      {
        label: "Protótipo no Figma",
        url: "https://www.figma.com/proto/auzn4cskKK73zPvUenJkMh/Site?node-id=19-329",
        embed: true,
      },
    ],
  },
  {
    id: "verso",
    name: "Verso Livre",
    color: "#F8F8F8",
    textColor: "#820000",
    images: ["verso"],
    compactImage: true,
    category: "Educação e inclusão",
    description:
      "Transforme eletivas escolares em espaços de autoria, diversidade e pertencimento. O Verso Livre é uma evolução do Letrativa.",
    problem: "",
    solution: [
      "Apoia escolas e professores na criação de eletivas de escrita criativa com foco no protagonismo LGBTQIAPN+",
      "Acompanhamento dos estudantes",
      "Publicação acessível das histórias",
    ],
    skills: ["UX/UI", "Prototipação", "Tecnologia aplicada à educação"],
    links: [
      {
        label: "Abrir no Figma",
        url: "https://www.figma.com/make/viLZlTtom4i68yOx3y7t4t/User-dashboard?t=x2Rfjr9BJZVTKYL4-1",
      },
    ],
  },
  {
    id: "letrativa",
    name: "Letrativa",
    color: "#F8F8F8",
    textColor: "#820000",
    images: ["letrativa"],
    compactImage: true,
    category: "Educação",
    description:
      "Projeto que antecedeu o Verso Livre: o Verso Livre é uma evolução do Letrativa.",
    problem: "",
    solution: [],
    skills: ["UX/UI", "Prototipação"],
    links: [
      {
        label: "Protótipo no Figma",
        url: "https://www.figma.com/proto/R9qX1hw2oodNHkIXRVKcpd/Hackathon?node-id=45-1041&t=pUJhDP8sAsWW5MNF-6",
        embed: true,
      },
    ],
  },
  {
    id: "recriar",
    name: "Recriar",
    color: "#F8F8F8",
    textColor: "#820000",
    images: ["recriar"],
    compactImage: true,
    category: "Economia criativa",
    description:
      "Protótipo de uma plataforma para artistas locais divulgarem e comercializarem suas artes de maneira mais fácil.",
    problem: "",
    solution: [
      "Valorização da produção artística local",
      "Conexão entre artistas e compradores",
    ],
    skills: ["UX/UI", "Prototipação", "Economia criativa"],
    links: [
      {
        label: "Protótipo no Figma",
        url: "https://www.figma.com/proto/YM5LRaR2cMmOIgY0NsO4KK/Sem-t%C3%ADtulo?node-id=19-644&starting-point-node-id=19%3A644",
        embed: true,
      },
    ],
  },
  {
    id: "urbana",
    name: "Gestão Urbana",
    color: "#F8F8F8",
    textColor: "#820000",
    images: [],
    category: "Cidadania digital",
    description:
      "Sistema que permite abrir chamados para reportar problemas nas ruas, bairros e cidades.",
    problem: "",
    solution: [
      "Facilitar a comunicação entre cidadãos e responsáveis pela gestão urbana",
      "Registrar problemas e acompanhar solicitações",
    ],
    skills: [
      "Desenvolvimento de sistemas",
      "Gestão de demandas",
      "Participação da população",
    ],
    links: [
      {
        label: "Acessar o sistema",
        url: "https://projeto-web-one-theta.vercel.app/login",
        embed: true,
      },
    ],
  },
  {
    id: "cordeal",
    name: "Cordeal",
    color: "#F8F8F8",
    textColor: "#820000",
    images: ["cordeal"],
    category: "Projeto acadêmico",
    description:
      "Plataforma gamificada para medir o nível dos alunos em Matemática para Computação.",
    problem: "",
    solution: [],
    skills: ["Gamificação", "Desenvolvimento de sistemas"],
    links: [
      {
        label: "Abrir o Cordeal",
        url: "https://projeto-cordeal.vercel.app/",
        embed: true,
      },
    ],
  },
  {
    id: "chronos",
    name: "Chronos",
    color: "#F8F8F8",
    textColor: "#820000",
    images: ["chronos"],
    gallery: ["chronos", "d_chronos"],
    category: "Astrotur · CCO",
    description:
      "Projeto desenvolvido para o sistema CCO da Astrotur Viagens e Turismo. O CCO é o Centro de Controle Operacional, responsável pela entrada e saída de veículos, pelo monitoramento de ocorrências, veículos, motoristas e outros.",
    problem: "",
    solution: [],
    skills: ["Identidade visual", "Logotipo", "Sistemas corporativos"],
    links: [],
  },
  {
    id: "imats",
    name: "IMATS",
    color: "#F8F8F8",
    textColor: "#820000",
    images: ["imats_pinguim"],
    gallery: ["imats_rascunho", "imats_logos"],
    category: "Identidade visual",
    description:
      "Projeto de identidade visual para uma empresa de tecnologia, do rascunho no papel à logo final, com símbolo de pinguim e versões em diferentes cores.",
    problem: "",
    solution: [],
    skills: ["Identidade visual", "Logotipo", "Ilustração"],
    links: [],
  },
  {
    id: "recontar",
    name: "Recontar",
    color: "#F8F8F8",
    textColor: "#820000",
    images: ["recontar2", "recontar1"],
    category: "Lendas de Recife",
    description:
      "“Recife se liga, suas lendas ganham vida!” Experiência com personagens das lendas recifenses, como Saci Pererê, Perna Cabeluda e Iara, com identidade visual própria.",
    problem: "",
    solution: [],
    skills: ["Identidade visual", "Ilustração", "Cultura pernambucana"],
    links: [],
  },
];

const drawings = [
  {
    title: "Olho",
    image: "d_olho",
    alt: "Desenho de um olho azul com uma lágrima, em tons de pele e marrom",
  },
  {
    title: "Cachorro",
    image: "d_cachorro",
    alt: "Retrato a lápis de um cachorro de língua para fora usando um peitoral",
  },
  {
    title: "Retrato I",
    image: "d_retrato1",
    alt: "Desenho em preto e branco de um homem de tranças com traços geométricos",
  },
  {
    title: "Retrato II",
    image: "d_retrato2",
    alt: "Retrato a lápis de uma mulher de cabelo curto e brincos redondos",
  },
  {
    title: "Igreja",
    image: "d_igreja",
    alt: "Desenho em tinta de uma igreja com torre alta e capelas ao lado",
  },
  {
    title: "Casa de taipa",
    image: "d_taipa",
    alt: "Desenho em tinta de uma casa de taipa com telhado de telhas, ar-condicionado e placas",
  },
  {
    title: "Rascunhos Chronos",
    image: "d_chronos",
    alt: "Rascunhos a lápis de logos com o nome Chronos",
  },
  {
    title: "O Agente Secreto",
    image: "d_agente",
    alt: "Desenho em tinta de uma esquina com uma locadora e um letreiro O Agente Secreto",
  },
  { title: "Próximo desenho", image: "" },
];

const skills = [
  {
    name: "Design",
    color: "b",
    items: [
      "UX/UI Design",
      "Design gráfico",
      "Prototipação",
      "Identidade visual",
      "Pesquisa e experiência do usuário",
    ],
  },
  {
    name: "Tecnologia",
    color: "v",
    items: [
      "Desenvolvimento web",
      "Análise e desenvolvimento de sistemas",
      "Integração de soluções",
      "Lógica de programação",
    ],
  },
  {
    name: "Gestão e estratégia",
    color: "o",
    items: [
      "Gestão de projetos",
      "Organização de equipes",
      "Análise de processos",
      "Resolução de problemas",
      "Pensamento estratégico",
    ],
  },
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function imagePath(name) {
  const path = images[name];
  if (!path) {
    throw new Error(`Imagem não encontrada: ${name}`);
  }

  return path;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

function renderSkills() {
  $("#sk").innerHTML = skills
    .map(
      (skill) => `
        <div class="blk ${skill.color} rev">
          <h3>${escapeHTML(skill.name)}</h3>
          <div class="chips">
            ${skill.items
              .map((item) => `<span class="chip">${escapeHTML(item)}</span>`)
              .join("")}
          </div>
        </div>
      `,
    )
    .join("");
}

const modal = {
  element: $("#md"),
  lastFocusedElement: null,

  open(content, trigger) {
    this.lastFocusedElement = trigger || document.activeElement;
    this.element.innerHTML = `${content}<button class="x xx" aria-label="Fechar">✕</button>`;
    this.element.classList.add("open");
    document.body.style.overflow = "hidden";
    $(".x", this.element)?.focus({ preventScroll: true });
    $(".panel", this.element)?.scrollTo(0, 0);
  },

  close() {
    this.element.classList.remove("open");
    this.element.innerHTML = "";
    document.body.style.overflow = "";
    this.lastFocusedElement?.focus();
  },
};

function setupModal() {
  modal.element.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    if (event.target === modal.element || event.target.closest(".x")) {
      modal.close();
      return;
    }

    const embedButton = event.target.closest("[data-embed]");
    if (!embedButton) {
      return;
    }

    const frame = $(".fbox", modal.element);
    $$("[data-embed]", modal.element).forEach((button) => {
      button.classList.toggle("fill", button === embedButton);
    });

    frame.innerHTML = `
      <iframe
        src="${escapeHTML(embedButton.dataset.embed)}"
        title="${escapeHTML(embedButton.textContent.trim())}"
        allow="fullscreen"
        referrerpolicy="no-referrer"
      ></iframe>
      <p class="ph" style="padding:12px 16px;font-size:.92rem">
        Se aparecer “conteúdo bloqueado”, este endereço não permite abrir dentro desta página:
        <a href="${escapeHTML(embedButton.dataset.url)}" target="_blank" rel="noopener noreferrer">
          <b>abrir em outra aba ↗</b>
        </a>
      </p>
    `;
    frame.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  window.addEventListener("keydown", (event) => {
    if (!modal.element.classList.contains("open")) {
      return;
    }

    if (event.key === "Escape") {
      modal.close();
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const focusableElements = $$('button, a[href]', modal.element);
    const first = focusableElements[0];
    const last = focusableElements.at(-1);
    if (!first || !last) {
      return;
    }

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

function getEmbedURL(url) {
  if (/figma\.com\/(proto|design|file)/.test(url)) {
    return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`;
  }

  return url;
}

function renderProjectCard(project) {
  const image = project.images[0]
    ? `<img class="pic${project.compactImage ? " sm" : ""}" src="${imagePath(project.images[0])}" alt="Imagem do projeto ${escapeHTML(project.name)}">`
    : `<span class="nm">${escapeHTML(project.name)}</span>`;

  return `
    <button class="card" aria-label="Abrir projeto ${escapeHTML(project.name)}">
      <span class="shape" style="background:${project.color};color:${project.textColor}">
        ${image}
      </span>
      <span class="lb">
        <span>${escapeHTML(project.name)}</span>
        <img src="${imagePath("sWhite")}" alt="">
      </span>
    </button>
  `;
}

function renderDrawingCard(drawing) {
  const image = drawing.image
    ? `<img class="full" src="${imagePath(drawing.image)}" alt="${escapeHTML(drawing.alt || drawing.title)}">`
    : `
      <span style="display:grid;gap:10px;justify-items:center;text-align:center;padding:16px">
        <img src="${imagePath("bWine")}" alt="" style="width:70px;opacity:.7">
        <b>Espaço para um desenho</b>
      </span>
    `;

  return `
    <button class="card" aria-label="${escapeHTML(drawing.title)}">
      <span class="shape ${drawing.image ? "" : "empty"}">${image}</span>
      <span class="lb"><span>${escapeHTML(drawing.title)}</span></span>
    </button>
  `;
}

function renderProjectDetails(project) {
  const gallery = project.gallery || project.images;
  const links = project.links || [];
  const embeddableLinks = links.filter((link) => link.embed);
  const galleryMarkup = gallery.length
    ? gallery
        .map(
          (name) =>
            `<img src="${imagePath(name)}" alt="Imagem do projeto ${escapeHTML(project.name)}">`,
        )
        .join("")
    : `<b style="font:800 3rem/.9 var(--f);font-variation-settings:'wdth' 82;text-align:center">${escapeHTML(project.name)}</b>`;

  const solutionMarkup = project.solution.length
    ? `
      <h4>Proposta da solução</h4>
      <ul>${project.solution.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
    `
    : "";

  const linksMarkup = links
    .map(
      (link, index) => `
        <a class="pill ${index === 0 ? "fill" : ""}" href="${escapeHTML(link.url)}" target="_blank" rel="noopener noreferrer">
          ${escapeHTML(link.label)} ↗
        </a>
      `,
    )
    .join("");

  const embedMarkup = embeddableLinks.length
    ? `
      <div class="frame">
        <h4>Navegue aqui dentro</h4>
        <div class="acts" style="margin:8px 0 14px">
          ${embeddableLinks
            .map(
              (link) => `
                <button class="pill" data-url="${escapeHTML(link.url)}" data-embed="${escapeHTML(getEmbedURL(link.url))}">
                  Ver aqui: ${escapeHTML(link.label)}
                </button>
              `,
            )
            .join("")}
        </div>
        <div class="fbox">
          <p class="ph">
            Escolha uma opção acima para abrir aqui dentro e role o quadro para navegar.
            Se ficar em branco, use os botões de link para abrir em outra aba.
          </p>
        </div>
      </div>
    `
    : "";

  return `
    <div class="panel${gallery.length > 1 ? " gal" : ""}">
      <div class="side" style="background:${project.color};color:${project.textColor}">
        ${galleryMarkup}
        <span class="chip">${escapeHTML(project.category)}</span>
      </div>
      <div class="main">
        <h3>${escapeHTML(project.name)}</h3>
        <p>${escapeHTML(project.description)}</p>
        ${project.problem ? `<h4>Problema</h4><p>${escapeHTML(project.problem)}</p>` : ""}
        ${solutionMarkup}
        <h4>Competências em jogo</h4>
        <div class="chips" style="margin-top:6px">
          ${project.skills.map((skill) => `<span class="chip">${escapeHTML(skill)}</span>`).join("")}
        </div>
        <div class="acts">
          ${linksMarkup}
          <button class="pill x" style="color:var(--v)">Fechar e voltar</button>
        </div>
      </div>
      ${embedMarkup}
    </div>
  `;
}

function renderDrawingDetails(drawing) {
  if (!drawing.image) {
    return `
      <div class="panel solo">
        <div class="main">
          <h3>${escapeHTML(drawing.title)}</h3>
          <p>Este espaço está reservado para um novo desenho. Adicione a imagem na lista <code>drawings</code>.</p>
          <div class="acts" style="justify-content:center">
            <button class="pill x" style="color:var(--v)">Fechar</button>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="panel solo">
      <div class="main">
        <img src="${imagePath(drawing.image)}" alt="${escapeHTML(drawing.alt || drawing.title)}">
        <div class="acts" style="justify-content:center">
          <button class="pill x" style="color:var(--v)">Fechar</button>
        </div>
      </div>
    </div>
  `;
}

function createCarousel(host, items, renderCard, openItem) {
  const track = $(".track", host);
  const dots = $(".dots", host);
  track.innerHTML = items.map(renderCard).join("");
  dots.innerHTML = items.map(() => "<span></span>").join("");

  const cards = $$(".card", track);
  let activeIndex = 0;
  let pointerIsDown = false;
  let pointerStartX = 0;
  let scrollStart = 0;
  let dragDistance = 0;

  const syncActiveCard = () => {
    const center = track.scrollLeft + track.clientWidth / 2;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - center);
      if (distance < closestDistance) {
        closestDistance = distance;
        activeIndex = index;
      }
    });

    cards.forEach((card, index) => {
      card.classList.toggle("sel", index === activeIndex);
    });
    $$("span", dots).forEach((dot, index) => {
      dot.classList.toggle("on", index === activeIndex);
    });
  };

  const goToOffset = (offset) => {
    const index = Math.max(0, Math.min(cards.length - 1, activeIndex + offset));
    const card = cards[index];
    track.scrollTo({
      left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2,
      behavior: "smooth",
    });
  };

  track.addEventListener("scroll", () => requestAnimationFrame(syncActiveCard), {
    passive: true,
  });
  track.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      goToOffset(1);
    } else if (event.key === "ArrowLeft") {
      goToOffset(-1);
    }
  });
  track.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "touch") {
      return;
    }

    pointerIsDown = true;
    dragDistance = 0;
    pointerStartX = event.clientX;
    scrollStart = track.scrollLeft;
  });
  window.addEventListener("pointermove", (event) => {
    if (!pointerIsDown) {
      return;
    }

    const distance = event.clientX - pointerStartX;
    dragDistance = Math.max(dragDistance, Math.abs(distance));
    if (dragDistance > 6) {
      track.classList.add("drag");
      track.scrollLeft = scrollStart - distance;
    }
  });
  window.addEventListener("pointerup", () => {
    if (!pointerIsDown) {
      return;
    }

    pointerIsDown = false;
    track.classList.remove("drag");
    window.setTimeout(syncActiveCard, 50);
  });
  $(".l", host).addEventListener("click", () => goToOffset(-1));
  $(".r", host).addEventListener("click", () => goToOffset(1));

  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      if (dragDistance > 6) {
        dragDistance = 0;
        return;
      }

      openItem(items[index], card);
    });
  });

  syncActiveCard();
}

function setupScrollReveals() {
  document.documentElement.classList.add("js");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  $$(".rev").forEach((element) => observer.observe(element));
}

function setupDecorativeStrips() {
  const fitStrips = () => {
    $$(".strip").forEach((strip) => {
      strip.style.setProperty("--tw", `${strip.clientHeight * 15.652173913043478}px`);
    });
  };

  fitStrips();
  window.addEventListener("resize", fitStrips);
}

function initializePortfolio() {
  $("#yr").textContent = new Date().getFullYear();
  renderSkills();
  setupModal();
  setupDecorativeStrips();

  createCarousel($("#pj"), projects, renderProjectCard, (project, trigger) => {
    modal.open(renderProjectDetails(project), trigger);
  });

  createCarousel($("#ar"), drawings, renderDrawingCard, (drawing, trigger) => {
    modal.open(renderDrawingDetails(drawing), trigger);
  });

  setupScrollReveals();
}

initializePortfolio();
