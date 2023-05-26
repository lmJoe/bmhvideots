import JsonP from 'jsonp'
export default class GetJsonp {
  static jsonp(options:any){
      return new Promise((resolve,reject)=>{
          JsonP(options.url,{
            param:'',
            timeout:3000,
            prefix:undefined,
            name:undefined,
          },function(err,res){
              console.log("resresresres",res)
              if(res.status === 'success') {
                  resolve(res)
              } else {
                  reject(err)
              }
          })
      })
  }
}