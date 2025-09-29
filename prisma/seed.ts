
import { PrismaClient } from "../app/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // Categorías
  const categories = [
    "Ropa",
    "Electrónica",
    "Hogar",
    "Tecnología",
    "Juguetes",
    "Deportes",
  ];

  // Crear categorías si no existen
  for (const cat of categories) {
    // First check if a category with this name already exists
    const existingCategory = await prisma.categories.findFirst({
      where: { name: cat }
    });
    
    if (!existingCategory) {
      // If it doesn't exist, create it
      await prisma.categories.create({
        data: { name: cat }
      });
    }
  }

  // Productos de ejemplo
  const products = [
    {
      title: "Camiseta básica",
      category: "Ropa",
      stock: 50,
      description: "Camiseta de algodón 100% en varios colores",
      price: 15.99,
      image: "https://via.placeholder.com/300x300.png?text=Camiseta",
      manufacturerName: "Textiles España",
    },
    {
      title: "Auriculares Bluetooth",
      category: "Electrónica",
      stock: 30,
      description: "Auriculares inalámbricos con cancelación de ruido",
      price: 59.99,
      image: "https://via.placeholder.com/300x300.png?text=Auriculares",
      manufacturerName: "SoundTech",
    },
    {
      title: "Cafetera italiana",
      category: "Hogar",
      stock: 20,
      description: "Cafetera de acero inoxidable para 6 tazas",
      price: 24.99,
      image: "https://via.placeholder.com/300x300.png?text=Cafetera",
      manufacturerName: "CaféPro",
    },
    {
      title: "Portátil ultraligero",
      category: "Tecnología",
      stock: 10,
      description: "Ordenador portátil con 16GB RAM y SSD 512GB",
      price: 899.99,
      image: "https://via.placeholder.com/300x300.png?text=Portatil",
      manufacturerName: "TechWorld",
    },
    {
      title: "Lego Star Wars",
      category: "Juguetes",
      stock: 15,
      description: "Set de construcción con 500 piezas",
      price: 79.99,
      image: "https://via.placeholder.com/300x300.png?text=Lego",
      manufacturerName: "LEGO",
    },
    {
      title: "Balón de fútbol",
      category: "Deportes",
      stock: 40,
      description: "Balón oficial tamaño 5",
      price: 29.99,
      image: "https://via.placeholder.com/300x300.png?text=Balon",
      manufacturerName: "SportPro",
    },
  ];

  // Insertar productos
  for (const product of products) {
    // Check if a product with this title already exists
    const existingProduct = await prisma.product.findFirst({
      where: { title: product.title }
    });
    
    if (!existingProduct) {
      // If it doesn't exist, create it
      await prisma.product.create({
        data: product
      });
    }
  }

  console.log("✅ Seed completado con categorías y productos de ejemplo.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
