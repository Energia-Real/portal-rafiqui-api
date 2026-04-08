import { PrismaClient, Role, PanelTechnology, PanelApplication, PartnerType } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Hash de la contraseña "password123"
  const hashedPassword = await bcrypt.hash('password123', 10);

  // Crear usuario Collector
  const collector = await prisma.user.upsert({
    where: { email: 'collector@rafiqui.com' },
    update: {},
    create: {
      email: 'collector@rafiqui.com',
      password: hashedPassword,
      name: 'Collector User',
      role: Role.OPERATOR,
    },
  });

  console.log('✅ Created collector:', collector.email);

  // Crear usuario Inspector
  const inspector = await prisma.user.upsert({
    where: { email: 'inspector@rafiqui.com' },
    update: {},
    create: {
      email: 'inspector@rafiqui.com',
      password: hashedPassword,
      name: 'Inspector User',
      role: Role.OPERATOR,
    },
  });

  console.log('✅ Created inspector:', inspector.email);

  // Crear usuario Admin (bonus)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@rafiqui.com' },
    update: {},
    create: {
      email: 'admin@rafiqui.com',
      password: hashedPassword,
      name: 'Admin User',
      role: Role.ADMIN,
    },
  });

  console.log('✅ Created admin:', admin.email);

  console.log('\n📋 Usuarios creados:');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('Email: collector@rafiqui.com');
  console.log('Password: password123');
  console.log('Role: OPERATOR (Collector)');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('Email: inspector@rafiqui.com');
  console.log('Password: password123');
  console.log('Role: OPERATOR (Inspector)');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('Email: admin@rafiqui.com');
  console.log('Password: password123');
  console.log('Role: ADMIN');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  // Seed del catálogo de paneles solares
  console.log('\n🔆 Seeding solar panel catalog...');

  const solarPanels = [
    // Tier 1 - China
    { brand: 'LONGi Solar', model: 'Hi-MO 6', technology: PanelTechnology.HJT, powerWp: 580, efficiencyPercent: 22.8, country: 'China', tier: 1, application: PanelApplication.COMMERCIAL },
    { brand: 'LONGi Solar', model: 'Hi-MO 5', technology: PanelTechnology.PERC, powerWp: 540, efficiencyPercent: 21.3, country: 'China', tier: 1, application: PanelApplication.RESIDENTIAL },
    { brand: 'JA Solar', model: 'DeepBlue 4.0 Pro', technology: PanelTechnology.TOPCON, powerWp: 620, efficiencyPercent: 22.5, country: 'China', tier: 1, application: PanelApplication.UTILITY },
    { brand: 'JA Solar', model: 'DeepBlue 3.0', technology: PanelTechnology.PERC, powerWp: 545, efficiencyPercent: 21.0, country: 'China', tier: 1, application: PanelApplication.COMMERCIAL },
    { brand: 'Trina Solar', model: 'Vertex S+', technology: PanelTechnology.TOPCON, powerWp: 445, efficiencyPercent: 22.3, country: 'China', tier: 1, application: PanelApplication.RESIDENTIAL },
    { brand: 'Trina Solar', model: 'Vertex N', technology: PanelTechnology.TOPCON, powerWp: 700, efficiencyPercent: 22.5, country: 'China', tier: 1, application: PanelApplication.UTILITY },
    { brand: 'Canadian Solar', model: 'HiKu7', technology: PanelTechnology.TOPCON, powerWp: 665, efficiencyPercent: 22.8, country: 'Canadá', tier: 1, application: PanelApplication.UTILITY },
    { brand: 'Canadian Solar', model: 'BiKu', technology: PanelTechnology.BIFACIAL, powerWp: 545, efficiencyPercent: 21.0, country: 'Canadá', tier: 1, application: PanelApplication.COMMERCIAL },
    { brand: 'Jinko Solar', model: 'Tiger Neo', technology: PanelTechnology.TOPCON, powerWp: 620, efficiencyPercent: 22.6, country: 'China', tier: 1, application: PanelApplication.UTILITY },
    { brand: 'Jinko Solar', model: 'Tiger Pro', technology: PanelTechnology.PERC, powerWp: 550, efficiencyPercent: 21.4, country: 'China', tier: 1, application: PanelApplication.COMMERCIAL },
    { brand: 'Risen Energy', model: 'Titan S', technology: PanelTechnology.HJT, powerWp: 700, efficiencyPercent: 22.5, country: 'China', tier: 1, application: PanelApplication.UTILITY },
    { brand: 'Suntech', model: 'Ultra V Pro', technology: PanelTechnology.PERC, powerWp: 545, efficiencyPercent: 21.1, country: 'China', tier: 1, application: PanelApplication.COMMERCIAL },
    { brand: 'CSUN', model: 'CSUN-S', technology: PanelTechnology.POLYCRYSTALLINE, powerWp: 340, efficiencyPercent: 17.5, country: 'China', tier: 1, application: PanelApplication.RESIDENTIAL },
    { brand: 'Seraphim', model: 'Eclipse', technology: PanelTechnology.PERC, powerWp: 450, efficiencyPercent: 20.8, country: 'China', tier: 1, application: PanelApplication.RESIDENTIAL },

    // Tier 1 - Premium / Europa y América
    { brand: 'SunPower', model: 'Maxeon 7', technology: PanelTechnology.HJT, powerWp: 440, efficiencyPercent: 24.0, country: 'EE.UU.', tier: 1, application: PanelApplication.RESIDENTIAL },
    { brand: 'SunPower', model: 'Maxeon 6', technology: PanelTechnology.HJT, powerWp: 420, efficiencyPercent: 22.8, country: 'EE.UU.', tier: 1, application: PanelApplication.RESIDENTIAL },
    { brand: 'REC Group', model: 'Alpha Pure-RX', technology: PanelTechnology.HJT, powerWp: 470, efficiencyPercent: 22.3, country: 'Noruega', tier: 1, application: PanelApplication.RESIDENTIAL },
    { brand: 'REC Group', model: 'TwinPeak 5', technology: PanelTechnology.PERC, powerWp: 410, efficiencyPercent: 21.0, country: 'Noruega', tier: 1, application: PanelApplication.RESIDENTIAL },
    { brand: 'Panasonic', model: 'EverVolt H', technology: PanelTechnology.HJT, powerWp: 410, efficiencyPercent: 22.2, country: 'Japón', tier: 1, application: PanelApplication.RESIDENTIAL },
    { brand: 'Meyer Burger', model: 'White', technology: PanelTechnology.HJT, powerWp: 400, efficiencyPercent: 21.8, country: 'Suiza', tier: 1, application: PanelApplication.RESIDENTIAL },
    { brand: 'Heckert Solar', model: 'NeMo 4.2', technology: PanelTechnology.MONOCRYSTALLINE, powerWp: 400, efficiencyPercent: 20.5, country: 'Alemania', tier: 1, application: PanelApplication.RESIDENTIAL },
    { brand: 'Solarwatt', model: 'Panel vision GM 3.0', technology: PanelTechnology.PERC, powerWp: 380, efficiencyPercent: 20.0, productWarrantyYears: 30, country: 'Alemania', tier: 1, application: PanelApplication.RESIDENTIAL },

    // Comercial / Industrial
    { brand: 'First Solar', model: 'Series 7', technology: PanelTechnology.THIN_FILM_CDTE, powerWp: 545, efficiencyPercent: 19.3, country: 'EE.UU.', tier: 1, application: PanelApplication.UTILITY },
    { brand: 'Hanwha Q Cells', model: 'Q.PEAK DUO ML-G11+', technology: PanelTechnology.TOPCON, powerWp: 510, efficiencyPercent: 21.9, country: 'Corea del Sur', tier: 1, application: PanelApplication.COMMERCIAL },
    { brand: 'Vikram Solar', model: 'Somera Grand', technology: PanelTechnology.PERC, powerWp: 545, efficiencyPercent: 21.0, country: 'India', tier: 1, application: PanelApplication.COMMERCIAL },
    { brand: 'Waaree Energies', model: 'Bifacial 144', technology: PanelTechnology.BIFACIAL, powerWp: 545, efficiencyPercent: 21.2, country: 'India', tier: 1, application: PanelApplication.INDUSTRIAL },
    { brand: 'Adani Solar', model: 'Mono PERC', technology: PanelTechnology.PERC, powerWp: 540, efficiencyPercent: 20.8, country: 'India', tier: 1, application: PanelApplication.UTILITY },

    // Paneles residenciales pequeños
    { brand: 'Renogy', model: 'Monocrystalline 100W', technology: PanelTechnology.MONOCRYSTALLINE, powerWp: 100, efficiencyPercent: 21.0, country: 'EE.UU.', tier: 2, application: PanelApplication.MOBILE },
    { brand: 'Goal Zero', model: 'Boulder 200', technology: PanelTechnology.MONOCRYSTALLINE, powerWp: 200, efficiencyPercent: 19.5, country: 'EE.UU.', tier: 2, application: PanelApplication.MOBILE },
  ];

  // Limpiar catálogo existente y crear nuevos registros
  await prisma.solarPanelCatalog.deleteMany({});
  
  for (const panel of solarPanels) {
    await prisma.solarPanelCatalog.create({
      data: panel,
    });
  }

  console.log(`✅ Created ${solarPanels.length} solar panel catalog entries`);

  // Seed del catálogo de socios
  console.log('\n🤝 Seeding partners catalog...');

  const partners = [
    { name: 'Beetmann', slug: 'beetmann', type: PartnerType.SOLAR_INSTALLER },
    { name: 'Energía Real', slug: 'energia-real', type: PartnerType.ENERGY_PROVIDER },
    { name: 'Corporativo Soles', slug: 'corporativo-soles', type: PartnerType.SOLAR_INSTALLER },
    { name: 'Forefrontpower', slug: 'forefrontpower', type: PartnerType.ENERGY_PROVIDER },
    { name: 'Skysense', slug: 'skysense', type: PartnerType.SOLAR_INSTALLER },
    { name: 'Enertika', slug: 'enertika', type: PartnerType.ENERGY_PROVIDER },
    { name: 'Ergosolar', slug: 'ergosolar', type: PartnerType.SOLAR_INSTALLER },
    { name: 'Longi', slug: 'longi', type: PartnerType.MANUFACTURER },
    { name: 'Popular Power', slug: 'popular-power', type: PartnerType.ENERGY_PROVIDER },
    { name: 'Apolo Solar', slug: 'apolo-solar', type: PartnerType.SOLAR_INSTALLER },
    { name: 'RocOil', slug: 'rocoil', type: PartnerType.OTHER },
    { name: 'Solfium', slug: 'solfium', type: PartnerType.SOLAR_INSTALLER },
    { name: 'Aluminext', slug: 'aluminext', type: PartnerType.RECYCLER },
  ];

  for (const partner of partners) {
    await prisma.partner.upsert({
      where: { name: partner.name },
      update: {},
      create: partner,
    });
  }

  console.log(`✅ Created ${partners.length} partner entries`);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
