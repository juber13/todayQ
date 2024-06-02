import Content from "../model/contentModel.js";


const addContent = async (req, res) => {
    try {
        const { title, description, price, imageUrl } = req.body;

        if ([title, description, price, imageUrl].some(field => field?.trim() === "")) {
            return res.status(400).json({
                sucess: false,
                message: "All fields are required",
            })
        }

        const newContent = await Content.create({ title, description, price, imageUrl });

        return res.status(200).json({
            sucecss: true,
            message: "Content uplaoded",
            newContent
        })


    } catch (err) {
        console.log(err);
    }
}

const allContents = async (req, res) => {
    try {

        const contents = await Content.find({});

        if (contents.length <= 0) {
            return res.status(200).json({
                success: true,
                message: "No Content uploded Yet",
                result: []
            })
        }

        return res.status(200).json({
            success: true,
            message: "Recieved",
            contents
        })

    } catch (err) {
        console.log(err)
    }
}


export { addContent, allContents }