
import Button from './Button';

function Sidebar({ moduloAtual, setModuloAtual }) {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>ERP INDUSTRIAL</h2>
        <span>v1.0.0</span>
      </div>

      <nav className="menu-group">
        <Button
          label="PCP / Produção"
          variant="nav"
          active={moduloAtual === 'PCP'}
          onClick={() => setModuloAtual('PCP')}
        />

        <Button
          label="Estoque"
          variant="nav"
          active={moduloAtual === 'ESTOQUE'}
          onClick={() => setModuloAtual('ESTOQUE')}
        />

        <Button
          label="Finanças"
          variant="nav"
          active={moduloAtual === 'FINANCAS'}
          onClick={() => setModuloAtual('FINANCAS')}
        />

        <Button
          label="Manutenção"
          variant="nav"
          active={moduloAtual === 'MANUTENCAO'}
          onClick={() => setModuloAtual('MANUTENCAO')}
        />
      </nav>
    </aside>
  );
}

export default Sidebar;
