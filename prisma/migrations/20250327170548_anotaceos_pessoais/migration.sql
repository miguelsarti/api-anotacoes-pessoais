/*
  Warnings:

  - You are about to drop the column `concluida` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `tasks` table. All the data in the column will be lost.
  - Added the required column `atualizadaEM` to the `tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `conteudo` to the `tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titulo` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tasks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "favorita" BOOLEAN NOT NULL DEFAULT false,
    "cor" TEXT,
    "criadaEM" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadaEM" DATETIME NOT NULL
);
INSERT INTO "new_tasks" ("criadaEM", "id") SELECT "criadaEM", "id" FROM "tasks";
DROP TABLE "tasks";
ALTER TABLE "new_tasks" RENAME TO "tasks";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
