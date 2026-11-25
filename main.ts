// The Agent's Uh-Oh — one word an agent says when it has no idea what to do.
//
// The word: "recalculating".
// The GPS voice, mid-task: the machine has lost the route and says so out loud.
// It is a genuine spoken reaction to being lost, it lands at a glance, and it is
// not the first obvious word anyone types. One word, nothing attached.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "recalculating";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
