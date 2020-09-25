const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const models = require('../models');
// const {check, validationResult} = require('express-validator');

// Office Sign In
router.route('/user/login').post(async (req, res, next) => {
    let office = await models.Office.findOne({
        where: {
            officeId: req.body.officeId,
            officePassword: req.body.officePassword
        }
    });

    if (!office) return res.status(400).send('Office Does Not Exist');
    res.json(office)

});

router.route('/commands').get((req, res, next) => {
    models.Command.findAndCountAll()
    .then(commands => {
        res.json(commands)
    }) 
    .catch(err => {
        res.send('error: ' + err)
    })
});
router.route('/services').get((req,res,next) => {
    models.Service.findAndCountAll()
    .then(services => {
        res.json(services)
    })
    .catch(err => {
        res.send('error: ' + err)
    })
});
router.route('/offices').get((req, res, next) => {
    models.Office.findAndCountAll()
    .then(offices => {
        res.json(offices)
    })
    .catch(err => {
        res.send('error: ' + err)
    })
});
router.route('/command/:id').get((req, res, next) => {
    models.Command.findOne({
        where: {
            commandId: req.params.id
        }
    })
        .then(command => {
            if (command) {
                res.json(command)
            } else {
                res.send('Command does not exist')
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
});
router.route('/office/:id').get((req, res, next) => {
    models.Office.findOne({
        where: {
            officeId: req.params.id
        }
    })
        .then(offices => {
            if (offices) {
                res.json(offices)
            } else {
                res.send('Office does not exist')
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
});
router.route('/service/:id').get((req, res, next) => {
    models.Service.findOne({
        where: {
            serviceId: req.params.id
        }
    })
        .then(services => {
            if (services) {
                res.json(services)
            } else {
                res.send('Service does not exist')
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
});
router.route('/command/add').post((req, res, next) => {
    const command = {
        commandId: req.body.commandId,
        commandName: req.body.commandName,
        dateCreated: req.body.dateCreated,
        office_Id: req.body.office_Id,
        service_Id: req.body.service_Id
    };
    models.Command.create(command)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.json('error: ' + err)
        })
});
router.route('/service/add').post((req, res, next) => {
    const service = {
        serviceId: req.body.serviceId,
        serviceName: req.body.serviceName
    };
    models.Service.create(service)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.json('error: ' + err)
        })
});
router.route('/office/add').post((req, res, next) => {
    const office = {
        officeId: req.body.officeId,
        officeName: req.body.officeName,
        officePassword: req.body.officePassword,
        service_Id: req.body.service_Id
    };
    models.Office.create(office)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.json('error: ' + err)
        })
});
router.route('/command/delete/:id').delete((req, res, next) => {
    models.Command.destroy({
        where: {
            commandId: req.params.id
        }
    })
        .then(() => {
            res.json({ status: 'Command deleted!' })
        })
        .catch(err => {
            res.send('error: ' + err)
        })
});
router.route('/service/delete/:id').delete((req, res, next) => {
    models.Service.destroy({
        where: {
            serviceId: req.params.id
        }
    })
        .then(() => {
            res.json({ status: 'Service deleted!' })
        })
        .catch(err => {
            res.send('error: ' + err)
        })
});
router.route('/office/delete/:id').delete((req, res, next) => {
    models.Office.destroy({
        where: {
            officeId: req.params.id
        }
    })
        .then(() => {
            res.json({ status: 'Office deleted!' })
        })
        .catch(err => {
            res.send('error: ' + err)
        })
});

module.exports = router;