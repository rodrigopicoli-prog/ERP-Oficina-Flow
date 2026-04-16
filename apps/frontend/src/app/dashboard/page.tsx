import { Shell } from '@/components/shell';

const cards = [
  ['OS abertas', '12'],
  ['OS em andamento', '9'],
  ['OS finalizadas hoje', '4'],
  ['Orçamentos pendentes', '7'],
  ['Faturamento do dia', 'R$ 8.540,00'],
  ['Ticket médio', 'R$ 712,00'],
  ['Veículos em pátio', '16'],
  ['Peças com estoque baixo', '5'],
];

export default function DashboardPage() {
  return (
    <Shell>
      <h2 style={{ marginTop: 0 }}>Dashboard</h2>
      <p style={{ color: '#475569' }}>Visão geral operacional e financeira em tempo real (layout inicial).</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 12 }}>
        {cards.map(([label, value]) => (
          <article key={label} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: 12, padding: 14 }}>
            <small style={{ color: '#64748b' }}>{label}</small>
            <p style={{ marginBottom: 0, fontSize: 24, fontWeight: 700 }}>{value}</p>
          </article>
        ))}
      </div>
    </Shell>
  );
}
