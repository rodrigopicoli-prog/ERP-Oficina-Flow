import Link from 'next/link';
import { ReactNode } from 'react';

const menu = [
  ['Dashboard', '/dashboard'],
  ['Clientes', '/clientes'],
  ['Veículos', '/veiculos'],
  ['Produtos/Serviços', '/produtos'],
  ['Ordens de Serviço', '/ordens-servico'],
  ['Contas a Pagar', '/financeiro/contas-pagar'],
  ['Contas a Receber', '/financeiro/contas-receber'],
  ['Caixa', '/financeiro/caixa'],
];

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', minHeight: '100vh' }}>
      <aside style={{ background: '#0f172a', color: '#e2e8f0', padding: 20 }}>
        <h1 style={{ marginTop: 0 }}>ERP Oficina Cloud</h1>
        <nav style={{ display: 'grid', gap: 10 }}>
          {menu.map(([label, href]) => (
            <Link key={href} href={href} style={{ padding: '8px 10px', borderRadius: 8, background: '#1e293b' }}>
              {label}
            </Link>
          ))}
        </nav>
      </aside>
      <main>
        <header style={{ height: 64, background: 'white', borderBottom: '1px solid #e2e8f0', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <strong>Operação da oficina</strong>
          <span>Empresa: Matriz Demo</span>
        </header>
        <section style={{ padding: 20 }}>{children}</section>
      </main>
    </div>
  );
}
