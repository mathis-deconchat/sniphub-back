/*
  Warnings:

  - Added the required column `description` to the `snippets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "snippets" ADD COLUMN     "description" TEXT NOT NULL;
