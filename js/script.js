// Dados completos das ferramentas baseado no seu código Python
const toolsData = [
    // OSINT - 47 ferramentas
    {
        name: "BuscaDeSites.py",
        description: "Busca informações em sites",
        category: "osint",
        icon: "fas fa-globe"
    },
    {
        name: "metadados.py",
        description: "Extrai metadados de arquivos",
        category: "osint",
        icon: "fas fa-file-code"
    },
    {
        name: "Leaked-Databases.py",
        description: "Consulta bancos de dados vazados",
        category: "osint",
        icon: "fas fa-database"
    },
    {
        name: "busca-usuario.py",
        description: "Busca por usuários em redes sociais",
        category: "osint",
        icon: "fas fa-user-secret"
    },
    {
        name: "gmail-social.py",
        description: "Busca por Gmail em redes sociais",
        category: "osint",
        icon: "fas fa-at"
    },
    {
        name: "nome-social.py",
        description: "Busca por nome real em redes sociais",
        category: "osint",
        icon: "fas fa-user-tag"
    },
    {
        name: "cep.py",
        description: "Consulta informações por CEP",
        category: "osint",
        icon: "fas fa-map-marker-alt"
    },
    {
        name: "cnpj.py",
        description: "Consulta dados de CNPJ",
        category: "osint",
        icon: "fas fa-building"
    },
    {
        name: "cpf.py",
        description: "Consulta dados de CPF",
        category: "osint",
        icon: "fas fa-id-card"
    },
    {
        name: "insta-dados.py",
        description: "Coleta dados do Instagram",
        category: "osint",
        icon: "fab fa-instagram"
    },
    {
        name: "investigaçãoDeG-mail.py",
        description: "Investiga contas de Gmail",
        category: "osint",
        icon: "fas fa-envelope-open"
    },
    {
        name: "ip.py",
        description: "Rastreamento de IP",
        category: "osint",
        icon: "fas fa-network-wired"
    },
    {
        name: "nome.py",
        description: "Busca por nomes",
        category: "osint",
        icon: "fas fa-signature"
    },
    {
        name: "pais.py",
        description: "Consulta informações de países",
        category: "osint",
        icon: "fas fa-flag"
    },
    {
        name: "rastreador-bitcoin.py",
        description: "Rastreia transações Bitcoin",
        category: "osint",
        icon: "fab fa-bitcoin"
    },
    {
        name: "rg.py",
        description: "Consulta dados de RG",
        category: "osint",
        icon: "fas fa-id-card"
    },
    {
        name: "telefone.py",
        description: "Busca por números de telefone",
        category: "osint",
        icon: "fas fa-phone"
    },
    {
        name: "bin.py",
        description: "Consulta informações de BIN (cartões)",
        category: "osint",
        icon: "fas fa-credit-card"
    },
    {
        name: "placa.py",
        description: "Consulta informações de placas de veículos",
        category: "osint",
        icon: "fas fa-car"
    },
    {
        name: "sherlock.py",
        description: "Busca por nomes de usuário em redes sociais",
        category: "osint",
        icon: "fas fa-search"
    },
    {
        name: "pix.py",
        description: "Consulta informações de chaves PIX",
        category: "osint",
        icon: "fas fa-money-bill-wave"
    },
    {
        name: "gmail-api.py",
        description: "API que consulta dados vazados de Gmail",
        category: "osint",
        icon: "fas fa-server"
    },
    {
        name: "holehe.py",
        description: "Procura redes sociais vinculado a um Gmail",
        category: "osint",
        icon: "fas fa-envelope"
    },
    {
        name: "FOTO.py",
        description: "Procura metadados de foto",
        category: "osint",
        icon: "fas fa-camera"
    },
    {
        name: "whois.py",
        description: "Busca com WHOIS",
        category: "osint",
        icon: "fas fa-info-circle"
    },
    {
        name: "apis-web.py",
        description: "APIs em página web",
        category: "osint",
        icon: "fas fa-cloud"
    },
    {
        name: "numero-usuario.py",
        description: "Busca redes vinculada a um número",
        category: "osint",
        icon: "fas fa-phone-alt"
    },
    {
        name: "IMEI-busca.py",
        description: "Busca de IMEI",
        category: "osint",
        icon: "fas fa-mobile-alt"
    },
    {
        name: "parentes.py",
        description: "Busca de parentes de uma vítima",
        category: "osint",
        icon: "fas fa-users"
    },
    {
        name: "mac.py",
        description: "Consulta de MAC",
        category: "osint",
        icon: "fas fa-wifi"
    },
    {
        name: "verificador-link.py",
        description: "Verifica se link é seguro",
        category: "osint",
        icon: "fas fa-shield-alt"
    },
    {
        name: "camera.py",
        description: "Olhar câmeras",
        category: "osint",
        icon: "fas fa-video"
    },
    {
        name: "github.py",
        description: "Investigar usuário do GitHub",
        category: "osint",
        icon: "fab fa-github"
    },
    {
        name: "mapa-osint.py",
        description: "Mapa com vários suportes para OSINT",
        category: "osint",
        icon: "fas fa-map"
    },
    {
        name: "reddit.py",
        description: "Detalhes de usuário do Reddit",
        category: "osint",
        icon: "fab fa-reddit"
    },
    {
        name: "sherlock-api.py",
        description: "Sherlock modo API",
        category: "osint",
        icon: "fas fa-code"
    },
    {
        name: "geolocalização.py",
        description: "Olhar minha geolocalização atual",
        category: "osint",
        icon: "fas fa-location-arrow"
    },
    {
        name: "subdomain.py",
        description: "Buscar domínios em sites",
        category: "osint",
        icon: "fas fa-sitemap"
    },
    {
        name: "validador.py",
        description: "Validador de CPF, telefone, IP, email e CEP",
        category: "osint",
        icon: "fas fa-check-circle"
    },
    {
        name: "ddd-ddi.py",
        description: "Buscador de DDD/DDI",
        category: "osint",
        icon: "fas fa-phone"
    },
    {
        name: "gerador.py",
        description: "Gerador de CPF, telefone, placa, cartão e IP",
        category: "osint",
        icon: "fas fa-cogs"
    },
    {
        name: "gerar-pessoa.py",
        description: "Gera uma pessoa fake com dados",
        category: "osint",
        icon: "fas fa-user-plus"
    },
    {
        name: "name-sweep.py",
        description: "Faz combinações para achar redes sociais",
        category: "osint",
        icon: "fas fa-search-plus"
    },
    {
        name: "virus-total-api.py",
        description: "Verificar link e APKs",
        category: "osint",
        icon: "fas fa-shield-virus"
    },
    {
        name: "api-naval.py",
        description: "Olhar localização de navios, porto",
        category: "osint",
        icon: "fas fa-ship"
    },
    {
        name: "governo-eua.py",
        description: "Dados do governo dos EUA",
        category: "osint",
        icon: "fas fa-landmark"
    },
    {
        name: "address_resolver.py",
        description: "Dados de endereço",
        category: "osint",
        icon: "fas fa-home"
    },
    {
        name: "financeiro.py",
        description: "Dados financeiros de empresas",
        category: "osint",
        icon: "fas fa-chart-line"
    },
    {
        name: "academico.py",
        description: "Buscar dados acadêmicos",
        category: "osint",
        icon: "fas fa-graduation-cap"
    },
    {
        name: "news_monitor.py",
        description: "Jornal nacional",
        category: "osint",
        icon: "fas fa-newspaper"
    },

    // Malware - 32 ferramentas
    {
        name: "c2.py",
        description: "Servidor de Comando e Controle",
        category: "malware",
        icon: "fas fa-server"
    },
    {
        name: "malware.py",
        description: "Ferramentas de malware",
        category: "malware",
        icon: "fas fa-biohazard"
    },
    {
        name: "malware-assembly.py",
        description: "Malware em Assembly",
        category: "malware",
        icon: "fas fa-microchip"
    },
    {
        name: "malware-c.py",
        description: "Malware em C",
        category: "malware",
        icon: "fab fa-cuttlefish"
    },
    {
        name: "malwarePowerShell.py",
        description: "Malware em PowerShell",
        category: "malware",
        icon: "fab fa-microsoft"
    },
    {
        name: "malware.go.py",
        description: "Malware em Go",
        category: "malware",
        icon: "fas fa-code"
    },
    {
        name: "Pos-Exploracao.py",
        description: "Ferramentas de pós-exploração",
        category: "malware",
        icon: "fas fa-tools"
    },
    {
        name: "dropper.py",
        description: "Dropper para implantação de malware",
        category: "malware",
        icon: "fas fa-download"
    },
    {
        name: "netcat-c2.py",
        description: "Netcat como servidor C2",
        category: "malware",
        icon: "fas fa-network-wired"
    },
    {
        name: "malware-js.py",
        description: "Malware feito em JS",
        category: "malware",
        icon: "fab fa-js"
    },
    {
        name: "malware-ruby.py",
        description: "Malware feito em Ruby",
        category: "malware",
        icon: "fas fa-gem"
    },
    {
        name: "malware-java.py",
        description: "Malware feito em Java",
        category: "malware",
        icon: "fab fa-java"
    },
    {
        name: "malware-bash.py",
        description: "Malwares em Bash",
        category: "malware",
        icon: "fas fa-terminal"
    },
    {
        name: "malware-discord.py",
        description: "Malware pra roubo de token Discord",
        category: "malware",
        icon: "fab fa-discord"
    },
    {
        name: "malware-troll.py",
        description: "Não execute isso",
        category: "malware",
        icon: "fas fa-skull"
    },
    {
        name: "Binary-Padding.py",
        description: "Depois eu explico",
        category: "malware",
        icon: "fas fa-file-binary"
    },
    {
        name: "c2-interativo.py",
        description: "C2 com comandos",
        category: "malware",
        icon: "fas fa-keyboard"
    },
    {
        name: "compilar.py",
        description: "Compilar malwares",
        category: "malware",
        icon: "fas fa-cogs"
    },
    {
        name: "web-shell.py",
        description: "C2 com interface web",
        category: "malware",
        icon: "fas fa-spider"
    },
    {
        name: "win-lin.py",
        description: "Organizar lista de malwares Linux/Windows",
        category: "malware",
        icon: "fas fa-list"
    },
    {
        name: "termux-lista.py",
        description: "Organizar lista de malwares Termux",
        category: "malware",
        icon: "fas fa-mobile"
    },
    {
        name: "malware-Ios.py",
        description: "Gerador de malwares para IOS",
        category: "malware",
        icon: "fab fa-apple"
    },
    {
        name: "malware-Linux.py",
        description: "Gerador de malware para LINUX",
        category: "malware",
        icon: "fab fa-linux"
    },
    {
        name: "malware-macOS.py",
        description: "Gerador de malware para macOS",
        category: "malware",
        icon: "fab fa-apple"
    },
    {
        name: "malware-Windows.py",
        description: "Gerador de malware para Windows",
        category: "malware",
        icon: "fab fa-windows"
    },
    {
        name: "malwares-Android-apk.py",
        description: "Gerador de malware para Android (APK)",
        category: "malware",
        icon: "fab fa-android"
    },
    {
        name: "termux-payloads.py",
        description: "Malwares para o Termux",
        category: "malware",
        icon: "fas fa-mobile-alt"
    },
    {
        name: "malware-bot-telegram.py",
        description: "Malwares + bot do Telegram",
        category: "malware",
        icon: "fab fa-telegram"
    },
    {
        name: "install-metasploit-termux.py",
        description: "Baixar o Metasploit no Termux",
        category: "malware",
        icon: "fas fa-download"
    },
    {
        name: "listener.py",
        description: "Se conectar em um malware",
        category: "malware",
        icon: "fas fa-headphones"
    },
    {
        name: "app-inject.py",
        description: "Injetar malwares em app legítimo",
        category: "malware",
        icon: "fas fa-syringe"
    },
    {
        name: "metasploit-web.py",
        description: "Metasploit com interface web",
        category: "malware",
        icon: "fas fa-globe"
    },
    {
        name: "webhook-malware.py",
        description: "Malwares compilados + webhook",
        category: "malware",
        icon: "fas fa-link"
    },
    {
        name: "TheFatRat.py",
        description: "Ferramenta geradora de malware",
        category: "malware",
        icon: "fas fa-rat"
    },
    {
        name: "Beelogger.py",
        description: "Ferramenta geradora de malware",
        category: "malware",
        icon: "fas fa-bug"
    },
    {
        name: "CVE.py",
        description: "Exploração de vulnerabilidades críticas",
        category: "malware",
        icon: "fas fa-exclamation-triangle"
    },

    // Scanner - 9 ferramentas
    {
        name: "scanner.py",
        description: "Ferramenta de varredura de portas",
        category: "scanner",
        icon: "fas fa-search"
    },
    {
        name: "nmap.py",
        description: "Menu pra Nmap",
        category: "scanner",
        icon: "fas fa-network-wired"
    },
    {
        name: "scan-perigo.py",
        description: "Procura portas vulneráveis como ADB",
        category: "scanner",
        icon: "fas fa-exclamation-triangle"
    },
    {
        name: "scan-massa.py",
        description: "Faz scanners em massa",
        category: "scanner",
        icon: "fas fa-broadcast-tower"
    },
    {
        name: "scan-real.py",
        description: "Scanner real",
        category: "scanner",
        icon: "fas fa-shield-alt"
    },
    {
        name: "nmap-script.py",
        description: "Usa os scripts do Nmap",
        category: "scanner",
        icon: "fas fa-code"
    },
    {
        name: "scan-geral.py",
        description: "Faz scanner em todos os aparelhos de uma rede",
        category: "scanner",
        icon: "fas fa-wifi"
    },
    {
        name: "scanner-smart-tv.py",
        description: "Ataque em Smart TV",
        category: "scanner",
        icon: "fas fa-tv"
    },
    {
        name: "scanner-tv.py",
        description: "Descobre a versão da sua TV",
        category: "scanner",
        icon: "fas fa-desktop"
    },
    {
        name: "upnp-dlna.py",
        description: "Busca portas vulneráveis de TV smart",
        category: "scanner",
        icon: "fas fa-plug"
    },

    // Brute Force - 7 ferramentas
    {
        name: "dictionary-attack.py",
        description: "Ataque de dicionário a senhas",
        category: "brute",
        icon: "fas fa-book"
    },
    {
        name: "hash-cracker.c",
        description: "Quebrador de hashes em C",
        category: "brute",
        icon: "fas fa-unlock"
    },
    {
        name: "puro.py",
        description: "Força bruta pura",
        category: "brute",
        icon: "fas fa-bolt"
    },
    {
        name: "sites.py",
        description: "Força bruta em sites",
        category: "brute",
        icon: "fas fa-globe"
    },
    {
        name: "hydra.py",
        description: "Ferramenta Hydra para força bruta",
        category: "brute",
        icon: "fas fa-shield-alt"
    },
    {
        name: "pin.py",
        description: "Quebrar PIN de celular",
        category: "brute",
        icon: "fas fa-key"
    },
    {
        name: "jhon-the-ripper.py",
        description: "Quebra de hashes",
        category: "brute",
        icon: "fas fa-user-lock"
    },

    // SQL Injection - 3 ferramentas
    {
        name: "sqlmap.py",
        description: "Ferramenta automatizada de SQL injection",
        category: "sql",
        icon: "fas fa-database"
    },
    {
        name: "sql-inject.py",
        description: "Ferramenta manual de SQL injection",
        category: "sql",
        icon: "fas fa-code"
    },
    {
        name: "sql-scaner.py",
        description: "Scanner de vulnerabilidades SQL",
        category: "sql",
        icon: "fas fa-search"
    },

    // Spam - 9 ferramentas
    {
        name: "fim-link.py",
        description: "Ferramenta de spam por links",
        category: "span",
        icon: "fas fa-link"
    },
    {
        name: "social-span.py",
        description: "Spam em redes sociais",
        category: "span",
        icon: "fas fa-share-alt"
    },
    {
        name: "span-gmail.py",
        description: "Spam por e-mail (Gmail)",
        category: "span",
        icon: "fas fa-envelope"
    },
    {
        name: "span-sms.py",
        description: "Spam por SMS",
        category: "span",
        icon: "fas fa-sms"
    },
    {
        name: "trolar-amigo.py",
        description: "Ferramenta para trollar amigos",
        category: "span",
        icon: "fas fa-laugh"
    },
    {
        name: "git.span-menu.py",
        description: "Várias ferramentas de spam",
        category: "span",
        icon: "fas fa-bomb"
    },
    {
        name: "discord-span.py",
        description: "Spam de Discord",
        category: "span",
        icon: "fab fa-discord"
    },
    {
        name: "mensagem-sms.py",
        description: "Spam de mensagem de SMS",
        category: "span",
        icon: "fas fa-comment-alt"
    },
    {
        name: "bot-span-discord.py",
        description: "Destruição total de grupos",
        category: "span",
        icon: "fas fa-robot"
    },

    // Phishing - 11 ferramentas
    {
        name: "menu-phishing.py",
        description: "Menu completo de ferramentas de phishing",
        category: "phishing",
        icon: "fas fa-fish"
    },
    {
        name: "rede-val.py",
        description: "Validador de redes de phishing",
        category: "phishing",
        icon: "fas fa-check-circle"
    },
    {
        name: "site-clone.py",
        description: "Clonador de sites para phishing",
        category: "phishing",
        icon: "fas fa-copy"
    },
    {
        name: "info-phishing.py",
        description: "Ferramenta de phishing com informações",
        category: "phishing",
        icon: "fas fa-info-circle"
    },
    {
        name: "mascara.py",
        description: "Mascaramento de URLs para phishing",
        category: "phishing",
        icon: "fas fa-mask"
    },
    {
        name: "Clickjacking.py",
        description: "Ataques de Clickjacking",
        category: "phishing",
        icon: "fas fa-mouse-pointer"
    },
    {
        name: "phishing-games.py",
        description: "Phishing pra jogo",
        category: "phishing",
        icon: "fas fa-gamepad"
    },
    {
        name: "phishing-social.py",
        description: "Phishing pra redes sociais",
        category: "phishing",
        icon: "fas fa-share-alt"
    },
    {
        name: "phishing-banco.py",
        description: "Phishing pra banco",
        category: "phishing",
        icon: "fas fa-university"
    },
    {
        name: "phisDrive-by-social.py",
        description: "Página com malware que cria shell",
        category: "phishing",
        icon: "fas fa-car-crash"
    },
    {
        name: "phishing-discord.py",
        description: "Cria página pra roubar token",
        category: "phishing",
        icon: "fab fa-discord"
    },
    {
        name: "phishing-apk.py",
        description: "Cria uma página que recomenda um malware para APK",
        category: "phishing",
        icon: "fab fa-android"
    },

    // XSS - 3 ferramentas
    {
        name: "xss.py",
        description: "Ferramenta de ataque XSS",
        category: "xss",
        icon: "fas fa-code"
    },
    {
        name: "xss-scan.py",
        description: "Scanner de vulnerabilidades XSS",
        category: "xss",
        icon: "fas fa-search"
    },
    {
        name: "xss-malware.py",
        description: "XSS com payload de malware",
        category: "xss",
        icon: "fas fa-biohazard"
    },

    // Git Exposto - 2 ferramentas
    {
        name: "git.py",
        description: "Scanner de repositórios Git expostos",
        category: "git-exposto",
        icon: "fab fa-git-alt"
    },
    {
        name: "baixar-git.py",
        description: "Baixar Git",
        category: "git-exposto",
        icon: "fas fa-download"
    },

    // DoS - 2 ferramentas
    {
        name: "dos.py",
        description: "Ferramentas de Denial of Service",
        category: "dos",
        icon: "fas fa-ban"
    },
    {
        name: "dos-ataque.py",
        description: "Ataques DoS específicos",
        category: "dos",
        icon: "fas fa-exclamation-triangle"
    },

    // DDoS - 2 ferramentas
    {
        name: "ddos.py",
        description: "Ferramentas de Distributed Denial of Service",
        category: "ddos",
        icon: "fas fa-cloud-download-alt"
    },
    {
        name: "ddos-ataque.py",
        description: "Ataques DDoS específicos",
        category: "ddos",
        icon: "fas fa-bolt"
    },

    // Doxing - 2 ferramentas
    {
        name: "dox.py",
        description: "Ferramentas de coleta de informações pessoais",
        category: "dox",
        icon: "fas fa-address-card"
    },
    {
        name: "dox-discord.py",
        description: "Vai mandar os dados coletados para um canal",
        category: "dox",
        icon: "fab fa-discord"
    },

    // Zero Day - 2 ferramentas
    {
        name: "zero-day.py",
        description: "Exploits de dia zero",
        category: "zero-day",
        icon: "fas fa-bug"
    },
    {
        name: "zero-day-scanner.py",
        description: "Scanner de vulnerabilidades zero-day",
        category: "zero-day",
        icon: "fas fa-search"
    },

    // Testes Rede - 3 ferramentas
    {
        name: "rede.py",
        description: "Ferramentas de teste de rede",
        category: "testes-rede",
        icon: "fas fa-wifi"
    },
    {
        name: "my-wireshark.py",
        description: "Copia do Wireshark",
        category: "testes-rede",
        icon: "fas fa-stream"
    },
    {
        name: "analise-web.py",
        description: "Análise web de rede",
        category: "testes-rede",
        icon: "fas fa-globe"
    },

    // Linux - 1 ferramenta
    {
        name: "distro.py",
        description: "Ferramentas para distribuições Linux",
        category: "linux",
        icon: "fab fa-linux"
    },

    // VPN - 3 ferramentas
    {
        name: "vpn.py",
        description: "Ferramentas de VPN",
        category: "vpn",
        icon: "fas fa-user-secret"
    },
    {
        name: "tor.py",
        description: "Tor para anonimato",
        category: "vpn",
        icon: "fas fa-onion"
    },
    {
        name: "my-vpn.py",
        description: "Minha VPN personalizada",
        category: "vpn",
        icon: "fas fa-shield-alt"
    },

    // Wi-Fi - 4 ferramentas
    {
        name: "wi-fi.py",
        description: "Ferramentas de análise Wi-Fi",
        category: "wifi",
        icon: "fas fa-wifi"
    },
    {
        name: "clonar-wi_fi.py",
        description: "Clonar Wi-Fi",
        category: "wifi",
        icon: "fas fa-copy"
    },
    {
        name: "quebrar-senha.py",
        description: "Quebrar senha de Wi-Fi",
        category: "wifi",
        icon: "fas fa-key"
    },
    {
        name: "Man-in-the-Middle.py",
        description: "Ataques Man-in-the-Middle",
        category: "wifi",
        icon: "fas fa-user-friends"
    },

    // Bluetooth - 2 ferramentas
    {
        name: "Bluejacking.py",
        description: "Ataques de Bluejacking",
        category: "bluetooth",
        icon: "fas fa-bluetooth"
    },
    {
        name: "Bluesnarfing.py",
        description: "Ataques de Bluesnarfing",
        category: "bluetooth",
        icon: "fas fa-bluetooth-b"
    },

    // Extras - 13 ferramentas
    {
        name: "atualizações.py",
        description: "Atualizações do sistema",
        category: "extras",
        icon: "fas fa-sync-alt"
    },
    {
        name: "install.py",
        description: "Instalar dependências",
        category: "extras",
        icon: "fas fa-download"
    },
    {
        name: "definir-usuario.py",
        description: "Definir nome de usuário",
        category: "extras",
        icon: "fas fa-user"
    },
    {
        name: "aleatorio.py",
        description: "Gera números aleatórios",
        category: "extras",
        icon: "fas fa-random"
    },
    {
        name: "gerador-senhas.py",
        description: "Gera senhas fortes",
        category: "extras",
        icon: "fas fa-key"
    },
    {
        name: "Conversor-moedas.py",
        description: "Valor da sua moeda em moedas",
        category: "extras",
        icon: "fas fa-money-bill-wave"
    },
    {
        name: "verificador-links.py",
        description: "Verifica se um link é seguro",
        category: "extras",
        icon: "fas fa-shield-alt"
    },
    {
        name: "calculadora.py",
        description: "Calculadora simples",
        category: "extras",
        icon: "fas fa-calculator"
    },
    {
        name: "terminal.py",
        description: "Terminal interativo do PolyTools",
        category: "extras",
        icon: "fas fa-terminal"
    },
    {
        name: "prompet.py",
        description: "Mudar prompt do terminal",
        category: "extras",
        icon: "fas fa-code"
    },
    {
        name: "systema.py",
        description: "Olhar dados do seu Termux com Termux-API",
        category: "extras",
        icon: "fas fa-mobile-alt"
    },
    {
        name: "buscador.py",
        description: "Buscador de ferramentas",
        category: "extras",
        icon: "fas fa-search"
    },
    {
        name: "organizador.py",
        description: "Organizador de arquivos",
        category: "extras",
        icon: "fas fa-folder"
    },
    {
        name: "vsPolystudio.py",
        description: "VS Code do PolyTools",
        category: "extras",
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
