-- CreateEnum
CREATE TYPE "Parking" AS ENUM ('NO', 'YES', 'SLEEPING');

-- CreateTable
CREATE TABLE "Code" (
    "code" TEXT NOT NULL,

    CONSTRAINT "Code_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "parking" "Parking" NOT NULL,
    "playlist" TEXT[],
    "notes" TEXT,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_code_fkey" FOREIGN KEY ("code") REFERENCES "Code"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
