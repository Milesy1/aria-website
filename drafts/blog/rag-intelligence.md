---
status: draft
published: false
title: "Knowledge assistants that hold 9.1/10"
suggestedReadTime: "6 min read"
# Not published. Not in the blog index or RSS. Set a date when this is reviewed.
# Figures below are copied from the live RAG section. Do not add numbers that are not already published.
---

DRAFT — for review only. Do not publish until the framing and every figure have been checked.

This is the RAG system already described on the site: multi-tenant knowledge assistants, hybrid retrieval, and a golden-dataset gate in CI. It is not a new deployment and it does not introduce new metrics.

## Where generic RAG fails

A generic retrieval pipeline hallucinates on edge cases and retrieves the wrong chunk under load. Keyword search misses paraphrases. Dense search misses the exact name that has to match. Neither failure shows up in a demo on a tidy corpus.

The assistants on the site use hybrid BM25 and dense retrieval with weighted reciprocal rank fusion. BM25 keeps the exact terms. Dense retrieval covers the paraphrase. The fusion is weighted, not a default library setting left untouched.

## What is allowed to ship

Every release is gated in GitHub Actions against a golden dataset of 500+ questions. The minimum is 9.0/10 on RAGAS. A regression blocks the deploy.

Custom LLM-as-judge evaluators score refusal behaviour and machine-consumable output separately from the RAGAS average. The published retrieval accuracy is 9.1/10. Extractability on clear factual queries is 9.4/10.

Those are the published scores. This draft does not claim a higher number, a larger golden set, or a gate that has not already been described.

## What is running

The published operating figures are:

- 200+ active users, across 2 tenants
- Median latency under 3 seconds (p50)
- 50K+ vector chunks on Qdrant
- About 60% first-contact resolution on consultant queries
- 15–20 senior consultant hours freed per week

Per-tenant Qdrant collections keep one tenant's index off another's. Ingestion is incremental, from S3. Tracing is three-tier in Langfuse.

A public reference implementation of the pipeline is at github.com/Milesy1/miles-rag. The repository is the reference. It is not a claim that every tenant's corpus is in that repo.

## What this does not say

The 9.1/10 average is RAGAS on the published evaluation, not a promise that every future question scores 9.1. The 9.0 floor is the release rule: below it, the deploy does not go out. First-contact resolution is about 60%, which means a large share of queries still need a person.

That is the system as published. Production scale beyond these figures is a later post, after the numbers exist.
