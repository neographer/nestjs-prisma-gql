-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "place" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,

    PRIMARY KEY ("id")
);
