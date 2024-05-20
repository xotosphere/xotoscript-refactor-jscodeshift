import {API, FileInfo} from "jscodeshift"

export default function transformer(file: FileInfo, api: API) {
    const j = api.jscodeshift;
    const root = j(file.source)

    root.findVariableDeclarators("foo").renameTo("baa")

    return root.toSource()
}