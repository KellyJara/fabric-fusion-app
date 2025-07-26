module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',           // Ruta frontend
        destination: 'http://localhost:8000/:path*',  // Backend FastAPI
      },
    ];
  },
};