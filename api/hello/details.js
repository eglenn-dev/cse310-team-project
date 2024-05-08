export default async (req, res) => {
    if (req.method === 'GET') {
        // Fetch product details (e.g., from a database or external API)
        const productDetails = await getProductDetails();
        res.status(200).json(productDetails);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};