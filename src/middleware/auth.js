const jwt = require('jsonwebtoken');
const {JWT_SECRET}= require('../config/envConfig');

const checkUserToken = async (req,res,next) =>{
  const authHeader = req.headers['authorization'] || req.headers['Authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer')) {
    return res.status(401).json({Message: 'Access token is missing of invalid format'})
  }
  const token = authHeader.split(' ')[1];

  try{
    const decoded = jwt.verify(token, JWT_SECRET);

    req.user = decoded;
    next();
  }catch(err){
    return res.status(403).json({message:'Invalid or expires token '});
  }
};

const checkAdminToken = async (req,res,next)=>{
  const authHeader = req.headers['authorization'] || req.headers['Authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer')){
    return res.status(401).json({message: 'accesstoken missing or invalid format'});
  }

  const token =authHeader.split(' ')[1];

  try{
    const decoded = jwt.verify(token, JWT_SECRET);

    if(decoded.role != 'admin') {
      return res.status(403).json({message:'Access denied. Admin only'})
    }
    req.user = decoded;
    next();
  }catch(err){
    return res.status(403).json({message:'Invalid or expired token'})
  }
};

module.exports = {checkUserToken,checkAdminToken}