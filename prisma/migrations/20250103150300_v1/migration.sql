/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Search` table. All the data in the column will be lost.
  - You are about to drop the `UserSearch` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Search` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Search` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserSearch" DROP CONSTRAINT "UserSearch_searchId_fkey";

-- DropForeignKey
ALTER TABLE "UserSearch" DROP CONSTRAINT "UserSearch_userId_fkey";

-- DropIndex
DROP INDEX "Search_brand_model_key";

-- AlterTable
ALTER TABLE "Search" DROP COLUMN "updatedAt",
ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "userId" INTEGER,
ALTER COLUMN "searchCount" SET DEFAULT 0;

-- DropTable
DROP TABLE "UserSearch";

-- CreateIndex
CREATE UNIQUE INDEX "Search_slug_key" ON "Search"("slug");

-- AddForeignKey
ALTER TABLE "Search" ADD CONSTRAINT "Search_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
