export default function LoginPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}>
      <form style={{ width: 360, background: 'white', border: '1px solid #e2e8f0', borderRadius: 12, padding: 20, display: 'grid', gap: 10 }}>
        <h2>Login</h2>
        <input placeholder="E-mail" style={{ padding: 10 }} />
        <input placeholder="Senha" type="password" style={{ padding: 10 }} />
        <input placeholder="Empresa (companyId)" style={{ padding: 10 }} />
        <button type="button" style={{ padding: 10 }}>Entrar</button>
      </form>
    </main>
  );
}
