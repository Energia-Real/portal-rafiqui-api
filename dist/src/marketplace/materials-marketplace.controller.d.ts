import { MaterialsMarketplaceService } from './materials-marketplace.service';
import { CreateMaterialOrderDto, MaterialOrderResponseDto, MaterialAvailabilityDto } from './dto/material-order.dto';
export declare class MaterialsMarketplaceController {
    private readonly materialsMarketplace;
    constructor(materialsMarketplace: MaterialsMarketplaceService);
    getAvailability(): Promise<MaterialAvailabilityDto[]>;
    createOrder(dto: CreateMaterialOrderDto): Promise<MaterialOrderResponseDto>;
    getOrdersByBuyer(buyerId: string): Promise<({
        buyer: {
            id: string;
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
        pricePerKg: number;
        buyerId: string | null;
        materialType: import(".prisma/client").$Enums.MaterialType;
        quantityKg: number;
        destination: import(".prisma/client").$Enums.MaterialDestination;
        destinationNotes: string | null;
        totalPrice: number;
    })[]>;
    getOrderById(orderId: string): Promise<{
        buyer: {
            id: string;
            name: string;
            email: string;
            walletAddress: string | null;
        } | null;
    } & {
        id: string;
        status: import(".prisma/client").$Enums.OrderStatus;
        createdAt: Date;
        completedAt: Date | null;
        buyerWallet: string;
        blockchainTxHash: string | null;
        pricePerKg: number;
        buyerId: string | null;
        materialType: import(".prisma/client").$Enums.MaterialType;
        quantityKg: number;
        destination: import(".prisma/client").$Enums.MaterialDestination;
        destinationNotes: string | null;
        totalPrice: number;
    }>;
}
