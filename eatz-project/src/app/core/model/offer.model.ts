/**
 * This is the modal class for offers api
 */

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
    count: number; 
}
interface Price{
    discountPrice:number;
    costPrice:number;
}
export { OfferMasterData, Offer,Price } ;