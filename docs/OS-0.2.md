# Ramptium OS 0.2 — Read-only portfolio sandbox

## Implemented
- Separate /workspace.html entry point, retaining the original corporate experience.
- Synthetic multi-currency holdings and illustrative FX conversion to USD.
- Portfolio value, allocation and simple concentration visibility.
- Accessible headings, data table, mobile layout, conspicuous sandbox disclosure.

## Explicit limitations
- No real financial data, historical performance, market API or price feeds.
- No authentication, tenancy, persisted portfolios, client onboarding, brokerage, advice, custody, execution or payment functions.
- Values are illustrative fixtures only. This page is not an authenticated investor account.
- No claims of licensing, live portfolio tracking or production certification.

## Next prerequisites
- CI build, dependency security review, rendered mobile/desktop verification.
- Jurisdiction and data-provider due diligence before using real data.
- Identity and organization authorization design, server-side isolation tests and auditable data provenance before any real customer data.

## Acceptance gate
Run npm install && npm run build. Open /workspace.html, verify allocation totals and labels, keyboard navigation, narrow viewports, and unchanged corporate homepage. Only then seek approval for persistent account architecture.
