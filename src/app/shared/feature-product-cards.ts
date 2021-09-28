import { SafeHtml } from "@angular/platform-browser";

export interface FeatureProductCard{
    image:string|SafeHtml,
    name:string,
    price:number
}