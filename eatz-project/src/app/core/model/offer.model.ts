interface OfferMasterData{
    result:Array<Offer>
}
interface Offer{
    restaurant: string;
    name: string;
    deliveryTimeInMins: number;
    available: boolean;
    cloudinaryImageId: string;
    price: Price;
}
interface Price{
    discountPrice:number;
    costPrice:number;
}
export { OfferMasterData, Offer,Price } ;