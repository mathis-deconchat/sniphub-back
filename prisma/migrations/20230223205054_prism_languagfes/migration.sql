/*
  Warnings:

  - Added the required column `prism_language` to the `languages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "languages" ADD COLUMN     "prism_language" TEXT NOT NULL;
