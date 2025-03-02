import { FileInfo } from "@uploadcare/react-widget"

export const fileTypeLimit = (fileInfo: FileInfo) => {
  const types = [
    "7z",
    "gdrive",
    "apng",
    "axf",
    "b1",
    "bin",
    "bit",
    "bz2",
    "caf",
    "css",
    "csv",
    "dae",
    "dbk",
    "djv",
    "djvu",
    "docm",
    "docx",
    "drc",
    "dvi",
    "eas",
    "elf",
    "epub",
    "exr",
    "fb2",
    "fbz",
    "flac",
    "flif",
    "fodg",
    "fodp",
    "fods",
    "fodt",
    "gbr",
    "gif",
    "glb",
    "gltf",
    "gpx",
    "gz",
    "h4",
    "h5",
    "hdf",
    "hdf4",
    "hdf5",
    "he2",
    "he5",
    "htm",
    "html",
    "ical",
    "icalendar",
    "ics",
    "ifb",
    "ifc",
    "ifcxml",
    "ifczip",
    "ino",
    "ipynb",
    "j2k",
    "jp2",
    "jpeg",
    "jpf",
    "jpg",
    "jpm",
    "jpx",
    "js",
    "json",
    "ko",
    "lz",
    "lzma",
    "m4a",
    "maff",
    "markdown",
    "md",
    "mj2",
    "mk3d",
    "mka",
    "mks",
    "mkv",
    "mng",
    "mod",
    "mp+",
    "mp3",
    "mpc",
    "mpp",
    "nc",
    "nzb",
    "o",
    "odg",
    "odp",
    "ods",
    "odt",
    "oga",
    "ogg",
    "ogm",
    "ogv",
    "ogv",
    "ogx",
    "opus",
    "ora",
    "oxps",
    "pdf",
    "png",
    "png",
    "pptm",
    "pptx",
    "prx",
    "ps",
    "puff",
    "py",
    "r",
    "rmd",
    "rss",
    "sfv",
    "sh",
    "smil",
    "so",
    "spx",
    "spx",
    "sqx",
    "svg",
    "tar",
    "tex",
    "toml",
    "txt",
    "wav",
    "webm",
    "webp",
    "woff",
    "woff2",
    "wrl",
    "wrz",
    "wv",
    "x3d",
    "x3db",
    "x3dbz",
    "x3dv",
    "x3dvz",
    "x3dz",
    "xht",
    "xht",
    "xhtml",
    "xhtml",
    "xlsm",
    "xlsx",
    "xml",
    "xpm",
    "xps",
    "xspf",
    "xz",
    "yaml",
    "yml",
    "zim",
    "zip",
    "zipx",
  ]

  if (fileInfo.name === null) {
    return
  }
  const extension = fileInfo.name.split(".").pop()

  if (extension && !types.includes(extension.toLowerCase())) {
    throw new Error("fileType")
  }
}

export const fileSizeLimit = (fileInfo) => {
  // 1024 * 1024 = 1MB
  // Current limit set to 100MB
  if (fileInfo.size !== null && fileInfo.size > 1024 * 1024 * 100) {
    throw new Error("fileMaximumSize")
  }
}
