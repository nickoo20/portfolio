/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:'encrypted-tbn0.gstatic.com',
            }
        ]
    },
    // experimental:{
    //     serverActions:true,
    // },
};

export default nextConfig;
