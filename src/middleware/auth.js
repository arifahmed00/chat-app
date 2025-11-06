const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require("../src/config/envConfig")

exports.chackUserToken = (req, res, next) => {
  const authHeader = req.headers[authorization] || req.headers[authorization];
  if (!authHeader) return res.status(401).json({ error: 'Access token missing or invalid' });

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // { id, username, role }
    next();
  } catch {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
};

exports.chackAdminToken = async(req,res,next) =>{
  const authHeader = req.headers['authorization'] || req.headers['Authorization'];

  if (!authHeader) return res.status(401).json({ error: 'Admin access token missing or invalid' });
  const token = authHeader.split(' ')[1];
  try{
    const decoded = jwt.verify(token,JWT_SECRET)
    if (decoded.role !='admin'){
      return res.status(403).json({massage: "Access denied. Admins only."})
    }
    req.user = decoded
    next()
  }
  catch(error){
    return res.status(403).json({  message: 'Invalid or expired token'})
  }
}
