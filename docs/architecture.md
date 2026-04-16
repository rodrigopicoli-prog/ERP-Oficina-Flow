# Arquitetura inicial - ERP Oficina Cloud

## 1) Multi-tenant

- Todas as entidades operacionais possuem `companyId`.
- A resolução de tenant é feita pelo header `x-company-id` (etapa inicial).
- Em produção, o `companyId` deve vir do token JWT e escopo de sessão.

## 2) Backend por módulos

- `auth`: login, refresh e profile.
- `tenancy`: utilitários para isolamento por empresa.
- `customers`: cadastro de clientes PF/PJ com LGPD.
- `vehicles`: vínculo veículo-cliente.
- `products`: produtos e serviços por tipo.
- `service-orders`: OS, itens, status e histórico.
- `finance`: contas a pagar, receber e movimentos de caixa.
- `dashboard`: indicadores e agenda operacional (stub inicial).

## 3) Frontend

- Layout base com sidebar e topo.
- Páginas do MVP alinhadas ao escopo inicial.
- Componentes reaproveitáveis para tabelas e cards.

## 4) Dados e integrações

- Prisma + PostgreSQL para dados transacionais.
- Redis para filas/cache (OCR e integrações futuras).
- Adaptadores externos planejados para:
  - consulta veicular por placa
  - consulta CNPJ/CPF
  - WhatsApp e e-mail
  - OCR de placa

## 5) Segurança e auditoria

- Estrutura inicial de auditoria na tabela `Audit`.
- Próxima etapa: interceptors globais para trilha de ações críticas.
- RBAC planejado com `Role`, `Permission` e tabela relacional.
