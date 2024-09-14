/*
  Warnings:

  - You are about to drop the column `created_at` on the `Notifications` table. All the data in the column will be lost.
  - You are about to drop the column `is_read` on the `Notifications` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Notifications" DROP COLUMN "created_at",
DROP COLUMN "is_read",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isRead" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "message" TEXT;
