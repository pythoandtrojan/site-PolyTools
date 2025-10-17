// Dados das ferramentas organizadas por categoria
const toolsData = [
    // OSINT
    {
        name: "Sherlock",
        description: "Busca por usuários em redes sociais",
        category: "osint",
        icon: "fas fa-user-secret"
    },
    {
        name: "Holehe",
        description: "Verifica se email está registrado em serviços",
        category: "osint",
        icon: "fas fa-envelope"
    },
    {
        name: "Name-sweep",
        description: "Busca abrangente por nomes na internet",
        category: "osint",
        icon: "fas fa-search"
    },
    {
        name: "BuscaDeSites",
        description: "Localiza sites relacionados a um alvo",
        category: "osint",
        icon: "fas fa-globe"
    },
    {
        name: "FOTO",
        description: "Análise e busca por imagens",
        category: "osint",
        icon: "fas fa-camera"
    },
    {
        name: "IMEI-busca",
        description: "Rastreamento de dispositivos por IMEI",
        category: "osint",
        icon: "fas fa-mobile-alt"
    },
    {
        name: "Leaked-Databases",
        description: "Busca em bancos de dados vazados",
        category: "osint",
        icon: "fas fa-database"
    },
    {
        name: "academico",
        description: "Busca em ambientes acadêmicos",
        category: "osint",
        icon: "fas fa-graduation-cap"
    },
    {
        name: "address_resolver",
        description: "Resolução e geolocalização de endereços",
        category: "osint",
        icon: "fas fa-map-marker-alt"
    },
    {
        name: "api-naval",
        description: "API para dados navais e marítimos",
        category: "osint",
        icon: "fas fa-ship"
    },
    {
        name: "apis-web",
        description: "Coleção de APIs para OSINT",
        category: "osint",
        icon: "fas fa-code"
    },
    {
        name: "bin",
        description: "Análise de números BIN de cartões",
        category: "osint",
        icon: "fas fa-credit-card"
    },
    {
        name: "busca-usuario",
        description: "Busca avançada por usuários",
        category: "osint",
        icon: "fas fa-users"
    },
    {
        name: "buscar-navios",
        description: "Rastreamento de embarcações",
        category: "osint",
        icon: "fas fa-anchor"
    },
    {
        name: "cameras",
        description: "Localização de câmeras públicas",
        category: "osint",
        icon: "fas fa-video"
    },
    {
        name: "cep",
        description: "Busca por CEP e endereços",
        category: "osint",
        icon: "fas fa-map"
    },
    {
        name: "cnpj",
        description: "Consulta de dados de CNPJ",
        category: "osint",
        icon: "fas fa-building"
    },
    {
        name: "cpf",
        description: "Validação e consulta de CPF",
        category: "osint",
        icon: "fas fa-id-card"
    },
    {
        name: "ddd-ddi",
        description: "Identificação de códigos de área",
        category: "osint",
        icon: "fas fa-phone"
    },
    {
        name: "financeiro",
        description: "Análise de dados financeiros",
        category: "osint",
        icon: "fas fa-chart-line"
    },
    {
        name: "gerador",
        description: "Gerador de dados para testes",
        category: "osint",
        icon: "fas fa-cogs"
    },
    {
        name: "gerar-pessoa",
        description: "Geração de identidades fictícias",
        category: "osint",
        icon: "fas fa-user-plus"
    },
    {
        name: "github",
        description: "OSINT para perfis do GitHub",
        category: "osint",
        icon: "fab fa-github"
    },
    {
        name: "gmail-social",
        description: "Análise de contas Gmail",
        category: "osint",
        icon: "fas fa-at"
    },
    {
        name: "governo-eua",
        description: "Acesso a dados governamentais",
        category: "osint",
        icon: "fas fa-landmark"
    },
    {
        name: "insta-dados",
        description: "Extração de dados do Instagram",
        category: "osint",
        icon: "fab fa-instagram"
    },
    {
        name: "investigaçãoDeG-mail",
        description: "Investigação avançada de Gmail",
        category: "osint",
        icon: "fas fa-envelope-open"
    },
    {
        name: "ip",
        description: "Geolocalização e análise de IP",
        category: "osint",
        icon: "fas fa-network-wired"
    },
    {
        name: "mac",
        description: "Identificação de dispositivos por MAC",
        category: "osint",
        icon: "fas fa-wifi"
    },
    {
        name: "mapa-osint",
        description: "Visualização de dados OSINT em mapa",
        category: "osint",
        icon: "fas fa-map"
    },
    {
        name: "metadados",
        description: "Extração de metadados de arquivos",
        category: "osint",
        icon: "fas fa-file-code"
    },
    {
        name: "news_monitor",
        description: "Monitoramento de notícias",
        category: "osint",
        icon: "fas fa-newspaper"
    },
    {
        name: "nome-social",
        description: "Busca por nomes em redes sociais",
        category: "osint",
        icon: "fas fa-user-tag"
    },
    {
        name: "nome",
        description: "Análise completa de nomes",
        category: "osint",
        icon: "fas fa-signature"
    },
    {
        name: "numero-usuario",
        description: "Rastreamento por número telefônico",
        category: "osint",
        icon: "fas fa-phone-alt"
    },
    {
        name: "osint-web",
        description: "Ferramentas OSINT web-based",
        category: "osint",
        icon: "fas fa-cloud"
    },
    {
        name: "parentes",
        description: "Mapeamento de relações familiares",
        category: "osint",
        icon: "fas fa-users"
    },
    {
        name: "pix",
        description: "Análise de transações PIX",
        category: "osint",
        icon: "fas fa-money-bill-wave"
    },
    {
        name: "placa",
        description: "Consulta de placas de veículos",
        category: "osint",
        icon: "fas fa-car"
    },
    {
        name: "rastreador-bitcoin",
        description: "Rastreamento de transações Bitcoin",
        category: "osint",
        icon: "fab fa-bitcoin"
    },
    {
        name: "reddit",
        description: "OSINT para Reddit",
        category: "osint",
        icon: "fab fa-reddit"
    },
    {
        name: "rg",
        description: "Validação e análise de RG",
        category: "osint",
        icon: "fas fa-id-card"
    },
    {
        name: "sherlock-api",
        description: "API para ferramenta Sherlock",
        category: "osint",
        icon: "fas fa-server"
    },
    {
        name: "subdomain",
        description: "Descoberta de subdomínios",
        category: "osint",
        icon: "fas fa-sitemap"
    },
    {
        name: "telefone",
        description: "Análise de números telefônicos",
        category: "osint",
        icon: "fas fa-phone"
    },
    {
        name: "validador",
        description: "Validação de diversos dados",
        category: "osint",
        icon: "fas fa-check-circle"
    },
    {
        name: "virus-total-api",
        description: "Integração com VirusTotal",
        category: "osint",
        icon: "fas fa-shield-virus"
    },
    {
        name: "whois",
        description: "Consulta WHOIS de domínios",
        category: "osint",
        icon: "fas fa-info-circle"
    },

    // Brute Force
    {
        name: "Dictionary Attack",
        description: "Ataque de dicionário personalizado",
        category: "brute",
        icon: "fas fa-book"
    },
    {
        name: "Hash Cracker",
        description: "Quebra de hashes com múltiplos métodos",
        category: "brute",
        icon: "fas fa-unlock"
    },
    {
        name: "Hydra",
        description: "Ferramenta avançada de brute force",
        category: "brute",
        icon: "fas fa-shield-alt"
    },
    {
        name: "John The Ripper",
        description: "Clássico quebrador de senhas",
        category: "brute",
        icon: "fas fa-user-lock"
    },
    {
        name: "PIN Attack",
        description: "Ataque específico para PINs",
        category: "brute",
        icon: "fas fa-key"
    },
    {
        name: "Pure Brute",
        description: "Ataque de força bruta pura",
        category: "brute",
        icon: "fas fa-bolt"
    },

    // DDoS
    {
        name: "DDoS Tool",
        description: "Ferramenta completa para ataques DDoS",
        category: "ddos",
        icon: "fas fa-cloud-download-alt"
    },

    // DoS
    {
        name: "DoS Attack",
        description: "Ataque de negação de serviço",
        category: "dos",
        icon: "fas fa-ban"
    },
    {
        name: "DoS Tool",
        description: "Ferramenta geral para ataques DoS",
        category: "dos",
        icon: "fas fa-exclamation-triangle"
    },

    // Doxing
    {
        name: "Dox Discord",
        description: "Coleta de informações do Discord",
        category: "dox",
        icon: "fab fa-discord"
    },
    {
        name: "Dox Tool",
        description: "Ferramenta geral de doxing",
        category: "dox",
        icon: "fas fa-address-card"
    },

    // Extras
    {
        name: "Calculadora",
        description: "Calculadora para operações diversas",
        category: "extras",
        icon: "fas fa-calculator"
    },
    {
        name: "Conversor Moedas",
        description: "Conversor de moedas em tempo real",
        category: "extras",
        icon: "fas fa-money-bill"
    },
    {
        name: "Gerador Senhas",
        description: "Gerador de senhas seguras",
        category: "extras",
        icon: "fas fa-key"
    },
    {
        name: "Organizador",
        description: "Organização de arquivos e dados",
        category: "extras",
        icon: "fas fa-folder"
    },
    {
        name: "Terminal",
        description: "Terminal personalizado",
        category: "extras",
        icon: "fas fa-terminal"
    },

    // Ferramentas
    {
        name: "BrazilWings",
        description: "Ferramenta específica para o Brasil",
        category: "ferramentas",
        icon: "fas fa-globe-americas"
    },
    {
        name: "Deadpool2000",
        description: "Coleção de utilitários diversos",
        category: "ferramentas",
        icon: "fas fa-tools"
    },
    {
        name: "Mr.Holmes",
        description: "Ferramenta de investigação",
        category: "ferramentas",
        icon: "fas fa-search"
    },

    // Git Exposto
    {
        name: "Baixar Git",
        description: "Download de repositórios Git",
        category: "git-exposto",
        icon: "fab fa-git-alt"
    },
    {
        name: "Git Scanner",
        description: "Scanner para repositórios expostos",
        category: "git-exposto",
        icon: "fas fa-code-branch"
    },

    // Linux
    {
        name: "Distro Info",
        description: "Informações sobre distribuições Linux",
        category: "linux",
        icon: "fab fa-linux"
    },

    // Malware
    {
        name: "Beelogger",
        description: "Criação de keyloggers",
        category: "malware",
        icon: "fas fa-keyboard"
    },
    {
        name: "Binary Padding",
        description: "Técnicas de ofuscação de binários",
        category: "malware",
        icon: "fas fa-file-binary"
    },
    {
        name: "CVE Explorer",
        description: "Busca por vulnerabilidades CVE",
        category: "malware",
        icon: "fas fa-bug"
    },
    {
        name: "TheFatRat",
        description: "Criação de payloads",
        category: "malware",
        icon: "fas fa-rat"
    },
    {
        name: "App Inject",
        description: "Injeção de código em aplicativos",
        category: "malware",
        icon: "fas fa-syringe"
    },
    {
        name: "C2 Interactive",
        description: "Command and Control interativo",
        category: "malware",
        icon: "fas fa-server"
    },
    {
        name: "C2 Server",
        description: "Servidor Command and Control",
        category: "malware",
        icon: "fas fa-network-wired"
    },
    {
        name: "Dropper",
        description: "Criação de droppers",
        category: "malware",
        icon: "fas fa-download"
    },
    {
        name: "Listener",
        description: "Ouvinte para conexões reversas",
        category: "malware",
        icon: "fas fa-headphones"
    },
    {
        name: "Web Shell",
        description: "Criação de web shells",
        category: "malware",
        icon: "fas fa-spider"
    },
    {
        name: "Webhook Malware",
        description: "Malware usando webhooks",
        category: "malware",
        icon: "fas fa-link"
    },

    // Phishing
    {
        name: "Clickjacking",
        description: "Técnicas de clickjacking",
        category: "phishing",
        icon: "fas fa-mouse-pointer"
    },
    {
        name: "Phishing APK",
        description: "Criação de APKs maliciosos",
        category: "phishing",
        icon: "fab fa-android"
    },
    {
        name: "Phishing Discord",
        description: "Ataques de phishing no Discord",
        category: "phishing",
        icon: "fab fa-discord"
    },
    {
        name: "Phishing Social",
        description: "Phishing para redes sociais",
        category: "phishing",
        icon: "fas fa-share-alt"
    },

    // Scanner
    {
        name: "Nmap Scripts",
        description: "Coleção de scripts para Nmap",
        category: "scanner",
        icon: "fas fa-search"
    },
    {
        name: "Nmap",
        description: "Scanner de rede avançado",
        category: "scanner",
        icon: "fas fa-network-wired"
    },
    {
        name: "Scan Geral",
        description: "Scanner de vulnerabilidades geral",
        category: "scanner",
        icon: "fas fa-shield-alt"
    },
    {
        name: "Scanner TV",
        description: "Scanner para Smart TVs",
        category: "scanner",
        icon: "fas fa-tv"
    },

    // Sites Ataque
    {
        name: "Login Site",
        description: "Ataques a sistemas de login",
        category: "sites-ataque",
        icon: "fas fa-sign-in-alt"
    },
    {
        name: "Site Spam",
        description: "Ferramentas de spam para sites",
        category: "sites-ataque",
        icon: "fas fa-comment-alt"
    },
    {
        name: "SQL Inject Site",
        description: "Ataques SQL Injection em sites",
        category: "sites-ataque",
        icon: "fas fa-database"
    },
    {
        name: "XSS Site",
        description: "Ataques XSS em sites",
        category: "sites-ataque",
        icon: "fas fa-code"
    },

    // Spam
    {
        name: "Discord Spam",
        description: "Ferramenta de spam para Discord",
        category: "spam",
        icon: "fab fa-discord"
    },
    {
        name: "Social Spam",
        description: "Spam em redes sociais",
        category: "spam",
        icon: "fas fa-share-alt"
    },
    {
        name: "Span Gmail",
        description: "Spam para contas Gmail",
        category: "spam",
        icon: "fas fa-envelope"
    },
    {
        name: "Span SMS",
        description: "Spam via SMS",
        category: "spam",
        icon: "fas fa-sms"
    },

    // SQL Injection
    {
        name: "SQL Inject",
        description: "Ferramenta de injeção SQL",
        category: "sql",
        icon: "fas fa-database"
    },
    {
        name: "SQL Scanner",
        description: "Scanner de vulnerabilidades SQL",
        category: "sql",
        icon: "fas fa-search"
    },
    {
        name: "SQLMap",
        description: "Ferramenta automática de SQL injection",
        category: "sql",
        icon: "fas fa-bolt"
    },

    // Testes Rede
    {
        name: "Análise Web",
        description: "Análise de segurança web",
        category: "testes-rede",
        icon: "fas fa-globe"
    },
    {
        name: "My Wireshark",
        description: "Ferramenta de análise de rede",
        category: "testes-rede",
        icon: "fas fa-stream"
    },
    {
        name: "Rede Tool",
        description: "Utilitários de rede",
        category: "testes-rede",
        icon: "fas fa-wifi"
    },

    // VPN
    {
        name: "My VPN",
        description: "Cliente VPN personalizado",
        category: "vpn",
        icon: "fas fa-user-secret"
    },
    {
        name: "Tor",
        description: "Ferramentas para rede Tor",
        category: "vpn",
        icon: "fas fa-onion"
    },
    {
        name: "VPN Tool",
        description: "Utilitários de VPN",
        category: "vpn",
        icon: "fas fa-shield-alt"
    },

    // Wi-Fi
    {
        name: "Man in the Middle",
        description: "Ataques MITM",
        category: "wifi",
        icon: "fas fa-user-friends"
    },
    {
        name: "Clonar Wi-Fi",
        description: "Clonagem de redes Wi-Fi",
        category: "wifi",
        icon: "fas fa-copy"
    },
    {
        name: "Wi-Fi Senha",
        description: "Recuperação de senhas Wi-Fi",
        category: "wifi",
        icon: "fas fa-key"
    },
    {
        name: "Wi-Fi Tool",
        description: "Ferramenta geral para Wi-Fi",
        category: "wifi",
        icon: "fas fa-wifi"
    },

    // XSS
    {
        name: "XSS Malware",
        description: "Malware baseado em XSS",
        category: "xss",
        icon: "fas fa-biohazard"
    },
    {
        name: "XSS Scan",
        description: "Scanner de vulnerabilidades XSS",
        category: "xss",
        icon: "fas fa-search"
    },
    {
        name: "XSS Tool",
        description: "Ferramenta geral para XSS",
        category: "xss",
        icon: "fas fa-code"
    }
];

// Inicialização do site
document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Filtro de ferramentas
    const filterButtons = document.querySelectorAll('.filter-btn');
    const toolsGrid = document.getElementById('toolsGrid');
    
    // Carregar todas as ferramentas inicialmente
    displayTools('all');
    
    // Adicionar eventos aos botões de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover classe active de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adicionar classe active ao botão clicado
            this.classList.add('active');
            
            // Filtrar ferramentas
            const filter = this.getAttribute('data-filter');
            displayTools(filter);
        });
    });
    
    // Formulário de contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            this.reset();
        });
    }
    
    // Função para exibir ferramentas filtradas
    function displayTools(category) {
        toolsGrid.innerHTML = '';
        
        const filteredTools = category === 'all' 
            ? toolsData 
            : toolsData.filter(tool => tool.category === category);
        
        if (filteredTools.length === 0) {
            toolsGrid.innerHTML = '<p class="no-tools">Nenhuma ferramenta encontrada para esta categoria.</p>';
            return;
        }
        
        filteredTools.forEach(tool => {
            const toolCard = document.createElement('div');
            toolCard.className = 'tool-card';
            toolCard.innerHTML = `
                <div class="tool-icon">
                    <i class="${tool.icon}"></i>
                </div>
                <h3 class="tool-name">${tool.name}</h3>
                <p class="tool-description">${tool.description}</p>
                <span class="tool-category">${tool.category.toUpperCase()}</span>
            `;
            toolsGrid.appendChild(toolCard);
        });
    }
    
    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efeito de destaque no header ao scrollar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.9)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
    });
});
