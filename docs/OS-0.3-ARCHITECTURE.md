# Ramptium OS 0.3 — Proposed identity and portfolio persistence architecture

Status: design only. Implementation must wait until 0.2 quality and browser certification pass.

## Identity and tenancy
- Identity provider with MFA and verified email.
- Organizations own portfolios. Memberships reference user identities and immutable organization IDs.
- Authorization enforced on server and database for every read/write; never trust a browser-selected organization ID.
- Roles: owner, administrator, analyst, viewer. No implicit cross-organization access.
- Invitation acceptance is single-use, expiring, auditable, and bound to the intended identity.

## Data boundaries
- organizations(id, legal_name, jurisdiction, created_at)
- memberships(organization_id, user_id, role, status)
- portfolios(id, organization_id, base_currency, name)
- instruments(id, canonical_identifier, asset_class, currency)
- holdings(id, portfolio_id, instrument_id, quantity, as_of, source_id)
- valuations(id, instrument_id, price, currency, as_of, source_id)
- fx_rates(id, base_currency, quote_currency, rate, as_of, source_id)
- data_sources(id, vendor, license_scope, observed_at)
- audit_events(id, organization_id, actor_id, action, target_id, occurred_at, immutable_payload)

## Financial integrity
- Use fixed-precision decimal arithmetic for monetary values; never JavaScript floats for persisted balances.
- Version and timestamp prices, rates, valuation methods, corporate actions, and provenance.
- Define portfolio accounting semantics before adding transaction ledgers or performance metrics.
- Distinguish estimated valuations from verified custody balances.

## Regulatory boundary
- No custody, execution, brokerage, client-money movement, or regulated advice without jurisdictional counsel and authorized partners.
- Validate data licensing and country-specific privacy/residency requirements before ingesting customer data.

## Acceptance criteria for implementation phase
- Tenant isolation and negative authorization tests.
- Membership/invitation lifecycle tests.
- Database constraints and least-privilege access.
- Audit and provenance tests.
- Threat model, secret management, backup and recovery design.
- No production promotion without deployed evidence and security review.
