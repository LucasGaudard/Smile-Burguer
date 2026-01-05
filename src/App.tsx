import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import hamburguer_menu from './assets/hamburguer_menu.png';
import logoSmileBurguer from './assets/logoSmileBurguer.png';
import HamburguerBacon from './assets/HamburguerBacon.jpg';
import comboClassico from './assets/comboClassico.jpg';
import duploSmash from './assets/duploSmash.jpg';
import CheddarMelt from './assets/CheddarMelt.jpg';
import CrispyChicken from './assets/CrispyChicken.jpg';
import VeggieSupreme from './assets/VeggieSupreme.png';
import BBQCostela from './assets/BBQCostela.png';
import SmileBurguer from './assets/SmileBurguer.png';
import { useState } from 'react';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
  setDarkMode(!darkMode);
  document.body.classList.toggle("dark");
  };

  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");



  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setTelefone(maskPhone(e.target.value));
  };

  const maskPhone = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .slice(0, 15);
  };


   const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(maskCpf(e.target.value));  
  };

  const maskCpf = (value: string) => {
  return value
    .replace(/\D/g, '')               // remove tudo que não for número
    .slice(0, 11)                     // limita a 11 dígitos
    .replace(/(\d{3})(\d)/, '$1.$2')  // coloca o primeiro ponto
    .replace(/(\d{3})(\d)/, '$1.$2')  // coloca o segundo ponto
    .replace(/(\d{3})(\d{2})$/, '$1-$2'); // coloca o hífen
};
  


  return (
<Container>
    {/* INICIO DO MENU DE NAVEGAÇÃO */}
 
  <div className="row">
    <div className="col-md-11">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Navbar.Brand href="#home" className='Reserva-text'>
            <img src={logoSmileBurguer} alt="logo" style={{ width: '55px', marginLeft: '15px'}} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto gap-4">
              <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#promocoes">Promoções</Nav.Link>
                  <Nav.Link href="#cardapio">Cardápio</Nav.Link>
                <Nav.Link href="#QuemSomos">Quem somos</Nav.Link>
              <Nav.Link href="#Reserva">Reserva</Nav.Link>
            </Nav>
          </Navbar.Collapse>

      </Navbar>
    </div>

    <div className="col-md-1 d-flex align-items-center">
      <button onClick={toggleDarkMode} className="btn-darkmode">
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </div>
  </div>
    {/* FIM DO MENU DE NAVEGAÇÃO */}



    {/* INICIO DO CODIGO DO BLOCO HOME */}
<div className='containerHome'>
  <h2 id="home" className='titleHome'>The Smile Burguer</h2>
  <div className='row'>
      <div className='col-md-7 col-lg-6'> 
        <div>
          

          <p style={{fontSize: '20px', textAlign: 'justify', lineHeight: '30px', marginTop: '20px', textIndent: '3%'}}>
            Bem-vindo à The Smile Burguer, onde cada hamburguer é preparado com ingredientes selecionados e grelhados no ponto perfeito para você.
          </p>

          <p style={{fontSize: '20px', textAlign: 'justify', lineHeight: '30px', marginTop: '20px', textIndent: '3%'}}>
            Nossa missão principal é oferecer uma experiencia gastronomica excepcional aos nossos clientes, proporcionando uma variedade de sabores e opções para todos os gostos.
          </p>

          <p style={{fontSize: '20px', textAlign: 'justify', lineHeight: '30px', marginTop: '20px', textIndent: '3%'}}>
            Aqui você encontra hamburguers artesanais deliciosos, acompanhados de uma variedade de opcions de acompanhamentos e bebidas, tudo feito com carinho e atencao aos detalhes.
          </p>

        </div>
      </div>
    

  
      <div className="col-md-5">
        <div className='promo-card1'>
          <img src={hamburguer_menu} alt='hamburguer_menu' style={{width: '500px' , height: '400px', borderRadius: '20px', }}/>
        </div>
      </div>
  </div>
</div>
    {/* FINAL DO CODIGO DO BLOCO HOME */}

    {/* INICIO DO CODIGO DO BLOCO DE PROMOÇÕES */}

      <div className="promocoes container mt-5">
        <h2 id='promocoes' >Promoções da Semana</h2>

        <div className="row">

          {/* Card 1 */}
          <div className="col-md-4">
            <div className="promo-card">
              <img
                src={duploSmash}
                alt="duplo-smash"
                className="promo-img"
              />

              <h4 className="mt-3">Duplo Smash</h4>
              <p className="preco">
                <span className="old">R$ 32,90</span>
                <span className="new"> R$ 24,90</span>
              </p>
              <p className="desc">2 smash + cheddar + bacon</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="promo-card">
              <img
                src={comboClassico}
                alt="ComboCLassico"
                className="promo-img"
              />

              <h4 className="mt-3">Combo Clássico</h4>
              <p className="preco">
                <span className="old">R$ 28,90</span>
                <span className="new"> R$ 21,90</span>
              </p>
              <p className="desc">Hambúrguer + fritas + refri</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="promo-card">
              <img
                src={HamburguerBacon}
                alt="HamburguerBacon"
                className="promo-img"
              />

              <h4 className="mt-3">Mega Bacon</h4>
              <p className="preco">
                <span className="old">R$ 34,90</span>
                <span className="new"> R$ 26,90</span>
              </p>
              <p className="desc">Muito bacon + cheddar cremoso</p>
            </div>
          </div>

        </div>
      </div>


    {/* FIM DO CODIGO DO BLOCO DE PROMOÇÕES */}

    {/* INICIO DO CODIGO DO BLOCO DE CARDÁPIO */}

    <div className="cardapio container mt-5">
  <h2 id="cardapio">Cardápio</h2>

  <div className="row">

    {/* Item 1 */}
    <div className="col-md-6">
      <div className="cardapio-card">
        <img
          src={CheddarMelt}
          alt="CheddarMelt"
          className="cardapio-img"
        />
        <h3 className="mt-3">Cheddar Melt</h3>
        <p className="cardapio-desc">
           Hambúrguer 160g, cheddar cremoso derretido e cebola caramelizada no pão australiano.
        </p>
        <p className="cardapio-preco">R$ 29,90</p>
      </div>
    </div>

    {/* Item 2 */}
    <div className="col-md-6">
      <div className="cardapio-card">
        <img
          src={CrispyChicken}
          alt="Crispy Chicken"
          className="cardapio-img"
        />
        <h3 className="mt-3">Crispy Chicken</h3>
        <p className="cardapio-desc">
          Frango empanado crocante, maionese da casa, alface e queijo prato no pão brioche.
        </p>
        <p className="cardapio-preco">R$ 24,90</p>
      </div>
    </div>

    {/* Item 3 */}
    <div className="col-md-6">
      <div className="cardapio-card">
        <img
          src={BBQCostela}
          alt="BBQCostela"
          className="cardapio-img"
        />
        <h3 className="mt-3">BBQ Costela</h3>
        <p className="cardapio-desc">
           Burger de costela 180g, queijo cheddar, bacon e molho BBQ artesanal.
        </p>
        <p className="cardapio-preco">R$ 31,90</p>
      </div>
    </div>

    {/* Item 4 */}
    <div className="col-md-6">
      <div className="cardapio-card">
        <img
          src={VeggieSupreme}
          alt="VeggieSupreme"
          className="cardapio-img"
        />
        <h3 className="mt-3">VeggieSupreme</h3>
        <p className="cardapio-desc">
            Hambúrguer vegetal grelhado, queijo, tomate, cebola roxa e molho verde especial.
        </p>
        <p className="cardapio-preco">R$ 31,90</p>
      </div>
    </div>
  </div>
</div>

    {/* FIM DO CODIGO DO BLOCO DE CARDÁPIO */}





    {/* INICIO DO CODIGO DO BLOCO QUEM SOMOS */}

    <div className="quem-somos container mt-5">
  <h2  className='Reserva-text'  id="QuemSomos"> <a href="#home"><img  src={logoSmileBurguer} alt="logoSmileBurguer" style={{width: '55px', marginLeft: '15px'}}/> </a> Quem Somos</h2>

  <div className="row align-items-center">

    {/* Texto */}
    <div className="col-md-6">
      <div className="quem-somos-text">
        <p>
          A The Smile Burguer nasceu com o propósito de transformar refeições em momentos felizes.
          Acreditamos que comer bem é mais do que saborear um prato — é criar memórias, compartilhar
          risadas e sentir-se em casa.
        </p>

        <p>
          Nossa equipe trabalha diariamente para entregar hambúrgueres artesanais preparados com
          ingredientes frescos, carnes selecionadas e receitas exclusivas que valorizam sabor e qualidade.
        </p>

        <p>
          Cada detalhe é pensado com carinho para proporcionar uma experiência acolhedora, saborosa
          e inesquecível para você, sua família e seus amigos.
        </p>
      </div>
    </div>

    {/* Imagem */}
    <div className="col-md-6 d-flex justify-content-center">
      <div className="quem-somos-img-wrapper">
        <img
          src={SmileBurguer}
          alt="Quem Somos"
          className="quem-somos-img"
        />
      </div>
    </div>
  </div>
</div>

     {/* FIM DO CODIGO DO BLOCO QUEM SOMOS */}





     {/* INICIO DO CODIGO DO BLOCO RESERVAS */}
   
 
<div className="reservas container mt-5">
  <h2 className='Reserva-text' id="Reserva"> <a href="#home"><img  src={logoSmileBurguer} alt="logoSmileBurguer" style={{width: '55px', marginLeft: '15px'}}/> </a> Reserve sua Mesa</h2>

  <div className="row justify-content-center">
    <div className="col-md-8">
      <form className="reserva-form">

          <div className="form-group">
            <label>Nome completo</label>
            <input type="text" className="form-control" placeholder="Seu nome" required />
          </div>

              <div className="form-group">
                <label>Telefone</label>
                <input type="text" className="form-control" id="telefone"  name="telefone" placeholder="(99) 99999-9999" value={telefone} onChange={handlePhoneChange} required />
              </div>

                  <div className="form-group">
                    <label>CPF</label>
                    <input type="text" className="form-control" id="cpf"  name="cpf" placeholder="xxx.xxx.xxx-xx" value={cpf} onChange={handleCpfChange} required />
                  </div>

                      <div className="form-group">
                        <label>Data da reserva</label>
                        <input type="date" className="form-control" required />
                      </div>

                  <div className="form-group">
                    <label>Horário</label>
                    <input type="time" className="form-control" required />
                  </div>

              <div className="form-group">
                <label>Número de pessoas</label>
                <input type="number" className="form-control" min="1" placeholder="Ex: 4 pessoas" required />
              </div>

          <div className="form-group">
            <label>Observações</label>
            <textarea className="form-control" rows={3} placeholder="" ></textarea>
          </div>

        <button type="submit" className="btn-reservar">Confirmar Reserva</button>
      </form>
    </div>
  </div>
</div>

{/* FIM DO CODIGO DO BLOCO DE RESERVAS */}



</Container>   
  )
}

export default App
