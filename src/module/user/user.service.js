const User = require('./User.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {JWT_SECRET,ACCESS_TOKEN_EXPIRES_IN,REFRESH_TOKEN_EXPIRES_IN} = require('../../config/envConfig')


exports.createUserService = async({username,password})=>{
    const hashedpassword = await bcrypt.hash(password,10);
    const user = new User({username,password:hashedpassword});
    return await user.save();
};

exports.loginUserService = async ({username,password})=>{
    const user = await User.findOne({username}).select('+password');
    if (!user) throw new Error('User not found');

    const isMatch = await bcrypt.compare(password,user.password);
    if (!isMatch) throw new Error('invalid credentials');

    const accessToken = jwt.sign(
        {userID:user._id,role:user.role},
        JWT_SECRET,
        {expiresIn:ACCESS_TOKEN_EXPIRES_IN}
    );

    const refreshToken = jwt.sign(
        {userID:user._id},
        JWT_SECRET,
        {expiresIn: REFRESH_TOKEN_EXPIRES_IN}
    );
    user.refreshToken = refreshToken
    await user.save();
    return {accessToken,refreshToken,user}   
};

exports.getAllUserService = async ()=> {
    return await User.find();
};

exports.getUserByIdService = async (id) =>{
    return await User.findById(id).select('-password')
};

exports.refreshTokenService = async (refreshToken)=>{
    const decoded = jwt.verify(refreshToken,JWT_SECRET);
    const user = await User.findById(decoded.userID)

    if (!user|| user.refreshToken !==refreshToken){
        throw new Error('invalid refreshtoken')
    }

    const newAccessToken= jwt.sign(
        {userID:user._id, role:user.role},
        JWT_SECRET,
        {expiresIn:ACCESS_TOKEN_EXPIRES_IN}
    );
    return newAccessToken;
};