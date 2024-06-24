export default class PropertyInfoDto {
    public property_name: string;
    public location: string;
    public tin: string;
    public logo: string;

    constructor(property_name: string, location: string, tin: string, logo: string) {
        this.property_name = property_name;
        this.location = location;
        this.tin = tin;
        this.logo = logo;
    }
}