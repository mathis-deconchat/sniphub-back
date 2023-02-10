/*
  Warnings:

  - You are about to drop the column `categoriesId` on the `snippets` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "snippets" DROP CONSTRAINT "snippets_categoriesId_fkey";

-- DropForeignKey
ALTER TABLE "snippets_likes" DROP CONSTRAINT "snippets_likes_snippetId_fkey";

-- AlterTable
ALTER TABLE "snippets" DROP COLUMN "categoriesId";
