/*
  Warnings:

  - You are about to drop the `snippets_tags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "snippets_tags" DROP CONSTRAINT "snippets_tags_snippetId_fkey";

-- DropForeignKey
ALTER TABLE "snippets_tags" DROP CONSTRAINT "snippets_tags_tagId_fkey";

-- DropTable
DROP TABLE "snippets_tags";

-- CreateTable
CREATE TABLE "_snippetsTotags" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_snippetsTotags_AB_unique" ON "_snippetsTotags"("A", "B");

-- CreateIndex
CREATE INDEX "_snippetsTotags_B_index" ON "_snippetsTotags"("B");

-- AddForeignKey
ALTER TABLE "_snippetsTotags" ADD CONSTRAINT "_snippetsTotags_A_fkey" FOREIGN KEY ("A") REFERENCES "snippets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_snippetsTotags" ADD CONSTRAINT "_snippetsTotags_B_fkey" FOREIGN KEY ("B") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
