import Conversation from "../model/Conversation.js";
import Messgae from "../model/Message.js"


export const newMessage = async (req, res) => {
    try {

        const newMessage = new Messgae(req.body)

        await newMessage.save();
        await Conversation.findByIdAndUpdate(req.body.conversationId, { message: req.body.text })
        return res.status(200).json('Message Has Been Sent Succesfully')
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

export const getMessages = async (req, res) => {
    try {
        const messages = await Messgae.find({ conversationId: req.params.id })
        return res.status(200).json(messages)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}