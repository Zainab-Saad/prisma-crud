const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


exports.getHouses = async (req, res, next) => {
    const allHouses = await prisma.houses.findMany({
        include : {
            owner : true,
            builtBy : true
        }
    });
    res.json(allHouses);
}

exports.getFilteredHouses = async (req, res, next) => {
    const allHouses = await prisma.houses.findMany({
        where : {
            wifiPassword : {
                contains : 'ew',
            },
            owner : {
                age : {
                    gt : 18,
                }
            },
        },
        orderBy : {
            owner : {
                firstName : "asc",
            }
        },
        include : {
            owner : true,
            builtBy : true
        }
    });
    res.json(allHouses);
}

exports.postHouse = async (req, res, next) => {
    // req.body contains address, wifiPassword, ownerId, builtById
    const newHouse = await prisma.houses.create({
        data : req.body,
    })
    res.json(newHouse);
}

exports.updateHouse = async (req, res, next) => {
    const id = req.params.id;
    const newWifiPassword = req.body.wifiPassword;
    const updatedHouse = await prisma.houses.update({
        where : {
            id : parseInt(id),
        },
        data : {
            wifiPassword : newWifiPassword,
        }
    })
    res.json(updatedHouse);
}

exports.deleteHouse = async (req, res, next) => {
    const id = req.params.id;
    const deletedHouse = await prisma.houses.delete({
        where : {
            id : parseInt(id),
        }
    })
    res.json(deletedHouse);
}