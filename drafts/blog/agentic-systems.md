---
status: draft
published: false
title: "Natural language over a live ERP, with the write path closed"
suggestedReadTime: "6 min read"
# Not published. Not in the blog index or RSS. Set a date when this is reviewed.
# Figures below are copied from the live Agentic Systems section. Do not add numbers that are not already published.
---

DRAFT — for review only. Do not publish until the framing and every figure have been checked.

Live ERP is the primary example of this layer, not the only shape it can take. The same constraint applies to any system of record: a read can be immediate, and a write cannot happen unless a person has approved it.

## The write path is not a prompt

The ARIA middleware enforces approval queues, idempotency, and audit logging at the infrastructure layer. Governance is architectural. It is not a sentence in the system prompt.

A prompt injection does not bypass a mandatory approval queue, because the queue is not implemented as a prompt. Reads are instant. Every write goes through the queue. The published average latency on that queue is under 2 minutes.

## What the layer can reach

The published surface is 90+ tools across the full AP/AR cycle: invoices, receipts, payments, journals, and credit notes, reached in natural language from Slack.

Before a contact or account is created, a semantic MDM check screens existing records. It uses fuzzy name matching, address normalisation, and cross-field similarity, which catches duplicates that an exact match misses.

New client onboarding, on the published account, moved from multi-day to same-day. That figure is about onboarding time. It is not a claim about every other workflow.

## How a session is judged

Every tool invocation is traced in Langfuse at three levels: the message, the tool execution, and the downstream API call. The published volume is 50–100 tool invocations a day.

Trajectory evaluation in CI uses three judges — authorisation, action correctness, and reversibility — over 103 audited production sessions. The published result of that audit is 0 gate bypasses, 0.0% hallucination, and 100% judge-human agreement.

Those session counts and rates are the ones already on the site. This draft does not add tenants, tools, or a second audit.

## What this does not say

Natural language over the ERP is not unsupervised posting. The middleware is the control. If a later engagement removes the approval queue, it is a different system, and these figures no longer apply.

ERP is one class of live system. Anything else still has to pass the same gate: no write without a person, and a trace of the write that was approved.
