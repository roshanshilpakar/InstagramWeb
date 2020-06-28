const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('hello roshan')
})


router.post('/signup',(req,res)=>{
  const {name,email,password} = req.body
  if(!email || !name || !password){
    return res.status(422).json({error:"Please fill all the fields"})
  }
  res.json({message:"Successfully posted"})
})

module.exports = router
