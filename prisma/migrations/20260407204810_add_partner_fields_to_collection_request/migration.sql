-- AlterTable
ALTER TABLE "CollectionRequest" ADD COLUMN     "partnerId" TEXT,
ADD COLUMN     "wantsToBePartner" BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE "CollectionRequest" ADD CONSTRAINT "CollectionRequest_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "Partner"("id") ON DELETE SET NULL ON UPDATE CASCADE;
