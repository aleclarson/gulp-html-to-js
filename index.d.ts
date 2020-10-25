import * as stream from 'stream'

declare const gulpHtmlToJs: (options?: {
  concat?: string
  prefix?: string
  global?: string
}) => stream.Transform

export = gulpHtmlToJs
