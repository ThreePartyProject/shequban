// 计算今天
function getTodayDate () {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1 // 月份加1因为从0开始计数
  const day = today.getDate()

  const monthStr = month < 10 ? `0${month}` : month
  const dayStr = day < 10 ? `0${day}` : day
  return `${year}年${monthStr}月${dayStr}日`
}

module.exports = {
  getTodayDate
}
