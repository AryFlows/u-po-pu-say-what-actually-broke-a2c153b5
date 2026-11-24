# Say What Actually Broke

[![make.fun](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/AryFlows/u-po-pu-say-what-actually-broke-a2c153b5/rank.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/AryFlows/u-po-pu-say-what-actually-broke-a2c153b5/reward.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)

One line of software error copy that tells the user the brutal truth about
what went wrong — and makes them laugh on the way.

## The entry (118 characters)

> Save failed: the database crashed mid-write and took your last hour with it. There is no backup. It sends its regards.

The failure is named in plain words (database crashed mid-write, no backup,
work lost), the twist lands in the last sentence, and it would survive being
pasted into a real error dialog.

## Run

```sh
node main.ts
```

Writes `entry.txt` to `$MAKEFUN_OUTPUT_DIR` (or `/output`).

## Gate

`entry.txt` is UTF-8, a single line, 119 characters (1–200), not only
whitespace — verified by running `main.ts` locally (118 characters).
