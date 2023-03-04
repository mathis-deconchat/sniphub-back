import { Language } from './../src/ressources/languages/models/language.model';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  // Create some sample languages

  const l = [
    {
    name: 'Angular',
    iconName: 'angularjs',
    prismLanguage: 'typescript'
  },
  {
    name: "Kubernetes",
    iconName: "kubernetes",
    prismLanguage: "yaml"
  },
  {
    name: "Java",
    iconName: "java",
    prismLanguage: "java"

  },
  {
    name: 'go',
    iconName: 'go',
    prismLanguage: 'go'
  },
  {
    name: 'Docker',
    iconName: 'docker',
    prismLanguage: 'yaml'
  },
  {
    name: 'Python',
    iconName: 'python',
    prismLanguage: 'python'

  },
  {
    name: 'Javascript',
    iconName: 'javascript',
    prismLanguage: 'javascript'
  },
  {
    name: 'Typescript',
    iconName: 'typescript',
    prismLanguage: 'typescript'
  },
  {
    name: 'C#',
    iconName: 'csharp',
    prismLanguage: 'csharp'
  },
  {
    name: 'C++',
    iconName: 'cplusplus',
    prismLanguage: 'cpp'
  },
  {
    name: 'SQL',
    iconName: 'sql',
    prismLanguage: 'sql'
  }
  
]

  try{

    for (let i = 0; i < l.length; i++) {
      await prisma.languages.create({ data: l[i] });
    }
  } catch(e){
    console.log("Already seeded or error", e)
  }

  // // Create some sample tags
  // const tag1 = await prisma.tags.create({ data: { name: 'Prisma' } });
  // const tag2 = await prisma.tags.create({ data: { name: 'React' } });

 


  console.log('Seeding completed!');
}

seed()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });