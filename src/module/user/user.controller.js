const {
  createUserService,
  loginUserService,
  getAllUserService,
  getUserByIdService,
  refreshTokenService
}= require('./user.service');

exports.createUser = async (req,res)=>{
  try{
    const user = await createUserService(req.body);
    res.status(201).json(user);
  } catch(err){
    res.status(500).json({message: err.message})
  }
};

exports.loginUser = async (req,res)=>{
  try{
    const{accessToken,refreshToken,user} = await loginUserService(req.body);
    res.status(200).json({
      message:'login successful',
      accessToken,
      refreshToken,
      user:{id:user._id}
    });
  }catch(err){
    res.status(400).json({message:err.message})
  }
};


exports.getAllUser = async (req,res)=>{
  try{
    const users = await getAllUserService();
    res.status(200).json(users);
  }catch(err){
    res.status(500).json({message:err.message});
  }
};

exports.getMe = async (req, res) => {
    try {
        const user = await getUserByIdService(req.user.userID);  
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.refreshTokenUser = async(req,res)=>{
  try {
    const newAccessToken =await refreshTokenService(req.body.refreshToken);
    res.status(200).json({accessToken:newAccessToken})
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};