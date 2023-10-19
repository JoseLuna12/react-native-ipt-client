import * as FileSystem from 'expo-file-system';
const URL = "https://iptv-org.github.io/iptv/index.nsfw.m3u"
const dir = FileSystem.cacheDirectory + 'ipptv/';
const m3u_dir = dir + `ipptv.m3u`

async function ensureDirExists() {
    const dirInfo = await FileSystem.getInfoAsync(dir);
    if (!dirInfo.exists) {
        await FileSystem.makeDirectoryAsync(dir, { intermediates: true });
    }
}

export async function downloadm3u() {
    try {
        await ensureDirExists()
        FileSystem.downloadAsync(URL, m3u_dir)

    } catch (e) {
        console.error("Couldn't download m3u file:", e);
    }
}

export async function getIptv() {
    await ensureDirExists()
    const fileInfo = await FileSystem.getInfoAsync(m3u_dir);

    if (!fileInfo.exists) {
        console.log("M3U file isn't cached locally. Downloading…");
        await downloadm3u();
    }

    return m3u_dir;
}

export async function readIptvAsString(file) {
    return await FileSystem.readAsStringAsync(file, { encoding: "utf8" })
}