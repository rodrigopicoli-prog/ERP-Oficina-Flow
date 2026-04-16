import { Shell } from './shell';

export function TablePage({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <Shell>
      <h2 style={{ marginTop: 0 }}>{title}</h2>
      <p style={{ color: '#475569' }}>{subtitle}</p>
      <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: 12, overflow: 'hidden' }}>
        <div style={{ padding: 12, borderBottom: '1px solid #e2e8f0' }}>Busca, filtros, paginação e exportação (estrutura inicial)</div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: 12 }}>Código</th>
              <th style={{ textAlign: 'left', padding: 12 }}>Descrição</th>
              <th style={{ textAlign: 'left', padding: 12 }}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: 12 }}>001</td>
              <td style={{ padding: 12 }}>Registro de exemplo</td>
              <td style={{ padding: 12 }}>Ativo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Shell>
  );
}
