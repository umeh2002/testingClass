-- CreateTable
CREATE TABLE "authModel" (
    "id" TEXT NOT NULL,
    "student" TEXT NOT NULL,
    "createdAT" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "authModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "classModel" (
    "id" TEXT NOT NULL,
    "className" TEXT NOT NULL,
    "studentID" TEXT NOT NULL,
    "createdAT" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "classModel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "classModel" ADD CONSTRAINT "classModel_studentID_fkey" FOREIGN KEY ("studentID") REFERENCES "authModel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
