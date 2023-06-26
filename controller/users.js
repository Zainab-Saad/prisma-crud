const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.getUsers = async (req, res, next) => {
    const allUsers = await prisma.users.findMany();
    res.json(allUsers);
}

exports.postUser = async (req, res, next) => {
    const newUser = await prisma.users.create({
        data : req.body
    });
    res.json(newUser);
}

exports.updateUser = async (req, res, next) => {
    const id = req.params.id;
    const newAge = req.body.age;
    const updatedUser = await prisma.users.update({
        where : {
            id : parseFloat(id),
        },
        data : {
            age : newAge,
        }
    }
    );
    res.json(updatedUser);
}

exports.deleteUser = async (req, res, next) => {
    const id = req.params.id;
    const deletedUser = await prisma.users.delete({
        where : {
            id : parseInt(id),
        }
    })
    res.json(deletedUser);
}