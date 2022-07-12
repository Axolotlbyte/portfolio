export default function handler(req,res){
    if (req.method !== 'POST') return res.json([{error: `${req.method} not allowed`}])
    else{
        const {email, body, name} = req.body;

        return res.json({email,body,name})
    }
}