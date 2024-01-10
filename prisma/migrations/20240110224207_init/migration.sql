/*
  Warnings:

  - The primary key for the `Book` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Description` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `Id` on the `Book` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Book" DROP CONSTRAINT "Book_pkey",
DROP COLUMN "Description",
DROP COLUMN "Id",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Book_pkey" PRIMARY KEY ("id");
