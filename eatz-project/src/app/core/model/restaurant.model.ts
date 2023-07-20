interface RestaurantMasterData{
    result:Array<Restaurant>;
}
interface Restaurant{
    name:string;
    cuisine:Array<string>;
    deliveryTimeInMins:number;
    open:boolean;
    cloudinaryImageId:string;
    price:Price;
    rating?: number;
}
interface Price{
    discountInfo:string;
    costForTwo:string;
}
export { Restaurant, RestaurantMasterData, Price}