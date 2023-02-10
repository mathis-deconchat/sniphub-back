/*
  Warnings:

  - You are about to drop the column `userId` on the `snippets` table. All the data in the column will be lost.
  - You are about to drop the column `snippetId` on the `snippets_categories` table. All the data in the column will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "snippets" DROP CONSTRAINT "snippets_userId_fkey";

-- DropForeignKey
ALTER TABLE "snippets_likes" DROP CONSTRAINT "snippets_likes_userId_fkey";

-- AlterTable
ALTER TABLE "snippets" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "snippets_categories" DROP COLUMN "snippetId";

-- DropTable
DROP TABLE "users";
