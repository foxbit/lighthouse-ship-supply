import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Anchor, Leaf, Shield, Clock, Zap, Send, Upload } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    navio: "",
    agencia: "",
    eta: "",
    mensagem: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Cotação enviada:", formData);
    alert("Cotação enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ navio: "", agencia: "", eta: "", mensagem: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-[#0D1B2A] text-white py-3 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <a href="mailto:comercial@lighthouseship.com.br" className="flex items-center gap-2 hover:text-[#C9A84C] transition">
              <Mail size={16} />
              comercial@lighthouseship.com.br
            </a>
            <a href="tel:+5598999999999" className="flex items-center gap-2 hover:text-[#C9A84C] transition">
              <Phone size={16} />
              +55 (98) 9999-9999
            </a>
          </div>
          <span className="text-[#C9A84C] font-semibold">Atendimento 24/7</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0D1B2A] rounded-full flex items-center justify-center">
              <Anchor className="text-[#C9A84C]" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#0D1B2A]">LIGHTHOUSE</h1>
              <p className="text-xs text-[#C9A84C] font-semibold">Ship Supply</p>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <a href="#inicio" className="text-[#1A1A2E] hover:text-[#C9A84C] font-medium transition">Início</a>
            <a href="#quem-somos" className="text-[#1A1A2E] hover:text-[#C9A84C] font-medium transition">Quem Somos</a>
            <a href="#suprimentos" className="text-[#1A1A2E] hover:text-[#C9A84C] font-medium transition">Suprimentos</a>
            <a href="#portos" className="text-[#1A1A2E] hover:text-[#C9A84C] font-medium transition">Portos</a>
            <a href="#contato" className="text-[#1A1A2E] hover:text-[#C9A84C] font-medium transition">Contato</a>
            <Button className="bg-[#C9A84C] hover:bg-[#B8941F] text-white font-semibold">Solicitar Cotação</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="bg-[#0D1B2A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#C9A84C] font-semibold text-sm mb-4">SHIP CHANDLER • SÃO LUÍS, MA</p>
            <h2 className="text-5xl font-bold mb-6 font-playfair leading-tight">Onde a Rapidez Encontra a Qualidade</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Fornecemos provisões frescas e itens de hotelaria entregues com agilidade máxima. Sua tripulação bem abastecida, sua operação sempre no prazo.
            </p>
            <div className="flex gap-4">
              <Button className="bg-[#C9A84C] hover:bg-[#B8941F] text-white px-8 py-6 text-lg font-semibold">
                Solicitar Cotação
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold">
                Nossos Suprimentos
              </Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028518339/6zvZhDvRRWjir6mmFofA9R/hero-lighthouse-truck-iweAZocaQGYxuef6evzoL7.webp"
              alt="Caminhão Lighthouse Ship Supply no Porto"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <Clock className="text-[#C9A84C] mb-4" size={40} />
            <h3 className="text-3xl font-bold text-[#0D1B2A] mb-2">24/7</h3>
            <p className="text-gray-600 font-medium">Operações Contínuas</p>
          </div>
          <div className="flex flex-col items-center">
            <Zap className="text-[#C9A84C] mb-4" size={40} />
            <h3 className="text-3xl font-bold text-[#0D1B2A] mb-2">Pontual</h3>
            <p className="text-gray-600 font-medium">Entrega Garantida</p>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="text-[#C9A84C] mb-4" size={40} />
            <h3 className="text-3xl font-bold text-[#0D1B2A] mb-2">Premium</h3>
            <p className="text-gray-600 font-medium">Qualidade Certificada</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="quem-somos" className="bg-[#F5F7FA] py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#0D1B2A] mb-6 font-playfair">Quem Somos</h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              A <strong>Lighthouse Ship Supply</strong> surge com o propósito de elevar o padrão de abastecimento marítimo. Localizada estrategicamente para atender as demandas portuárias, nossa empresa foca no que é essencial para o bem-estar a bordo: provisões de alta qualidade e itens de hotelaria de primeira linha.
            </p>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Entendemos que a logística de um navio não permite erros. Por isso, baseamos nossa operação em três pilares: <strong>agilidade na resposta, rigorosa seleção de produtos e pontualidade na entrega.</strong>
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Zap className="text-[#C9A84C]" size={20} />
                <span className="text-gray-700 font-medium">Agilidade na resposta</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="text-[#C9A84C]" size={20} />
                <span className="text-gray-700 font-medium">Qualidade garantida</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-[#C9A84C]" size={20} />
                <span className="text-gray-700 font-medium">Disponibilidade 24/7</span>
              </div>
            </div>
            <a href="#contato" className="inline-block mt-8 text-[#C9A84C] font-semibold hover:text-[#B8941F] transition">
              Saiba Mais →
            </a>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028518339/6zvZhDvRRWjir6mmFofA9R/port-sao-luis-oSWmkccYEm6WmA7ZVzKbAv.webp"
              alt="Porto de São Luís"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Supplies Section */}
      <section id="suprimentos" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#0D1B2A] mb-16 font-playfair">Nossos Suprimentos</h2>
          
          <div className="grid grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border-t-4 border-[#C9A84C] rounded-lg shadow-md p-8 hover:shadow-lg transition">
              <Leaf className="text-[#C9A84C] mb-4" size={40} />
              <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4">Provisões Frescas e Congelados</h3>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li><strong>Frutas e Vegetais:</strong> Seleção diária de itens da estação</li>
                <li><strong>Carnes e Aves:</strong> Cortes bovinos, suínos e aves com certificação</li>
                <li><strong>Peixes e Frutos do Mar:</strong> Opções frescas e congeladas</li>
                <li><strong>Laticínios e Ovos:</strong> Leite, queijos, iogurtes e ovos frescos</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white border-t-4 border-[#C9A84C] rounded-lg shadow-md p-8 hover:shadow-lg transition">
              <Upload className="text-[#C9A84C] mb-4" size={40} />
              <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4">Provisões Secas (Dry Stores)</h3>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li><strong>Grãos e Farináceos:</strong> Arroz, feijão, massas, farinhas e cereais</li>
                <li><strong>Enlatados e Conservas:</strong> Vegetais, molhos, óleos e azeites</li>
                <li><strong>Condimentos e Especiarias:</strong> Essenciais para gastronomia internacional</li>
                <li><strong>Bebidas:</strong> Água mineral, sucos, café e chás</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white border-t-4 border-[#C9A84C] rounded-lg shadow-md p-8 hover:shadow-lg transition">
              <Shield className="text-[#C9A84C] mb-4" size={40} />
              <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4">Hotelaria e Cabine</h3>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li><strong>Produtos de Limpeza:</strong> Detergentes, desinfetantes industriais</li>
                <li><strong>Higiene Pessoal:</strong> Sabonetes, cremes dentais, shampoos</li>
                <li><strong>Cama e Banho:</strong> Lençóis, toalhas de alta gramatura</li>
                <li><strong>Descartáveis:</strong> Copos, guardanapos e embalagens</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#0D1B2A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 font-playfair">Por que Escolher a Lighthouse?</h2>
          
          <div className="grid grid-cols-4 gap-8">
            <div className="text-center">
              <Zap className="text-[#C9A84C] mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Agilidade</h3>
              <p className="text-gray-300">Resposta rápida respeitando ETA/ETD da sua embarcação</p>
            </div>
            <div className="text-center">
              <Shield className="text-[#C9A84C] mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Qualidade</h3>
              <p className="text-gray-300">Seleção criteriosa de alimentos frescos e produtos premium</p>
            </div>
            <div className="text-center">
              <Clock className="text-[#C9A84C] mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Disponibilidade</h3>
              <p className="text-gray-300">Suporte pronto 24/7 para emergências e cotações rápidas</p>
            </div>
            <div className="text-center">
              <Leaf className="text-[#C9A84C] mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Dietas Especiais</h3>
              <p className="text-gray-300">Atendemos Halal, Vegetariana e outras necessidades</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ports Section */}
      <section id="portos" className="bg-[#F5F7FA] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#0D1B2A] mb-16 font-playfair">Portos Atendidos</h2>
          
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition">
              <MapPin className="text-[#C9A84C] mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-bold text-[#0D1B2A]">Itaqui</h3>
              <p className="text-gray-600 mt-2">Terminal portuário de São Luís</p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition">
              <MapPin className="text-[#C9A84C] mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-bold text-[#0D1B2A]">Ponta da Madeira</h3>
              <p className="text-gray-600 mt-2">Terminal de minério</p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition">
              <MapPin className="text-[#C9A84C] mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-bold text-[#0D1B2A]">Alumar</h3>
              <p className="text-gray-600 mt-2">Terminal de alumínio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="contato" className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#0D1B2A] mb-4 font-playfair">Solicite uma Cotação</h2>
          <p className="text-center text-gray-600 mb-12">Preencha o formulário abaixo e nossa equipe entrará em contato em até 1 hora</p>
          
          <form onSubmit={handleSubmit} className="bg-[#F5F7FA] rounded-lg p-8 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#0D1B2A] mb-2">Nome do Navio / IMO</label>
                <input
                  type="text"
                  name="navio"
                  value={formData.navio}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20"
                  placeholder="Ex: MV Lighthouse / 1234567"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0D1B2A] mb-2">Agência Marítima</label>
                <input
                  type="text"
                  name="agencia"
                  value={formData.agencia}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20"
                  placeholder="Ex: Agência XYZ"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#0D1B2A] mb-2">Data de Atracação (ETA)</label>
              <input
                type="datetime-local"
                name="eta"
                value={formData.eta}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#0D1B2A] mb-2">Mensagem / Lista de Suprimentos</label>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20"
                placeholder="Descreva seus suprimentos necessários..."
              />
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#C9A84C] transition cursor-pointer">
              <Upload className="mx-auto mb-2 text-gray-400" size={24} />
              <p className="text-sm text-gray-600">Anexar lista de suprimentos (opcional)</p>
            </div>

            <button
              type="submit"
              className="w-full bg-[#C9A84C] hover:bg-[#B8941F] text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Enviar Cotação
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D1B2A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Anchor className="text-[#C9A84C]" size={28} />
              <div>
                <h3 className="text-lg font-bold">LIGHTHOUSE</h3>
                <p className="text-xs text-[#C9A84C]">Ship Supply</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">Elevando o padrão de abastecimento marítimo desde 2024.</p>
          </div>

          <div>
            <h4 className="font-bold text-[#C9A84C] mb-4">Localização</h4>
            <p className="text-gray-400 text-sm">
              Rua dos Nobres<br />
              São Luís, MA<br />
              Brasil
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#C9A84C] mb-4">Contato</h4>
            <p className="text-gray-400 text-sm mb-2">
              <a href="mailto:comercial@lighthouseship.com.br" className="hover:text-[#C9A84C] transition">
                comercial@lighthouseship.com.br
              </a>
            </p>
            <p className="text-gray-400 text-sm">
              <a href="tel:+5598999999999" className="hover:text-[#C9A84C] transition">
                +55 (98) 9999-9999
              </a>
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#C9A84C] mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#C9A84C] transition">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-[#C9A84C] transition">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-[#C9A84C] transition">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Lighthouse Ship Supply. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5598999999999?text=Olá%20Lighthouse%20Ship%20Supply!%20Gostaria%20de%20solicitar%20uma%20cotação."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition transform hover:scale-110 z-40"
        title="Emergência? Fale conosco agora"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
