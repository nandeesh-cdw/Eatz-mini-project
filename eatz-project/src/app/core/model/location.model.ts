/**
 * This is the modal class for the location api
 */

interface LocationMasterData{
    country_code: string;
    country_name: string | null;
    city: string;
    postal: string;
    lattitude: number;
    longitude: number;
    IPv4:string;
    state?: string;

}
export {LocationMasterData};