export type Phone = {
    number: string;
    message: string;
};

export type Social = {
    instagram: string;
    facebook: string;
    tiktok: string;
    whatsapp: Phone;
};

export interface Product {
    id: string;
    name: string;
    category: 'classic' | 'innovator' | 'service';
    tags: ('FOTOS' | 'VIDEO' | 'IA' | 'INNOVACION' | 'SERVICIOS')[];
    shortDescription: string;
    description: string;
    seoTitle?: string;
    seoDescription?: string;
    howItWorks?: {
        step1: string;
        step2: string;
        step3: string;
    };
    specs?: {
        space: string;
        power: string;
        capacity: string;
        setupTime: string;
    };
    image: string;
    features?: string[];
}

export interface CityData {
    id: string;
    name: string;
    slug: string;
    title: string;
    description: string;
    heroImage: string;
}
