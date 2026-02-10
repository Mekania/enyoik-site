import type { Product, CityData } from './types';

export const PRODUCTS: Product[] = [
    // --- CLÁSICAS (FOTOS + IA) ---
    {
        id: 'wally',
        name: 'Wally',
        category: 'classic',
        tags: ['FOTOS', 'IA'],
        shortDescription: 'Diseño compacto y elegante en madera.',
        description: 'Nuestra cabina Wally combina un diseño rústico y elegante con la última tecnología de Inteligencia Artificial. Perfecta para bodas campestres o eventos que buscan calidez.',
        seoTitle: 'Alquiler Cabina de Fotos Madera Vintage',
        seoDescription: 'Wally es nuestra cabina de fotos estilo vintage en madera. Ideal para bodas y eventos rústicos en Colombia. Impresión ilimitada y props divertidos.',
        howItWorks: {
            step1: 'Toca la pantalla táctil de madera para iniciar.',
            step2: 'Posa solo o con amigos mientras el aro de luz te ilumina.',
            step3: 'Recibe tu foto impresa en 10 segundos y descárgala al celular.'
        },
        specs: {
            space: '2m x 2m',
            power: 'Toma estándar 110v',
            capacity: '1-6 personas',
            setupTime: '45 minutos'
        },
        image: '/images/Wally.jpg',
        features: ['Impresión ilimitada', 'Diseño en madera', 'Filtros IA', 'Props temáticos']
    },
    {
        id: 'kuva-ring',
        name: 'Kuva Ring',
        category: 'classic',
        tags: ['FOTOS', 'IA'],
        shortDescription: 'Iluminación perfecta con anillo LED.',
        description: 'Diseñada para que todos luzcan increíbles con su potente anillo de luz LED y embellecimiento facial automático.',
        seoTitle: 'Alquiler Cabina de Fotos con Aro de Luz LED',
        seoDescription: 'Kuva Ring garantiza la mejor iluminación para tus invitados. Fotos, GIFs y Boomerangs con calidad de estudio para tu fiesta.',
        howItWorks: {
            step1: 'El aro de luz RGB atrae a tus invitados.',
            step2: 'Captura fotos, GIFs o Boomerangs.',
            step3: 'Comparte al instante vía AirDrop, QR o Email.'
        },
        specs: {
            space: '1.5m x 1.5m',
            power: 'Toma estándar 110v',
            capacity: '1-5 personas',
            setupTime: '30 minutos'
        },
        image: '/images/KuvaRing.jpg',
        features: ['Aro de luz profesional', 'GIFs y Boomerangs', 'Beauty Filter IA']
    },
    {
        id: 'cabina-extreme',
        name: 'Cabina Extreme',
        category: 'classic',
        tags: ['FOTOS', 'IA'],
        shortDescription: 'Experiencia cerrada inmersiva.',
        description: 'Una experiencia cerrada donde puedes gritar, saltar y disfrutar con privacidad. La clásica cabina de fotos reinventada.',
        seoTitle: 'Alquiler Cabina de Fotos Cerrada (Fotocabina)',
        seoDescription: 'Privacidad total para las fotos más divertidas. Nuestra Cabina Extreme permite a tus invitados desinhibirse y llevarse el mejor recuerdo.',
        image: '/images/Extreme.jpg',
        features: ['Privacidad total', 'Impresión instantánea', 'Personalización total']
    },
    {
        id: 'cabina-soft',
        name: 'Cabina Soft',
        category: 'classic',
        tags: ['FOTOS', 'IA'],
        shortDescription: 'Iluminación de estudio.',
        description: 'Configuración profesional con sombrilla difusora para una iluminación suave de estudio.',
        seoTitle: 'Estudio Fotográfico Portátil para Eventos',
        seoDescription: 'Llevamos un estudio de fotografía profesional a tu evento. La Cabina Soft ofrece la iluminación más favorecedora del mercado.',
        image: '/images/Soft.jpg',
        features: ['Iluminación de estudio', 'Calidad DSLR', 'Operador profesional']
    },

    // --- ESPEJOS (FOTOS + VIDEO + IA) ---
    {
        id: 'mirror-black',
        name: 'Mirror Black',
        category: 'classic',
        tags: ['FOTOS', 'VIDEO', 'IA'],
        shortDescription: 'Elegancia moderna con neon.',
        description: 'Un espejo interactivo táctil con un marco negro sofisticado e iluminación LED RGB perimetral.',
        seoTitle: 'Alquiler Espejo Mágico Fotográfico (Magic Mirror)',
        seoDescription: 'El Espejo Mágico Black combina elegancia y tecnología. Tus invitados se ven de cuerpo completo y el espejo les habla e interactúa.',
        howItWorks: {
            step1: 'El espejo te invita a acercarte con animaciones.',
            step2: 'Te ves de cuerpo completo mientras posas.',
            step3: 'Puedes firmar la foto en la pantalla táctil.'
        },
        specs: {
            space: '2m x 2m',
            power: 'Toma estándar 110v',
            capacity: 'Grupos grandes (8+)',
            setupTime: '60 minutos'
        },
        image: '/images/MirrorBlack.jpg',
        features: ['Interacción Táctil', 'Animaciones Premium', 'Firma sobre el cristal']
    },
    {
        id: 'mirror-lux',
        name: 'Mirror Lux',
        category: 'classic',
        tags: ['FOTOS', 'VIDEO', 'IA'],
        shortDescription: 'El clásico marco dorado.',
        description: 'Nuestro Espejo Mágico con un imponente marco dorado barroco. La pieza central perfecta para bodas elegantes.',
        seoTitle: 'Espejo Mágico Marco Dorado para Bodas',
        seoDescription: 'Añade un toque de lujo a tu boda con nuestro Mirror Lux. Marco dorado barroco, alfombra roja y separadores de fila incluidos.',
        image: '/images/MirrorLux.jpg',
        features: ['Marco Dorado Barroco', 'Alfombra Roja', 'Experiencia VIP']
    },
    {
        id: 'mirror-glam',
        name: 'Mirror Glam',
        category: 'classic',
        tags: ['FOTOS', 'VIDEO', 'IA'],
        shortDescription: 'Estilo Hollywood.',
        description: 'Marco iluminado con bombillas estilo camerino para un toque de estrella de cine.',
        seoTitle: 'Espejo Mágico Estilo Hollywood con Bombillas',
        seoDescription: 'Haz que tus invitados se sientan celebridades con el Mirror Glam. Iluminación tipo camerino ideal para eventos de moda y fiestas.',
        image: '/images/MirrorLux.jpg', // Assuming separate image not available yet, using Lux as placeholder or check file system
        features: ['Iluminación Camerino', 'Estética Hollywood', 'Fotos de cuerpo completo']
    },

    // --- INNOVACIÓN (VIDEO) ---
    {
        id: 'plataforma-360',
        name: 'Plataforma 360',
        category: 'innovator',
        tags: ['VIDEO'],
        shortDescription: 'Videos en cámara lenta.',
        description: 'Súbete a la plataforma y deja que la cámara gire a tu alrededor capturando videos increíbles en Slow Motion.',
        seoTitle: 'Alquiler Plataforma 360 Video Booth Colombia',
        seoDescription: 'La tendencia #1 en eventos. Videos 360 grados en cámara lenta (Slow Motion) con efectos editados al instante para Instagram y TikTok.',
        howItWorks: {
            step1: 'Súbete a la plataforma con tus amigos (hasta 4 pax).',
            step2: 'Baila mientras la cámara gira a tu alrededor.',
            step3: 'Escanea el código QR y descarga tu video editado.'
        },
        specs: {
            space: '3m x 3m (Indispensable)',
            power: 'Toma estándar 110v',
            capacity: '1-4 personas por turno',
            setupTime: '60 minutos'
        },
        image: '/images/Plataforma360.jpg',
        features: ['Cámara Lenta', 'Efectos Digitales', 'Música Personalizada']
    },
    {
        id: 'glambot',
        name: 'Glambot',
        category: 'innovator',
        tags: ['VIDEO'],
        shortDescription: 'Brazo robótico de cine.',
        description: 'Movimientos de cámara precisos y rápidos para videos de alta gama con estética cinematográfica tipo Red Carpet.',
        seoTitle: 'Alquiler Glambot Brazo Robótico Colombia',
        seoDescription: 'Traemos la Alfombra Roja a tu evento. El Glambot captura videos de alta velocidad con movimientos robóticos precisos.',
        howItWorks: {
            step1: 'Posiciónate frente a la cámara de cine.',
            step2: 'El brazo robótico hace un movimiento rápido.',
            step3: 'El resultado es un video épico en slow motion.'
        },
        specs: {
            space: '4m x 3m',
            power: 'Toma dedicada 110v',
            capacity: '1-2 personas (Foco individual)',
            setupTime: '90 minutos'
        },
        image: '/images/Glambot.jpg',
        features: ['Brazo Robótico', 'Calidad Cine', 'High Speed Camera']
    },
    {
        id: '360-aereo',
        name: '360 Aéreo',
        category: 'innovator',
        tags: ['INNOVACION', 'VIDEO'],
        shortDescription: 'Giro superior sin plataforma.',
        description: 'La estructura superior permite que la cámara gire alrededor de grupos grandes sin riesgo de caídas al no haber plataforma.',
        seoTitle: 'Alquiler 360 Aéreo (Overhead 360) para Eventos',
        seoDescription: 'Sin plataforma en el piso. El 360 Aéreo es más seguro y permite grupos más grandes. Ideal para activaciones de marca masivas.',
        image: '/images/innovators/360_aereo.jpg',
        features: ['Sin Plataforma', 'Mayor Seguridad', 'Grupos Grandes']
    },
    {
        id: '180-aereo',
        name: '180 Aéreo',
        category: 'innovator',
        tags: ['INNOVACION', 'VIDEO'],
        shortDescription: 'Arcos de video dinámicos.',
        description: 'Perfecto para fondos estáticos o photocalls. La cámara hace un recorrido de 180 grados creando un efecto Matrix.',
        seoTitle: 'Cámara 180 Grados (Bullet Time) para Photocalls',
        seoDescription: 'Dale vida a tu Photocall estático. El sistema 180 crea arcos de video dinámicos perfectos para fondos de marca.',
        image: '/images/innovators/180_aereo.jpg',
        features: ['Efecto Matrix', 'Ideal para Photocalls', 'Video Dinámico']
    },
    {
        id: 'vogue-booth',
        name: 'Vogue Booth',
        category: 'innovator',
        tags: ['INNOVACION', 'FOTOS', 'VIDEO'],
        shortDescription: 'Tunel de luz futurista.',
        description: 'Un túnel de luces LED neon que crea un fondo psicodélico y moderno para videos impactantes.',
        seoTitle: 'Alquiler Cabina Vogue Booth (Túnel Neon)',
        seoDescription: 'Una experiencia futurista. Tus invitados entran a un túnel de luz LED animado para crear videos musicales estilo videoclip.',
        image: '/images/innovators/vogue_booth.jpg',
        features: ['Túnel LED', 'Video Musical', 'Fondo Psicodélico']
    },
    {
        id: 'cabina-telefonica',
        name: 'Cabina Telefónica',
        category: 'innovator',
        tags: ['INNOVACION'],
        shortDescription: 'Audio Guestbook Retro.',
        description: 'Tus invitados dejan mensajes de voz en un teléfono estilo vintage. Una alternativa emotiva al libro de firmas tradicional.',
        seoTitle: 'Alquiler Audio Guestbook (Teléfono de Firmas)',
        seoDescription: 'Recopila las voces y deseos de tus invitados. Un teléfono retro que graba mensajes de audio inolvidables.',
        image: '/images/innovators/cabina_telefonica.jpg',
        features: ['Mensajes de Audio', 'Teléfono Retro', 'Recuerdos Emotivos']
    }
];

export const CITIES: CityData[] = [
    {
        id: 'bogota',
        name: 'Bogotá',
        slug: 'bogota',
        title: 'Cabinas de Fotos en Bogotá',
        description: 'Llevamos la mejor experiencia de photo booth a la capital. Alquiler de cabinas en Bogotá para bodas, quince años y eventos corporativos.',
        heroImage: '/images/corporate/event_1.jpg'
    },
    {
        id: 'medellin',
        name: 'Medellín',
        slug: 'medellin',
        title: 'Cabinas de Fotos en Medellín',
        description: 'Eventos inolvidables en la ciudad de la eterna primavera. Servicio de 360 y espejos mágicos en Medellín y alrededores.',
        heroImage: '/images/corporate/event_2.jpg'
    },
    {
        id: 'cali',
        name: 'Cali',
        slug: 'cali',
        title: 'Cabinas de Fotos en Cali',
        description: 'Sabor y diversión en Cali con nuestras cabinas de fotos. Ideal para fiestas de gala y eventos empresariales.',
        heroImage: '/images/corporate/event_3.png'
    },
    {
        id: 'eje-cafetero',
        name: 'Eje Cafetero',
        slug: 'eje-cafetero',
        title: 'Cabinas de Fotos en el Eje Cafetero',
        description: 'Experiencias únicas en Pereira, Manizales y Armenia. Inmortaliza tu evento en el corazón del triángulo del café.',
        heroImage: '/images/corporate/event_4.png'
    },
    {
        id: 'costa-atlantica',
        name: 'Costa Atlántica',
        slug: 'costa-atlantica',
        title: 'Cabinas de Fotos en la Costa',
        description: 'Diversión bajo el sol en Cartagena, Barranquilla y Santa Marta. Eventos playeros y bodas destino con Enyoik.',
        heroImage: '/images/corporate/event_5.png'
    }
];
