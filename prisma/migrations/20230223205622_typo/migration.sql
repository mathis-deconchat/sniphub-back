/*
  Warnings:

  - You are about to drop the column `prism_language` on the `languages` table. All the data in the column will be lost.
  - Added the required column `prismLanguage` to the `languages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "languages" DROP COLUMN "prism_language",
ADD COLUMN     "prismLanguage" TEXT NOT NULL;
