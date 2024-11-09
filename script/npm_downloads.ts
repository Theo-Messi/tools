import axios from 'axios'
import { execSync } from 'child_process'

const packagesNames: string[] = ['@theojs/lumen']
const barkUrl = process.env.BARK_KEY

if (!barkUrl) {
  throw new Error('BARK_KEY 环境变量未定义')
}

interface NpmDownload {
  day: string
  downloads: number
}

async function getNpmDownloads(packageName: string): Promise<NpmDownload[]> {
  const url = `https://api.npmjs.org/downloads/range/last-month/${packageName}`
  try {
    const response = await axios.get(url)
    return response.data.downloads
  } catch (error) {
    console.error(`Error fetching npm downloads for ${packageName}:`, error)
    return []
  }
}

async function main() {
  for (const packageName of packagesNames) {
    const downloads = await getNpmDownloads(packageName)

    // 计算当月的总下载量
    const totalDownloads = downloads.reduce((sum, download) => sum + download.downloads, 0)

    const body =
      totalDownloads > 0 ? `${packageName} 包当月的总下载量是 ${totalDownloads}` : `${packageName} 包本月没有下载量数据`

    const curlCommand = `curl -X "POST" "${barkUrl}" \
      -H 'Content-Type: application/json; charset=utf-8' \
      -d '{
            "body": "${body}",
            "title": "NPM 下载量",
            "badge": 1,
            "category": "Github Actions",
            "sound": "multiwayinvitation.caf",
            "icon": "https://cdn1.iconfinder.com/data/icons/data-analytics-and-data-storage-circle-flat-vol-4/100/report__analysis__chart__statistics-1024.png",
            "group": "Github Actions"
          }'`

    try {
      execSync(curlCommand)
      console.log(`Notification sent to Bark for ${packageName}`)
    } catch (error) {
      console.error(`Error sending notification to Bark for ${packageName}:`, error)
    }
  }
}

main()
