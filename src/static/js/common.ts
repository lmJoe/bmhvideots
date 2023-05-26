export const appkey = 'B2A9505CBF4D4E5091DF054C1F490980';
export const getRandomNum = (minnum: number, maxnum: number, n?:number):number  =>{ //随机数
  var choice:number = maxnum - minnum + 1;
  var num:number = Math.floor(Math.random() * choice + minnum);
  if (n === num) {
    return getRandomNum(minnum, maxnum, n)
  } else {
    return num
  }
}
export const replaceImgUrl = (imgUrl: string) => {
  if (imgUrl.indexOf("img.baomihua.com") != -1)
      return imgUrl.replace("img.baomihua.com", "img.pomoho.com");
  if (imgUrl.indexOf("img04.video.baomihua.com") != -1)
      return imgUrl.replace("img04.video.baomihua.com", "img04.video.pomoho.com");
  if (imgUrl.indexOf("img02.video.baomihua.com") != -1)
      return imgUrl.replace("img02.video.baomihua.com", "img02-video.pomoho.com");
  if (imgUrl.indexOf("img03.video.baomihua.com") != -1)
      return imgUrl.replace("img03.video.baomihua.com", "img04.video.pomoho.com");
  if (imgUrl.indexOf("img01.video.baomihua.com") != -1)
      return imgUrl.replace("img01.video.baomihua.com", "img04.video.pomoho.com");
  if (imgUrl.indexOf("p001.baomihua.com") != -1)
      return imgUrl.replace("p001.baomihua.com", "p001.pomoho.com");
  return imgUrl;
}
export const getTimestampByDays = (n:number) => {
  var now = new Date()
  var year = now.getFullYear()
  var month = now.getMonth() + 1
  var day = now.getDate() + n;
  var hours = now.getHours() + n

  return year + '' + month + '' + day;
}
export const getTimestampByHours = (n:number) => {
  var now = new Date()
  var year = now.getFullYear()
  var month = now.getMonth() + 1
  var day = now.getDate()
  var hours = now.getHours() + n
  return year + '' + month + '' + day + '' + hours
}