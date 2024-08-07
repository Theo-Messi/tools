const axios = require('axios')
const { execSync } = require('child_process')

// 环境变量
const packageName = 'tmfe'
const barkUrl = process.env.BARK_KEY

async function getNpmDownloads(packageName) {
  const url = `https://api.npmjs.org/downloads/range/last-month/${packageName}`
  try {
    const response = await axios.get(url)
    return response.data.downloads
  } catch (error) {
    console.error('Error fetching npm downloads:', error)
    return []
  }
}

async function main() {
  const downloads = await getNpmDownloads(packageName)

  // 计算当月的总下载量
  const totalDownloads = downloads.reduce(
    (sum, download) => sum + download.downloads,
    0
  )

  const body =
    totalDownloads > 0
      ? `${packageName} 包当月的总下载量是 ${totalDownloads}`
      : `${packageName} 包本月没有下载量数据`

  const curlCommand = `curl -X "POST" "${barkUrl}" \
    -H 'Content-Type: application/json; charset=utf-8' \
    -d '{
          "body": "${body}",
          "title": "NPM 下载量",
          "badge": 1,
          "category": "Github Actions",
          "sound": "multiwayinvitation.caf",
          "icon": "https://authy.com/wp-content/uploads/npm-logo.png",
          "group": "Github Actions"
        }'`

  try {
    execSync(curlCommand)
    console.log('Notification sent to Bark')
  } catch (error) {
    console.error('Error sending notification to Bark:', error)
  }
}

main()
