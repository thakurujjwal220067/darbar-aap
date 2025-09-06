
 const webhookrun = async (req, res) => {
     const productData = req.body;
    console.log(productData,"holololololooo");
    res.send(productData);
};
export default {webhookrun}