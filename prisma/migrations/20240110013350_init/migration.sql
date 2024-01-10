-- CreateTable
CREATE TABLE "Book" (
    "Id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "Description" TEXT,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("Id")
);
