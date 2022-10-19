const express = require("express")
const WorkSchema = require("../model/WorkSchema")
const router = express.Router()


// Get works API
router.get("/", async (req, res)=> {
    const allworks = await WorkSchema.find()
    res.send(allworks)
})

router.post("/", async (req, res)=> {
    const newwork = new WorkSchema({
        industry: req.body.industry,
        link: req.body.link,
        description: req.body.description,
        t1: req.body.t1,
        t3: req.body.t3,
        t2: req.body.t2
    })

    await newwork.save()
    res.send(newwork)
})


module.exports = router;