/*
  Warnings:

  - Added the required column `text` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Made the column `caption` on table `Post` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "text" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "caption" SET NOT NULL,
ALTER COLUMN "image" SET NOT NULL;
