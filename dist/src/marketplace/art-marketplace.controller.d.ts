import { ArtMarketplaceService } from './art-marketplace.service';
import { CreateArtOrderDto, ArtOrderResponseDto } from './dto/art-order.dto';
export declare class ArtMarketplaceController {
    private artMarketplace;
    constructor(artMarketplace: ArtMarketplaceService);
    getAvailableArt(): Promise<({
        sourceAsset: {
            brand: string | null;
            model: string | null;
            qrCode: string | null;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        description: string;
        updatedAt: Date;
        tokenId: string | null;
        soldAt: Date | null;
        buyerWallet: string | null;
        title: string;
        artist: string;
        price: number;
        currency: string;
        category: import(".prisma/client").$Enums.ArtCategory;
        imageUrl: string | null;
        isAvailable: boolean;
        sourceAssetId: string | null;
        contractAddress: string | null;
    })[]>;
    getArtMarketplaceStats(): Promise<{
        totalAvailable: number;
        totalSold: number;
        totalRevenue: number;
        averagePrice: number;
        artByCategory: {
            category: import(".prisma/client").$Enums.ArtCategory;
            count: number;
        }[];
    }>;
    getArtOrderHistory(buyerId?: string): Promise<({
        artPiece: {
            tokenId: string | null;
            title: string;
            artist: string;
            imageUrl: string | null;
        };
        buyer: {
            name: string;
            email: string;
        } | null;
    } & {
        id: string;
        status: import(".prisma/client").$Enums.OrderStatus;
        createdAt: Date;
        completedAt: Date | null;
        buyerWallet: string;
        blockchainTxHash: string | null;
        price: number;
        buyerId: string | null;
        artPieceId: string;
        messageToArtist: string | null;
    })[]>;
    getArtDetails(artPieceId: string): Promise<{
        sourceAsset: {
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
        } | null;
        orders: ({
            buyer: {
                name: string;
                email: string;
            } | null;
        } & {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            createdAt: Date;
            completedAt: Date | null;
            buyerWallet: string;
            blockchainTxHash: string | null;
            price: number;
            buyerId: string | null;
            artPieceId: string;
            messageToArtist: string | null;
        })[];
    } & {
        id: string;
        createdAt: Date;
        description: string;
        updatedAt: Date;
        tokenId: string | null;
        soldAt: Date | null;
        buyerWallet: string | null;
        title: string;
        artist: string;
        price: number;
        currency: string;
        category: import(".prisma/client").$Enums.ArtCategory;
        imageUrl: string | null;
        isAvailable: boolean;
        sourceAssetId: string | null;
        contractAddress: string | null;
    }>;
    purchaseArt(dto: CreateArtOrderDto): Promise<ArtOrderResponseDto>;
}
