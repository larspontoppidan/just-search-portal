#!/usr/bin/python

import sys
import base64

LINE_LENGTH = 79
LINE_BREAK = "\\\n"
OUTPUT_START = 'var %s = \"'
OUTPUT_END = '\";'

if len(sys.argv) != 3:
    print("Usage: base64encode <input filename> <variable name>\n")
else:
    with open(sys.argv[1], "rb") as input_file:
        encoded_string = base64.b64encode(input_file.read())
 
    out_string = (OUTPUT_START % sys.argv[2]) + LINE_BREAK;
    line = "";

    for c in encoded_string:
        line += c
        if len(line) == LINE_LENGTH:
            out_string += line + LINE_BREAK
            line = ""

    out_string += line + OUTPUT_END

    print(out_string)



