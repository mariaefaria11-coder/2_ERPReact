
import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import Button from './components/Button';

function App() {
  // Estado que controla o módulo ativo
  const [moduloAtual, setModuloAtual] = useState('PCP');

  // Estados dos dados simulados do ERP
  const [ordensAbertas, setOrdensAbertas] = useState(12);
  const [itensEstoque, setItensEstoque] = useState(1450);
  const [faturamentoDia, setFaturamentoDia] = useState(85400);

  // Estado do módulo de manutenção
  const [chamadosManutencao, setChamadosManutencao] = useState(3);

  return (
    <div className="app-layout">

      {/* Sidebar Persistente */}
      <Sidebar
        moduloAtual={moduloAtual}
        setModuloAtual={setModuloAtual}
      />

      {/* Área de Conteúdo Dinâmico */}
      <main className="main-content">

        {/* MÓDULO PCP / PRODUÇÃO */}
        {moduloAtual === 'PCP' && (
          <div>
            <header className="header-page">
              <h1>Módulo PCP — Planejamento e Controle da Produção</h1>
              <p>Monitoramento e Emissão de Ordens de Fabricação</p>
            </header>

            <div className="grid-cards">
              <Card title="Ordens em Execução">
                <div className="metric">
                  {ordensAbertas} OPs
                </div>

                <div className="acoes-card">
                  <Button
                    label="+ Criar Nova OP"
                    variant="primary"
                    onClick={() => setOrdensAbertas(ordensAbertas + 1)}
                  />
                </div>
              </Card>

              <Card title="Status do Maquinário">
                <p className="status-operando">
                  Linha #01: OPERANDO
                </p>

                <p className="status-manutencao">
                  Linha #02: MANUTENÇÃO
                </p>
              </Card>
            </div>
          </div>
        )}

        {/* MÓDULO ESTOQUE */}
        {moduloAtual === 'ESTOQUE' && (
          <div>
            <header className="header-page">
              <h1>Módulo de Gestão de Estoque</h1>
              <p>Controle de Almoxarifado e Insumos</p>
            </header>

            <div className="grid-cards">
              <Card title="Total de Peças em Almoxarifado">
                <div className="metric">
                  {itensEstoque} un
                </div>

                <div className="acoes-card">
                  <Button
                    label="Entrada (+50)"
                    variant="success"
                    onClick={() => setItensEstoque(itensEstoque + 50)}
                  />

                  <Button
                    label="Baixa (-50)"
                    variant="danger"
                    onClick={() => setItensEstoque(itensEstoque - 50)}
                  />
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* MÓDULO FINANÇAS */}
        {moduloAtual === 'FINANCAS' && (
          <div>
            <header className="header-page">
              <h1>Módulo Financeiro</h1>
              <p>Fluxo de Caixa e Vendas Industriais</p>
            </header>

            <div className="grid-cards">
              <Card title="Faturamento do Dia">
                <div className="metric metric-success">
                  R$ {faturamentoDia.toLocaleString('pt-BR')}
                </div>

                <div className="acoes-card">
                  <Button
                    label="Simular Venda (+R$ 5.000)"
                    variant="success"
                    onClick={() => setFaturamentoDia(faturamentoDia + 5000)}
                  />
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* MÓDULO MANUTENÇÃO - DESAFIO PRÁTICO */}
        {moduloAtual === 'MANUTENCAO' && (
          <div>
            <header className="header-page">
              <h1>Módulo de Manutenção Preditiva</h1>
              <p>Controle de Chamados de Manutenção Industrial</p>
            </header>

            <div className="grid-cards">
              <Card title="Chamados Abertos">
                <div className="metric">
                  {chamadosManutencao} chamados
                </div>

                <div className="acoes-card botoes-manutencao">
                  <Button
                    label="Abrir Chamado (+1)"
                    variant="success"
                    onClick={() =>
                      setChamadosManutencao(chamadosManutencao + 1)
                    }
                  />

                  <Button
                    label="Concluir Chamado (-1)"
                    variant="danger"
                    onClick={() =>
                      setChamadosManutencao(
                        Math.max(0, chamadosManutencao - 1)
                      )
                    }
                  />
                </div>
              </Card>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

export default App;
