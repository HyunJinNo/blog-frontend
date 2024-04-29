/** @type {import('next').NextConfig} */

import dotenv from "dotenv";

dotenv.config();

const nextConfig = {
  async rewrites() {
    return [
      {
        source: process.env.API_SOURCE,
        destination: process.env.API_DESTINATION,
      },
    ];
  },
};

export default nextConfig;
