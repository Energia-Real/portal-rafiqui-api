-- CreateTable
CREATE TABLE "CollectionRequestPanel" (
    "id" TEXT NOT NULL,
    "collectionRequestId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "catalogId" TEXT,
    "isCustom" BOOLEAN NOT NULL DEFAULT false,
    "customBrand" TEXT,
    "customModel" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CollectionRequestPanel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CollectionRequestPanel" ADD CONSTRAINT "CollectionRequestPanel_collectionRequestId_fkey" FOREIGN KEY ("collectionRequestId") REFERENCES "CollectionRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollectionRequestPanel" ADD CONSTRAINT "CollectionRequestPanel_catalogId_fkey" FOREIGN KEY ("catalogId") REFERENCES "SolarPanelCatalog"("id") ON DELETE SET NULL ON UPDATE CASCADE;
