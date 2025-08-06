import { PrismaClient, Prisma } from "@prisma/client";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const prisma = new PrismaClient();

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function toPascalCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function toCamelCase(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

async function insertLocationData(locations) {
  for (const location of locations) {
    const { id, country, city, state, address, postalCode, coordinates } =
      location;
    try {
      await prisma.$executeRawUnsafe(`
        INSERT INTO "Location" ("id", "country", "city", "state", "address", "postalCode", "coordinates") 
        VALUES (${id}, '${country}', '${city}', '${state}', '${address}', '${postalCode}', ST_GeomFromText('${coordinates}', 4326));
      `);
      console.log(`Inserted location for ${city}`);
    } catch (error) {
      console.error(`Error inserting location for ${city}:`, error.message);
    }
  }
}

async function resetSequence(modelName) {
  const quotedModelName = `"${toPascalCase(modelName)}"`;

  const maxIdResult = await prisma[modelName].findMany({
    select: { id: true },
    orderBy: { id: "desc" },
    take: 1,
  });

  if (maxIdResult.length === 0) return;

  const nextId = maxIdResult[0].id + 1;

  try {
    await prisma.$executeRawUnsafe(`
      SELECT setval(pg_get_serial_sequence('${quotedModelName}', 'id'), ${nextId}, false);
    `);
    console.log(`Reset sequence for ${modelName} to ${nextId}`);
  } catch (error) {
    console.error(`Error resetting sequence for ${modelName}:`, error.message);
  }
}

async function deleteAllData(orderedFileNames) {
  const modelNames = orderedFileNames.map((fileName) => {
    return toPascalCase(path.basename(fileName, path.extname(fileName)));
  });

  for (const modelName of modelNames.reverse()) {
    const modelNameCamel = toCamelCase(modelName);
    const model = prisma[modelNameCamel];
    if (!model) {
      console.error(`Model ${modelName} not found in Prisma client`);
      continue;
    }
    try {
      await model.deleteMany({});
      console.log(`Cleared data from ${modelName}`);
    } catch (error) {
      console.error(`Error clearing data from ${modelName}:`, error.message);
    }
  }
}

async function main() {
  const dataDirectory = path.join(__dirname, "seedData");

  const orderedFileNames = [
    "location.json",
    "manager.json",
    "property.json",
    "tenant.json",
    "lease.json",
    "application.json",
    "payment.json",
  ];

  await deleteAllData(orderedFileNames);

  for (const fileName of orderedFileNames) {
    const filePath = path.join(dataDirectory, fileName);
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const modelName = toPascalCase(
      path.basename(fileName, path.extname(fileName))
    );
    const modelNameCamel = toCamelCase(modelName);

    if (modelName === "Location") {
      await insertLocationData(jsonData);
    } else {
      const model = prisma[modelNameCamel];
      try {
        for (const item of jsonData) {
          await model.create({ data: item });
        }
        console.log(`Seeded ${modelName} with data from ${fileName}`);
      } catch (error) {
        console.error(`Error seeding data for ${modelName}:`, error.message);
      }
    }

    await resetSequence(modelNameCamel);
    await sleep(1000);
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
