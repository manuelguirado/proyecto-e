import { defineConfig } from "@prisma/config";
import type {PrismaConfig} from "prisma"
import path from "path";

export default defineConfig({
  schema: path.join(__dirname, "schema.prisma"),
  generator: {
    client: {
      output: "./generated/client",
    },
  },
  seed: {
    command: "tsx prisma/seed.ts"
  }
});