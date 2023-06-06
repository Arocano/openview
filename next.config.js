module.exports = {
	trailingSlash: true,
	eslint: { 
		ignoreDuringBuilds: true 
	},
	images: {
		domains: ["res.cloudinary.com"],
	},
	env: {
		CLOUDINARY_URL: 'https://api.cloudinary.com/v1_1/javier-jaramillo',
    CLOUD_NAME: 'javier-jaramillo',
    UPLOAD_PRESET:'dexuttbq',
    JWT_SECRET: 'adfjdsjfsdjfkladjfkj',
	},
};
