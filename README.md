# ERP Oficina Cloud

Monorepo inicial para um ERP SaaS multiempresa voltado a oficinas mecânicas.

## Stack

- **Frontend:** Next.js 14, React, TypeScript, Tailwind CSS
- **Backend:** NestJS, Prisma ORM, PostgreSQL, Redis
- **Infra:** Docker Compose, Nginx
- **Auth:** JWT + Refresh Token (estrutura base)
- **Arquitetura:** Multi-tenant por `companyId` em todas as entidades críticas

## Estrutura

```text
apps/
  backend/        # API NestJS + Prisma
  frontend/       # Web app Next.js responsiva
infra/
  nginx/          # reverse proxy para frontend/backend

docs/
  architecture.md # visão de módulos, entidades e roadmap
```

## Módulos MVP fase 1 (base entregue)

1. Login + multiempresa (estrutura)
2. Dashboard (cards e agenda operacional)
3. CRUD de clientes
4. CRUD de veículos
5. CRUD de produtos e serviços (base em produtos, com tipo)
6. Ordem de serviço (CRUD + itens + status)
7. Financeiro básico (contas a pagar/receber + caixa)
8. Schema Prisma com entidades principais e auditoria
9. Docker Compose para desenvolvimento

## Como subir

```bash
docker compose up --build
```

Serviços previstos:

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:3001/api`
- Postgres: `localhost:5432`
- Redis: `localhost:6379`

## Próximos passos sugeridos

- Implementar persistência real nos serviços (substituir mocks)
- Adicionar migrations e seeds Prisma
- Conectar frontend ao backend (React Query + autenticação)
- Implementar RBAC completo por perfil/permissão
- Integrar OCR de placa e provedores externos por adaptadores
