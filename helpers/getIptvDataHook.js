import { useState, useEffect } from "react"
import { getIptv, readIptvAsString } from "./downloadm3u"
import * as parser from "iptv-playlist-parser"

/**
 * Represents a Ipptv data hook.
 * @constructor
 * @param {number?} count - the image of the channel.
 */
export default function useIpptvData(count = 400) {
    const [data, setData] = useState([])

    useEffect(() => {
        async function loadData() {
            try {

                const file = await getIptv()
                const read = await readIptvAsString(file)
                const parsed = parser.parse(read)
                const values = []
                for (let i = 0; i < parsed.items.length; i++) {
                    const item = parsed.items[i]
                    const element = { ...item, rnId: item.tvg.id + item.tvg.name + item.name + "" + i };
                    values.push(element)
                }
                setData(values)
            } catch (e) {
                console.log("there was a problem:", e)
            }
        }
        loadData()
    }, [])

    return data
}