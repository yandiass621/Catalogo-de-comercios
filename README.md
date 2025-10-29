# Catalógo sobre comércios do meu bairro. #
## 💡 Sobre o projeto

Este site reúne os principais **comércios locais**, como:
- 🛒 Supermercados e mercearias  
- 💊 Farmácias  
- 💅 Cuidados e beleza  
- 🍔 Lanchonetes e restaurantes  

Cada comércio possui informações de:
- 📍 Endereço com link direto para o Google Maps  
- 📞 Contato via WhatsApp  
- 🖼️ Imagem e breve descrição  

---

## 🌐 Demonstração visual

### 💻 Visual  desktop:
![Preview Desktop](imagens/ilustração-desktop.png)

### 📱 Visual mobile:
![Preview Mobile](imagens/visual-mobille.png)


---

## 🧱 Estrutura do projeto

<!DOCTYPE html>
<html lang="pt-br"> <!-- Define o idioma da página como português do Brasil -->
<head>
    <meta charset="UTF-8"> <!-- Define o conjunto de caracteres (acentuação e símbolos) -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Torna o site responsivo em dispositivos móveis -->
    
    <!-- Ícone que aparece na aba do navegador -->
    <link rel="shortcut icon" href="imagens/tech-solut-header.jpg" type="image/x-icon">
    
    <!-- Importa o arquivo CSS externo para os estilos -->
    <link rel="stylesheet" href="css/estilo.css">
    
    <!-- Título que aparece na aba do navegador -->
    <title>Catálogo de Comércios</title>
</head>

<body>
    <!-- ======= Cabeçalho fixo com navegação ======= -->
    <header>
        <!-- Menu de navegação com âncoras que levam às seções da página -->
        <nav>
            <ul>
                <li><a href="#supermercado-e-conveniencia">Supermercado e Conveniência</a></li>
                <li><a href="#farmacias">Farmácias</a></li>
                <li><a href="#cuidados">Cuidados</a></li>
                <li><a href="#lanchonetes">Lanchonetes</a></li>
            </ul>
        </nav>

        <!-- Logotipo que redireciona para a página inicial -->
        <a href="index.html">
            <img src="imagens/tech-solut-header.jpg" alt="Logo da empresa Tech Solut">
        </a>
    </header>

    <!-- ======= Conteúdo principal ======= -->
    <main>

        <!-- ================= SEÇÃO: Supermercado e Conveniência ================= -->
        <section id="supermercado-e-conveniencia" class="sessao">
            <h1>Supermercado e Conveniência</h1>

            <!-- Container que agrupa os cards desta categoria -->
            <div class="conteiner1">

                <!-- ===== CARD 1 ===== -->
                <div class="cards1">
                    <img src="imagens/imagem-cabral.jpg" alt="Supermercado Cabral">
                    <h3>Supermercado Cabral</h3>
                    <h4>Descrição</h4>
                    <p>Mercado mais famoso do bairro por ter a maior variedade de produtos.</p>
                    
                    <!-- Ícone e número do WhatsApp -->
                    <div class="icones-card">
                        <img src="imagens/whatsapp-atual.png" alt="WhatsApp">
                        <a href="https://api.whatsapp.com/send?phone=01146696513" target="_blank">
                            <p>01146696513</p>
                        </a>
                    </div>

                    <!-- Ícone e link de localização -->
                    <div class="icones-card-loc">
                        <img src="imagens/icone-loc.png" alt="Localização">
                        <a href="https://www.google.com/maps/place/Cabral+Supermercado/..." target="_blank">
                            <p>R. Marajó, 08 - Jardim Santa Julia, Itapecerica da Serra - SP</p>
                        </a>
                    </div>
                </div>

                <!-- ===== CARD 2 ===== -->
                <div class="cards2">
                    <img src="imagens/padaria trapé.jpg" alt="Padaria Trapé">
                    <h3>Padaria Trapé</h3>
                    <h4>Descrição</h4>
                    <p>Panificadora e mercearia próxima à quadra sintética, descendo a rua de frente ao Colégio Júlia de Castro Carneiro.</p>
                    
                    <div class="icones-card">
                        <img src="imagens/whatsapp-atual.png" alt="WhatsApp">
                        <p>Sem-Número</p>
                    </div>

                    <div class="icones-card-loc">
                        <img src="imagens/icone-loc.png" alt="Localização">
                        <a href="https://www.google.com/maps/place/Padaria+Trape/..." target="_blank">
                            <p>R. Girassóis, 69 - Crispim, Itapecerica da Serra - SP</p>
                        </a>
                    </div>
                </div>

                <!-- ===== CARD 3 ===== -->
                <div class="cards3">
                    <img src="imagens/padaria-rock.png" alt="Padaria do Rock">
                    <h3>Padaria do Rock</h3>
                    <h4>Descrição</h4>
                    <p>De frente à Imobiliária Soares, atua como panificadora e mercearia.</p>

                    <div class="icones-card">
                        <img src="imagens/whatsapp-atual.png" alt="WhatsApp">
                        <p>Sem-Número</p>
                    </div>

                    <div class="icones-card-loc">
                        <img src="imagens/icone-loc.png" alt="Localização">
                        <a href="https://www.google.com/maps/place/Padaria+do+Rock/..." target="_blank">
                            <p>R. Maria Sayeg, 187 - Jardim das Oliveiras, Itapecerica da Serra - SP</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- ================= SEÇÃO: Farmácias ================= -->
        <section id="farmacias" class="sessao">
            <h1>Farmácias</h1>

            <div class="conteiner2">

                <!-- ===== CARD 1 ===== -->
                <div class="cards1">
                    <img src="imagens/farma-tem.png" alt="Farmácia Cabral">
                    <h3>Farmácia Farma-Tem</h3>
                    <h4>Descrição</h4>
                    <p>Referência no bairro com ampla variedade de produtos e atendimento excepcional.</p>

                    <div class="icones-card">
                        <img src="imagens/whatsapp-atual.png" alt="WhatsApp">
                        <a href="https://api.whatsapp.com/send?phone=011944791433" target="_blank">
                            <p>011944791433</p>
                        </a>
                    </div>

                    <div class="icones-card-loc">
                        <img src="imagens/icone-loc.png" alt="Localização">
                        <a href="https://www.google.com/maps/place/Farmácia+-+FARMA+TEM+SAYEG/..." target="_blank">
                            <p>R. Maria Sayeg, 46 - Jardim das Oliveiras, Itapecerica da Serra - SP</p>
                        </a>
                    </div>
                </div>

                <!-- ===== CARD 2 (exemplo resumido) ===== -->
                <div class="cards2">
                    <img src="imagens/nst-farmacia.png" alt="Farmácia NST">
                    <h3>Farmácia NST</h3>
                    <h4>Descrição</h4>
                    <p>Medicamentos essenciais e genéricos com preços acessíveis e fácil localização.</p>

                    <div class="icones-card">
                        <img src="imagens/whatsapp-atual.png" alt="WhatsApp">
                        <a href="https://api.whatsapp.com/send?phone=011919811003" target="_blank">
                            <p>011919811003</p>
                        </a>
                    </div>

                    <div class="icones-card-loc">
                        <img src="imagens/icone-loc.png" alt="Localização">
                        <a href="https://www.google.com/maps/place/NST+Farmácia/..." target="_blank">
                            <p>R. Solimões, 1041 - Jardim Santa Julia, Itapecerica da Serra - SP</p>
                        </a>
                    </div>
                </div>

                <!-- Demais cards seguem a mesma estrutura -->
            </div>
        </section>

        <!-- Outras seções: Cuidados e Lanchonetes -->
        <!-- Seguem o mesmo padrão, mudando apenas o conteúdo e os links -->
    </main>
</body>
</html>

---


---

## 🧠 Tecnologias utilizadas

- **HTML5** → Estrutura e semântica  
- **CSS3** → Estilos e responsividade  
- **GitHub Pages** → Hospedagem gratuita e pública  
- **APIs externas** → WhatsApp & Google Maps Links  

---

# Acesse o site #

* Projeto em andamento 

https://yandiass621.github.io/Catalogo-de-comercios/
