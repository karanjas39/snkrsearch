/*
  Warnings:

  - You are about to drop the column `dob` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "dob",
ADD COLUMN     "date_of_birth" TIMESTAMP(3),
ALTER COLUMN "gender" DROP NOT NULL,
ALTER COLUMN "gender" SET DEFAULT 'other',
ALTER COLUMN "otp" DROP DEFAULT;
