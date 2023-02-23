/*
  Warnings:

  - You are about to drop the column `language` on the `snippets` table. All the data in the column will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `languageId` to the `snippets` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "snippets" DROP CONSTRAINT "snippets_userId_fkey";

-- DropForeignKey
ALTER TABLE "snippets_likes" DROP CONSTRAINT "snippets_likes_userId_fkey";

-- AlterTable
ALTER TABLE "snippets" DROP COLUMN "language",
ADD COLUMN     "languageId" INTEGER NOT NULL,
ADD COLUMN     "prefix_vscode" TEXT;

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "languages" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "iconName" TEXT NOT NULL,

    CONSTRAINT "languages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "snippets_tags" (
    "id" SERIAL NOT NULL,
    "snippetId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "snippets_tags_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "languages_name_key" ON "languages"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tags_name_key" ON "tags"("name");

-- AddForeignKey
ALTER TABLE "snippets" ADD CONSTRAINT "snippets_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "snippets_tags" ADD CONSTRAINT "snippets_tags_snippetId_fkey" FOREIGN KEY ("snippetId") REFERENCES "snippets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "snippets_tags" ADD CONSTRAINT "snippets_tags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
