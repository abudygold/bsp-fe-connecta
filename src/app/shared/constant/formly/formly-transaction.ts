import { applyEach, PathKind, required, SchemaPathTree } from '@angular/forms/signals';

type BOOKING_STATUS = 'draft' | 'confirmed' | 'cancelled' | 'completed';

export interface ITransactionTraveler {
	tripTransactionId: string;
	travelerId: string;
}

export interface ITransactionForm {
	tripPackageId: string;
	totalParticipant: number;
	pricePerPerson: number;
	subtotal: number;
	groupDiscount: number;
	additionalFee: number;
	marketingFee: number;
	totalAmount: number;
	totalPaid: number;
	note: string;
	sequenceNumber: number;
	bookingStatus: BOOKING_STATUS;
	travelers: ITransactionTraveler[];
}

export const TRANSACTION_DEFAULT_STATE: ITransactionForm = {
	tripPackageId: '',
	totalParticipant: 0,
	pricePerPerson: 0,
	subtotal: 0,
	groupDiscount: 0,
	additionalFee: 0,
	marketingFee: 0,
	totalAmount: 0,
	totalPaid: 0,
	note: '',
	sequenceNumber: 0,
	bookingStatus: 'draft',
	travelers: [],
};

export const TRANSACTION_EDIT_STATE = (data: any) => ({
	tripPackageId: data?.tripPackageId || '',
	totalParticipant: data?.totalParticipant || 0,
	pricePerPerson: Number(data?.pricePerPerson) || 0,
	subtotal: Number(data?.subtotal) || 0,
	groupDiscount: Number(data?.groupDiscount) || 0,
	additionalFee: Number(data?.additionalFee) || 0,
	marketingFee: Number(data?.marketingFee) || 0,
	totalAmount: Number(data?.totalAmount) || 0,
	totalPaid: Number(data?.totalPaid) || 0,
	bookingStatus: data?.bookingStatus || 'draft',
	note: data?.note || '',
	travelers: data?.travelers || [],
});

export const TRANSACTION_SCHEMA_FORM = (
	schemaPath: SchemaPathTree<ITransactionForm, PathKind.Root>,
) => {
	required(schemaPath.tripPackageId, { message: 'Trip Package is required' });
	required(schemaPath.pricePerPerson, { message: 'Trip Price is required' });
	required(schemaPath.bookingStatus, { message: 'Booking Status is required' });
	applyEach(schemaPath.travelers, (itemPath) => {
		required(itemPath.travelerId, { message: 'Traveler is required' });
	});
};
