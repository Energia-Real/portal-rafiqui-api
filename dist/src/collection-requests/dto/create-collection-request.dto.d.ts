import { PanelEntryDto } from './panel-entry.dto';
export declare class CreateCollectionRequestDto {
    donorId?: string;
    pickupAddress: string;
    street: string;
    exteriorNumber: string;
    interiorNumber?: string;
    colonia: string;
    municipio: string;
    estado: string;
    city: string;
    postalCode: string;
    estimatedCount: number;
    panelType: 'residential' | 'industrial';
    contactName: string;
    contactPhone: string;
    notes?: string;
    panels?: PanelEntryDto[];
    partnerId?: string;
    wantsToBePartner?: boolean;
}
