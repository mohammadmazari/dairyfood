import data from '../../../src/db.json'
export default function handler(req , res){
    res.status(200).json(data)
}
