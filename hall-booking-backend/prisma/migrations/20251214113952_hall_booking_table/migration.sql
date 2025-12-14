-- CreateTable
CREATE TABLE "booking" (
    "id" SERIAL NOT NULL,
    "applicantName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "hallName" TEXT NOT NULL,
    "startDate" DATE NOT NULL,
    "endDate" DATE NOT NULL,
    "bookingType" TEXT NOT NULL,
    "timeSlot" TEXT NOT NULL,
    "rent" INTEGER NOT NULL,
    "additionalCharge" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "remark" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "booking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "booking_email_key" ON "booking"("email");

-- CreateIndex
CREATE UNIQUE INDEX "booking_mobile_key" ON "booking"("mobile");
