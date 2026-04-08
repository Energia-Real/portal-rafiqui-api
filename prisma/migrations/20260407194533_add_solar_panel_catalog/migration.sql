-- CreateEnum
CREATE TYPE "PanelTechnology" AS ENUM ('MONOCRYSTALLINE', 'POLYCRYSTALLINE', 'PERC', 'TOPCON', 'HJT', 'BIFACIAL', 'THIN_FILM_CDTE', 'THIN_FILM_CIGS', 'THIN_FILM_ASI', 'ORGANIC', 'PEROVSKITE');

-- CreateEnum
CREATE TYPE "PanelApplication" AS ENUM ('RESIDENTIAL', 'COMMERCIAL', 'INDUSTRIAL', 'UTILITY', 'MOBILE', 'BIPV');

-- CreateTable
CREATE TABLE "SolarPanelCatalog" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "technology" "PanelTechnology" NOT NULL,
    "powerWp" DOUBLE PRECISION NOT NULL,
    "efficiencyPercent" DOUBLE PRECISION NOT NULL,
    "vocV" DOUBLE PRECISION,
    "iscA" DOUBLE PRECISION,
    "vmppV" DOUBLE PRECISION,
    "imppA" DOUBLE PRECISION,
    "lengthMm" INTEGER,
    "widthMm" INTEGER,
    "thicknessMm" INTEGER,
    "weightKg" DOUBLE PRECISION,
    "cellCount" INTEGER,
    "tempCoefPmax" DOUBLE PRECISION,
    "operatingTempMin" INTEGER,
    "operatingTempMax" INTEGER,
    "productWarrantyYears" INTEGER,
    "performanceWarrantyYears" INTEGER,
    "performanceWarrantyPercent" DOUBLE PRECISION,
    "fireClass" TEXT,
    "certifications" TEXT,
    "application" "PanelApplication",
    "country" TEXT,
    "tier" INTEGER,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SolarPanelCatalog_pkey" PRIMARY KEY ("id")
);
