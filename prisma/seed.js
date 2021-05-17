const {
    PrismaClient
} = require("@prisma/client")

const prisma = new PrismaClient()
async function main() {

    const createMany = await prisma.employee.createMany({
        data: [{
                name: 'Anoop',
                age: 40,
                place: 'Kochi',
                active: true
            },
            {
                name: 'David',
                age: 25,
                place: 'Mumbai',
                active: true
            },
            {
                name: 'Joseph',
                age: 32,
                place: 'Goa',
                active: false
            },
        ],
        skipDuplicates: true,
    })

    console.log({
        createMany
    })

}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })