export interface IProduct {
    id: number;
    name: string;
    code: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;
    // CalculateDiscount(percentage: number): number;
}
