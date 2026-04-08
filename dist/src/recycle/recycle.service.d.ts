import { PrismaService } from '../prisma/prisma.service';
import { BlockchainService } from '../blockchain/blockchain.service';
import { MaterialsBlockchainService } from '../blockchain/materials-blockchain.service';
import { ProcessRecycleDto, RecycleResponseDto, MaterialStockDto } from './dto/recycle.dto';
export declare class RecycleService {
    private prisma;
    private blockchainService;
    private materialsBlockchainService;
    private readonly logger;
    constructor(prisma: PrismaService, blockchainService: BlockchainService, materialsBlockchainService: MaterialsBlockchainService);
    processRecycle(dto: ProcessRecycleDto): Promise<RecycleResponseDto>;
    private upsertMaterialStock;
    getMaterialStock(): Promise<MaterialStockDto[]>;
    getTreasuryBalances(): Promise<import("../blockchain/materials-blockchain.service").MaterialBalances>;
    getWalletBalances(walletAddress: string): Promise<import("../blockchain/materials-blockchain.service").MaterialBalances>;
    findAssetForRecycle(qrCode: string): Promise<{
        asset: {
            inspection: {
                id: string;
                notes: string | null;
                createdAt: Date;
                inspectorId: string;
                measuredVoltage: number;
                assetId: string;
                measuredAmps: number;
                physicalCondition: string;
                photoUrl: string | null;
                aiRecommendation: import(".prisma/client").$Enums.InspectionResult;
            } | null;
            recycleRecord: {
                id: string;
                createdAt: Date;
                blockchainTxHash: string | null;
                assetId: string;
                operatorId: string;
                panelWeightKg: number;
                aluminumKg: number;
                glassKg: number;
                siliconKg: number;
                copperKg: number;
                materialsTxHash: string | null;
                ipfsHash: string | null;
            } | null;
        } & {
            id: string;
            status: import(".prisma/client").$Enums.AssetStatus;
            createdAt: Date;
            brand: string | null;
            model: string | null;
            collectionRequestId: string | null;
            nfcTagId: string | null;
            qrCode: string | null;
            inspectorId: string | null;
            inspectionStartedAt: Date | null;
            inspectedAt: Date | null;
            refurbishedById: string | null;
            refurbishedAt: Date | null;
            refurbishmentNotes: string | null;
            measuredPowerWatts: number | null;
            measuredVoltage: number | null;
            capacityRetainedPercent: number | null;
            healthPercentage: number | null;
            dimensionLength: number | null;
            dimensionWidth: number | null;
            dimensionHeight: number | null;
            tokenId: string | null;
            soldAt: Date | null;
            buyerWallet: string | null;
        };
        canRecycle: boolean;
        reason: string;
    } | null>;
    getRecycleHistory(limit?: number): Promise<({
        asset: {
            id: string;
            brand: string | null;
            model: string | null;
            qrCode: string | null;
        };
        operator: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        createdAt: Date;
        blockchainTxHash: string | null;
        assetId: string;
        operatorId: string;
        panelWeightKg: number;
        aluminumKg: number;
        glassKg: number;
        siliconKg: number;
        copperKg: number;
        materialsTxHash: string | null;
        ipfsHash: string | null;
    })[]>;
}
