export function GET(req,res){
    console.log(res.params.id);
    return BaseNextResponse.json({value:"hello how are you?"})
}