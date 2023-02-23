/*
  Warnings:

  - You are about to drop the `snippets_categories` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `snippets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "snippets" ADD COLUMN     "userId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "snippets_categories";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "s3Sub" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_s3Sub_key" ON "users"("s3Sub");

-- AddForeignKey
ALTER TABLE "snippets" ADD CONSTRAINT "snippets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "snippets_likes" ADD CONSTRAINT "snippets_likes_snippetId_fkey" FOREIGN KEY ("snippetId") REFERENCES "snippets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "snippets_likes" ADD CONSTRAINT "snippets_likes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
